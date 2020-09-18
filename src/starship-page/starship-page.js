import React, { Component } from 'react';
import Row from '../row/row';
import ErrorBoundary from '../error-boundary/error-boundary';
import { StarshipList } from '../sw-components';
import StarshipDetails from '../sw-components/details'

export default class StarshipPage extends Component {

    state = {
        selectedStarship: 11,
    }

    onPersonSelected = (id) => {
        this.setState({
          selectedStarship: id
        })
      }

    render() {

        const { selectedStarship } = this.state;

        const starshipList = (
          <ErrorBoundary>
              <StarshipList 
                    onItemSelected={ this.onPersonSelected } 
                    renderLabel={ item => item.name }
                    />
          </ErrorBoundary>
        );

        const starshipDetails = ( 
          <ErrorBoundary>
              <StarshipDetails itemId={ selectedStarship } /> 
          </ErrorBoundary>
          )

        return (
            <Row left={ starshipList } 
                 right={ starshipDetails } />
        )
    }
}