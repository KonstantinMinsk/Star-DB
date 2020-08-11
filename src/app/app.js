import React, { Component } from 'react';
import './app.css';
import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import ItemList from '../item-list/itemList';
import ErrorButton from '../error-button/error-button';
import ErrorIndicator from '../error-indicator';
import PeoplePage from '../people-page/people-page';
import SwapiServise from '../service/swapi-servise';
import ItemDetails from '../item-details/item-details';

export default class App extends Component {

  swapiServise = new SwapiServise();

  state = {
    showRandomPlanet: true,
    hasError: false
  }

  componentDidCatch() {
    this.setState({ hasError: true })
  }

  toggleRandomPlanet = () => {
    this.setState({
      showRandomPlanet: !this.state.showRandomPlanet
    })
  }

  render() {

    const { showRandomPlanet, hasError } = this.state

    if(hasError) {
      return <ErrorIndicator />
    }

    const randomPlanet = showRandomPlanet ? <RandomPlanet /> : null;

    const { getPersonImage, getPlanetImage, getStarshipImage } = this.swapiServise;

    const personDetails = <ItemDetails itemId={ 14 } 
                                       getData={ this.swapiServise.getPerson } 
                                       getImageURL={ getPersonImage }
                                       />;
    const planetDetails = <ItemDetails itemId={ 13 } 
                                       getData={ this.swapiServise.getPlanet } 
                                       getImageURL={ getPlanetImage }
                                       />;

    return (
      <>
          <Header />
          { randomPlanet }
          <button
            className="toggle-planet btn btn-warning btn-lg"
            onClick={this.toggleRandomPlanet}>
            Toggle Random Planet
          </button>
          <ErrorButton />
          <PeoplePage />

          <div className='row'>
              {personDetails}
              {planetDetails}
          </div>
      </>
    );
  }
}
