import React, { Component } from 'react';
import './people-page.css';
import ItemList from '../item-list/itemList';
import PersonDetails from '../person-details/person-details';
import ErrorIndicator from '../error-indicator';
import SwapiServise from '../service/swapi-servise';

export default class PeoplePage extends Component {

    swapiServise = new SwapiServise();

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
                <ItemList 
                    onItemSelected={ this.onPersonSelected } 
                    getData={ this.swapiServise.getAllPeople }
                    />
                <PersonDetails personId={ selectedPerson } />
            </div>
        )
    }
}
