import React, { Component } from 'react';
import './app.css';
import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import ItemList from '../item-list/itemList';
import PersonDetails from '../person-details/person-details';
import ErrorButton from '../error-button/error-button';
import ErrorIndicator from '../error-indicator';
import PeoplePage from '../people-page/people-page';

export default class App extends Component {

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
      </>
    );
  }
}
