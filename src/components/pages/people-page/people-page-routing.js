import React from 'react';
import './people-page.css';
import ItemList from '../../item-list/itemList';
import SwapiServise from '../../../service/swapi-servise';
import Row from '../../row/row';
import ErrorBoundary from '../../error-boundary/error-boundary';
// import ItemDetails from '../../item-details/item-details-problem';
import { PersonDetails } from '../../../sw-components';
import { withRouter } from 'react-router-dom';

const PeoplePageRouting = ({ match, history }) => {

    const { id } = match.params;
    
    const swapiServise = new SwapiServise();

    const itemList = (
      <ErrorBoundary>
          <ItemList 
                onItemSelected={ (id) => history.push(id) } 
                getData={ swapiServise.getAllPeople }
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
          <PersonDetails itemId={ id } />
      </ErrorBoundary>
      )
    const message = (
        <h4 className='message'> Select a item from a list </h4>
    )
    return (
      <>
        <h3> The famous People Star DB </h3>
        <Row left={ itemList } 
             right={ id ? personDetails : message } />
      </>
    )
}

export default withRouter(PeoplePageRouting)