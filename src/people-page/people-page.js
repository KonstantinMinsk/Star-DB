import React, { Component } from 'react';
import './people-page.css';
import ItemList from '../item-list/itemList';
import ErrorIndicator from '../error-indicator';
import SwapiServise from '../service/swapi-servise';
import Row from '../row/row';
import ErrorBoundary from '../error-boundary/error-boundary';
import ItemDetails from '../item-details/item-details';

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
          <ErrorBoundary>
              <ItemList 
                    onItemSelected={ this.onPersonSelected } 
                    getData={ this.swapiServise.getAllPeople }
                    renderLabel={ item => item.name }
                    />
          </ErrorBoundary>
        );

        const personDetails = ( 
          <ErrorBoundary>
              <ItemDetails itemId={ selectedPerson } 
                           getData={ this.swapiServise.getPerson }
              /> 
          </ErrorBoundary>
          )

        return (
            <Row left={ itemList } 
                 right={ personDetails } />
        )
    }
}