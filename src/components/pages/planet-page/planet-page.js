import React, { Component } from 'react';
import Row from '../../row/row';
import ErrorBoundary from '../../error-boundary/error-boundary';
import { PlanetDetails, PlanetList } from '../../../sw-components/index';
import './planet-page.css';

export default class PlanetPage extends Component {

    state = {
        selectedPlanet: null,
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
                    renderLabel={ item => item.name }
                    />
          </ErrorBoundary>
        );

        const personDetails = ( 
          <ErrorBoundary>
              <PlanetDetails itemId={ selectedPlanet } /> 
          </ErrorBoundary>
          )

    const message = (
            <h4 className='message'> Select a item from a list </h4>
        )      
        return (
          <>
            <h3> The popular Planets Star DB </h3>
            <Row left={ planetList } 
                 right={ selectedPlanet ? personDetails : message } />
          </>
        )
    }
}