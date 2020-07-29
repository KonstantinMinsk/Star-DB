import React, { Component } from 'react';
import './item-list.css';

class ItemList extends Component {
    render() {
        return (
            <ul className='item-list list-group col-6'>
                <li className='list-group-item'>
                    Person 1
                </li>
                <li className='list-group-item'>
                    Person 2
                </li>
                <li className='list-group-item'>
                    Person 3
                </li>
            </ul>
        )
    }
}
export default ItemList