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
    LoginPage,
  PeoplePage,
  PlanetPage,
  SecretPage,
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
    isLoggedIn: false
  }

  onLogin = (e) => {
      this.setState({
          isLoggedIn: true
      })
      this.onActiveNavLink(e)
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
    const navMenu = document.querySelectorAll('#nav li');
      navMenu.forEach(el => el.classList.remove('active'))
      if(e.currentTarget.textContent.trim() === 'Star DB') {
        return
      } 
      if(e.currentTarget.textContent.trim() === 'Secret') {
        if (this.state.isLoggedIn) {
            e.currentTarget.classList.add('active')
        } else {
            navMenu[4].classList.add('active')
        }
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

    const { showRandomPlanet, hasError, swapiServise, isLoggedIn } = this.state

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
          <Route 
                path='/starships/:id' 
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
            <Route path='/secret'
                render={ () => (
                    <SecretPage isLoggedIn={isLoggedIn} 
                        onServiceChange={this.onServiceChange} 
                    />)}
            />
            <Route path='/login' 
                render={ () => (
                    <LoginPage isLoggedIn={isLoggedIn} 
                        onLogin={this.onLogin}
                        onActiveNavLink={this.onActiveNavLink} 
                    />)}
            />

          {/* <PeoplePage />
          <PlanetPage />
          <StarshipPage /> */}
        </Router>
      </SwapiServiseProvider>
    );
  }
}
