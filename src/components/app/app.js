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
  Home,
  PeoplePage,
  PlanetPage,
  StarshipPage,
} from '../pages/index';
import {
  BrowserRouter as Router,
  Route, 
} from "react-router-dom";
import StarshipDetails from '../../sw-components/details'
import starshipPageRouting from '../pages/starship-page/starship-page-routing';
import peoplePageRouting from '../pages/people-page/people-page-routing';

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
    document.querySelector('.header .btn').classList.toggle('active');
  }

  onActiveNavLink = (e) => {
    document.querySelectorAll('#nav li')
      .forEach(el => el.classList.remove('active'))
      if(e.currentTarget.textContent === 'Star DB') {
        return
      } else {
        e.currentTarget.classList.add('active')
      }
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
      <SwapiServiseProvider value={swapiServise} onActiveNavLink={this.onActiveNavLink}>
        <Router>
          <Header onServiceChange={this.onServiceChange} onActiveNavLink={this.onActiveNavLink} />
          { randomPlanet }
          <button style={{ marginBottom: '32px'}}
            className="toggle-planet btn btn-warning btn-lg"
            onClick={this.toggleRandomPlanet}>
            Toggle Random Planet
          </button>
          {/* <ErrorButton /> */}
          
          {/* <div className='row'>
              {personDetails}
              {planetDetails}
          </div> */}
          <Route path='/' 
                  exact
                  component={ Home }
          />
          <Route path='/people/:id?' component={peoplePageRouting} />
          <Route path='/planets' component={PlanetPage} />
          <Route path='/starships' exact component={starshipPageRouting} />
          <Route path='/starships/:id' 
                 render={ ({ match, location, history }) => {
                    const { id } = match.params
                    return (
                      <>
                        <StarshipDetails itemId={id} />
                        <button 
                            style={{ margin: '12px' }}
                            className='btn btn-primary'
                            onClick={ () => {
                                history.push('/starships/')
                            }}
                        >
                            Back
                        </button>
                      </>
                    ) }} />

          {/* <PeoplePage />
          <PlanetPage />
          <StarshipPage /> */}
        </Router>
      </SwapiServiseProvider>
    );
  }
}
