import React, { Component } from 'react';
import Spinner from '../spinner/spinner';
import ErrorIndicator from '../error-indicator';
import PropTypes from 'prop-types';


// const f = (a) => {
//     return (b) => {
//         console.log(a*b);
//     }
// }
// f(2)(5);


// const f2 = () => {
//     return 'View'
// }
// f2();


const withData = (View) => {
    return class extends Component {

        state = {
            itemList: null,
            loading: true,
            error: false
        }
    
        onError = (error) => {
            this.setState({
              error: true,
              loading: false
            })
          }
        
        componentDidMount() {
            this.update();
        }
        componentDidUpdate(prevProps) {
            if(this.props.getData !== prevProps.getData) {
                this.update();
            }
        }

        update = () => {
            // console.log(this.props);
            const { getData } = this.props;
            getData()
                .then(itemList => {
                    this.setState({
                        itemList
                    })
                })
                .catch(this.onError)
        }

        render() {
            const { itemList, error } = this.state;
            if(!itemList) { return <Spinner /> }
            if(error) { return <ErrorIndicator /> };

            return (
                <View { ...this.props } itemList={ itemList } />
            )
        }
    }
}


const ViewList = (props) => {

    const { itemList, onItemSelected, children: renderLabel, location } = props;
    // console.log(location);
    
    const renderItem = (arr) => {
        return arr.map(item => {
            const { 
                id, 
                name 
            } = item;
            const label = renderLabel(item); //где передавать props ?
            return (
                <li className='list-group-item'
                    key={id} 
                    onClick={ () => onItemSelected(id) } 
                    name={ name }
                >
                    { label }
                </li>
            )
        })
    }

    const items = renderItem(itemList);
    return (
        <ul className={ location ? 'item-list list-group' : 'item-list list-group col-6'}
            style={{ padding: location ? '0 2rem' : null,
                     marginBottom: location ? '32px' : null
                }}
        >
            { items }
        </ul>
    )
}
ViewList.defaultProps = {
    onItemSelected: () => {},
  };
ViewList.propTypes = {
    itemList: PropTypes.arrayOf(PropTypes.object).isRequired,
    onItemSelected: PropTypes.func,
    children: PropTypes.func.isRequired
}

export { withData, ViewList }
