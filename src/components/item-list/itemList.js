import React, { Component } from 'react';
import './item-list.css';
import Spinner from '../spinner/spinner';
import ErrorIndicator from '../error-indicator';

class ItemList extends Component {

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
        const { getData } = this.props;

        getData()
            .then(itemList => {
                this.setState({
                    itemList
                })
            })
            .catch(this.onError)
    }

    renderItem(arr) {
        return arr.map(item => {
            const { id, name } = item;
            const label = this.props.renderLabel(item)
            return (
                <li className='list-group-item'
                    key={id} 
                    onClick={ () => this.props.onItemSelected(id) } >
                    { label }
                </li>
            )
        })
    }

    render() {

        const { itemList, error } = this.state;
        if(!itemList) {
            return <Spinner />
        }
        const errorMessage = error ? <ErrorIndicator /> : null;

        const items = !error ? this.renderItem(itemList) : null;
        return (
            <ul className='item-list list-group col-6'>
                { errorMessage }
                { items }
            </ul>
        )
    }
}
export default ItemList