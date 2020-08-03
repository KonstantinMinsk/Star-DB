import React, { Component } from 'react';
import './app.css';
import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import ItemList from '../item-list/itemList';
import PersonDetails from '../person-details/person-details';
import { render } from '@testing-library/react';

export default class App extends Component {

  state = {
    showRandomPlanet: true,
    selectedPerson: 11,
  }

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id
    })
  }

  toggleRandomPlanet = () => {
    this.setState({
      showRandomPlanet: !this.state.showRandomPlanet
    })
  }

  render() {

    const { showRandomPlanet, selectedPerson } = this.state
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
              <ItemList onItemSelected={ this.onPersonSelected } />
              <PersonDetails personId={ selectedPerson } />
          </div>
      </>
    );
  }
}
