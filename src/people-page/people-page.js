import React, { Component } from 'react';
import './people-page.css';
import ItemList from '../item-list/itemList';
import PersonDetails from '../person-details/person-details';
import ErrorIndicator from '../error-indicator';
import SwapiServise from '../service/swapi-servise';
import Row from '../row/row';

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

        const itemList = (
          <ItemList 
                    onItemSelected={ this.onPersonSelected } 
                    getData={ this.swapiServise.getAllPeople }
                    renderLabel={ item => item.name }
                    />
        );
        const personDetails = ( <PersonDetails personId={ selectedPerson } /> )

        return (
            <Row left={ itemList } right={ personDetails } />
        )
    }
}