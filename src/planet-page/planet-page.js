import React, { Component } from 'react';
import Row from '../row/row';
import ErrorBoundary from '../error-boundary/error-boundary';
import ItemDetails from '../item-details/item-details-problem';
import { PlanetDetails, PlanetList } from '../sw-components';

export default class PlanetPage extends Component {

    state = {
        selectedPlanet: 11,
    }

    onPersonSelected = (id) => {
        this.setState({
          selectedPlanet: id
        })
      }

    render() {

        const { selectedPlanet } = this.state;

        const planetList = (
          <ErrorBoundary>
              <PlanetList 
                    onItemSelected={ this.onPersonSelected } 
                    // renderLabel={ item => item.name }
                    />
          </ErrorBoundary>
        );

        const personDetails = ( 
          <ErrorBoundary>
              <PlanetDetails itemId={ selectedPlanet } /> 
          </ErrorBoundary>
          )

        return (
            <Row left={ planetList } 
                 right={ personDetails } />
        )
    }
}