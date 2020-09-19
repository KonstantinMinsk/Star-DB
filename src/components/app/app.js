import React, { Component } from 'react';
import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
// import ErrorButton from./error-button/error-button';
import ErrorIndicator from '../error-indicator/error-indicator';
import SwapiServise from '../../service/swapi-servise';
// import ItemDetails, { Record } from '../item-details/item-details-problem';
import { SwapiServiseProvider } from '../../swapi-servise-context/index';
import DummySwapiServise from '../../service/dummy-swapi-service';
import { 
  PeoplePage,
  PlanetPage,
  StarshipPage,
} from '../pages/index';

export default class App extends Component {

    // swapiServise = new SwapiServise(); 
    // for testing use DummySwapiService

  state = {
    showRandomPlanet: true,
    hasError: false,
    swapiServise: new SwapiServise(),
  }

  onServiceChange = () => {
    this.setState(({ swapiServise }) => {
      const Service = swapiServise instanceof SwapiServise 
                      ? DummySwapiServise : SwapiServise
      return {
            swapiServise: new Service(),
      }
    })
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

    const { showRandomPlanet, hasError, swapiServise } = this.state

    if(hasError) {
      return <ErrorIndicator />
    }

    const randomPlanet = showRandomPlanet ? <RandomPlanet /> : null;

    // const { getPersonImage, getPlanetImage } = this.swapiServise;
    // const personDetails = (
    //     <ItemDetails itemId={ 41 } 
    //                  getData={ this.swapiServise.getPerson } 
    //                  getImageURL={ getPersonImage }
    //     >
    //           <Record field='gender' label='Gender'/>
    //           <Record field='eyeColor' label='Eye Color'/>
    //     </ItemDetails>
    // )

    // const planetDetails = (
    //     <ItemDetails  itemId={ 18 } 
    //                   getData={ this.swapiServise.getPlanet } 
    //                   getImageURL={ getPlanetImage }
    //     >
    //                     <Record field='population' label='Population'/>
    //                     <Record field='rotationPeriod' label='Rotation Period'/>
    //     </ItemDetails>)

    return (
      <SwapiServiseProvider value={swapiServise}>
          <Header onServiceChange={this.onServiceChange} />
          { randomPlanet }
          <button
            className="toggle-planet btn btn-warning btn-lg"
            onClick={this.toggleRandomPlanet}>
            Toggle Random Planet
          </button>
          {/* <ErrorButton /> */}
          
          {/* <div className='row'>
              {personDetails}
              {planetDetails}
          </div> */}
          
          <PeoplePage />
          <PlanetPage />
          <StarshipPage />
      </SwapiServiseProvider>
    );
  }
}
