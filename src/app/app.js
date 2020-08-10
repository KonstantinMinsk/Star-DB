import React, { Component } from 'react';
import './app.css';
import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import ItemList from '../item-list/itemList';
import PersonDetails from '../person-details/person-details';
import ErrorButton from '../error-button/error-button';
import ErrorIndicator from '../error-indicator';
import PeoplePage from '../people-page/people-page';
import SwapiServise from '../service/swapi-servise';

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

    const { showRandomPlanet, selectedPerson, hasError } = this.state

    if(hasError) {
      return <ErrorIndicator />
    }

    const randomPlanet = showRandomPlanet ? <RandomPlanet /> : null

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
                <ItemList 
                    onItemSelected={ this.onPersonSelected } 
                    getData={ this.swapiServise.getAllPlanets }
                    renderLabel={ (item) => `${item.name},  diameter: ${item.diameter}`}
                    />
                {/* <PersonDetails personId={ selectedPerson } /> */}
          </div>
          <div className='row'>
                <ItemList 
                    onItemSelected={ this.onPersonSelected } 
                    getData={ this.swapiServise.getAllStarships }
                    renderLabel={ item => item.name }
                    />
                {/* <PersonDetails personId={ selectedPerson } /> */}
          </div>
      </>
    );
  }
}
