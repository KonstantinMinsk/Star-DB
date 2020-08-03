import React, { Component } from 'react';
import './people-page.css';
import ItemList from '../item-list/itemList';
import PersonDetails from '../person-details/person-details';

export default class PeoplePage extends Component {

    state = {
        selectedPerson: 11,
    }

    onPersonSelected = (id) => {
        this.setState({
          selectedPerson: id
        })
      }

    render() {

        const { selectedPerson } = this.state
        return (
            <div className='row'>
                <ItemList onItemSelected={ this.onPersonSelected } />
                <PersonDetails personId={ selectedPerson } />
            </div>
        )
    }
}
