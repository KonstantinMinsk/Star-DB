import React, { Component } from 'react';
import './people-page.css';
import ItemList from '../item-list/itemList';
import PersonDetails from '../person-details/person-details';
import ErrorIndicator from '../error-indicator';
import SwapiServise from '../service/swapi-servise';
import Row from '../row/row';
import ErrorBoundary from '../error-boundary/error-boundary';

export default class PeoplePage extends Component {

    swapiServise = new SwapiServise();

    state = {
        selectedPerson: 11,
    }

    onPersonSelected = (id) => {
        this.setState({
          selectedPerson: id
        })
      }

    render() {

        const { selectedPerson } = this.state;

        const itemList = (
          <ItemList 
                    onItemSelected={ this.onPersonSelected } 
                    getData={ this.swapiServise.getAllPeople }
                    renderLabel={ item => item.name }
                    />
        );
        const personDetails = ( <PersonDetails personId={ selectedPerson } /> )

        return (
            <Row left={ <ErrorBoundary> { itemList }  </ErrorBoundary> } 
                 right={ <ErrorBoundary> { personDetails } </ErrorBoundary> } />
        )
    }
}