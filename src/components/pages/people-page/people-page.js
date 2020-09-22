import React, { Component } from 'react';
import './people-page.css';
import ItemList from '../../item-list/itemList';
import SwapiServise from '../../../service/swapi-servise';
import Row from '../../row/row';
import ErrorBoundary from '../../error-boundary/error-boundary';
// import ItemDetails from '../../item-details/item-details-problem';
import { PersonDetails } from '../../../sw-components';

export default class PeoplePage extends Component {

    swapiServise = new SwapiServise();

    state = {
        selectedPerson: 1,
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
              {/* <ItemDetails itemId={ selectedPerson } 
                           getData={ this.swapiServise.getPerson }
                           getImageURL={ this.swapiServise.getPersonImage }
              />  */}
              <PersonDetails itemId={ selectedPerson } />
          </ErrorBoundary>
          )

        const message = (
            <h4 className='message'> Select a item from a list </h4>
        )

        return (
            <Row left={ itemList } 
                 right={ selectedPerson ? personDetails : message } />
        )
    }
}