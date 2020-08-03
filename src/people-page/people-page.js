import React, { Component } from 'react';
import './people-page.css';
import ItemList from '../item-list/itemList';
import PersonDetails from '../person-details/person-details';
import ErrorIndicator from '../error-indicator';

export default class PeoplePage extends Component {

    state = {
        selectedPerson: 11,
        hasError: false
    }

    componentDidCatch() {
        this.setState({ hasError: true })
      }

    onPersonSelected = (id) => {
        this.setState({
          selectedPerson: id
        })
      }

    render() {

        const { selectedPerson, hasError} = this.state;

        if(hasError) {
            return <ErrorIndicator />
          }

        return (
            <div className='row'>
                <ItemList onItemSelected={ this.onPersonSelected } />
                <PersonDetails personId={ selectedPerson } />
            </div>
        )
    }
}
