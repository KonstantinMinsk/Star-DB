import React, { Component } from 'react';
import './random-planet.css';
import SwapiServise from '../../service/swapi-servise';
import Spinner from '../spinner/spinner';
import ErrorIndicator from '../error-indicator';

export default class RandomPlanet extends Component {

  static defaultProps = {
    updateInterval: 3300
  };

  swapiService = new SwapiServise();

  state = {
    planet: {},
    loading: true,
    error: false
  }

  componentDidMount() {
    const { updateInterval } = this.props;
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, updateInterval);
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      loading: false,
    })
  }

  onError = (error) => {
    this.setState({
      error: true,
      loading: false
    })
  }

  updatePlanet = () => {
    const id = Math.floor(Math.random()*25) + 1;
    this.swapiService
      .getPlanet(id)
      .then( (planet) => this.onPlanetLoaded(planet))
      .catch(this.onError)
  }

  render() {

    const { 
      planet, loading, error
    } = this.state;

    const errorMessage = error ? <ErrorIndicator /> : null;
    const content = !error ? (loading ? <Spinner /> : <PlanetView planet={planet}/>) : null;
    return (
      <div className="random-planet jumbotron rounded">
        { errorMessage }
        { content }

      </div>
    );

    // Second Opinion 
    // const spinner = loading ? <Spinner/> : null; 
    // const content = !loading ? <PlanetView planet={planet}/> : null; 
    // return (
    //   <div className="random-planet jumbotron rounded">
    //     { spinner }
    //     { content }
    //   </div>
    // );
  }
}

// RandomPlanet.defaultProps = {
//   updateInterval: 3300
// };

const PlanetView = ({ planet }) => {

  const { id, name, population, rotationPeriod, diameter } = planet;

  return (
    <React.Fragment>
        <img className="planet-image" alt='Фото планеты'
             src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
        <div>
          <h4> {name} </h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span> { population } </span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span> { rotationPeriod } </span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span> { diameter } </span>
            </li>
          </ul>
        </div>
    </React.Fragment>
  )
}
