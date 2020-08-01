import React, { Component } from 'react';
import './app.css';
import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import { render } from '@testing-library/react';

export default class App extends Component {

  state = {
    showRandomPlanet: true,
  }

  toggleRandomPlanet = () => {
    this.setState({
      showRandomPlanet: !this.state.showRandomPlanet
    })
  }

  render() {

    const { showRandomPlanet } = this.state
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
          <div className='row'>
              <ItemList />
              <PersonDetails />
          </div>
      </>
    );
  }
}
