import React, { Component } from 'react';
import ErrorBoundary from '../../error-boundary/error-boundary';
import { StarshipList } from '../../../sw-components';
import './starship-page.css';
import { withRouter } from 'react-router-dom';

const StarshipPageRouting = ( props ) => {
    const { history, location } = props
    const starshipList = (
      <ErrorBoundary>
          <StarshipList location={location}
                onItemSelected={ 
                  (itemId) => { 
                    const newPath = `/starships/${itemId}`
                    history.push(`${newPath}`)
                   } 
                  } 
                // renderLabel={ item => item.name }
                />
      </ErrorBoundary>
    );
    return (
      <>
        <h3> The favorite Starships Star DB </h3>
        { starshipList } 
      </>
    )
}

export default withRouter(StarshipPageRouting);