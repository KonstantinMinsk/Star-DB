import React, { Component } from 'react';
import Spinner from '../spinner/spinner';
import ErrorIndicator from '../error-indicator';

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


const withData = (View, getData) => {
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
            // console.log(this.props);
            // const { getData } = this.props;
    
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

    const { itemList, onItemSelected, children: renderLabel } = props;
    // console.log(props);
    
    const renderItem = (arr) => {
        return arr.map(item => {
            const { id, name } = item;
            const label = renderLabel(item); //где передавать props ?
            return (
                <li className='list-group-item'
                    key={id} 
                    onClick={ () => onItemSelected(id) } 
                >
                    { label }
                </li>
            )
        })
    }

    const items = renderItem(itemList);
    return (
        <ul className='item-list list-group col-6'>
            { items }
        </ul>
    )
}

export { withData, ViewList }
