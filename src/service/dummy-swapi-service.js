export default class DummySwapiServise {

    _people = [
      {
        id: 1,
        name: 'Bilbo Baggins [TEST DATA]',
        gender: 'male',
        birthYear: 'long ago',
        eyeColor: 'dark brown'
      },
  
      {
        id: 2,
        name: 'Frodo Baggins [TEST DATA]',
        gender: 'male',
        birthYear: 'long ago',
        eyeColor: 'dark brown'
      }
    ];
  
    _planets = [
      {
        id: 11,
        name: 'Earth [TEST DATA]',
        population: '7.530.000.000',
        rotationPeriod: '23 hours 56 seconds',
        diameter: '12.742 km'
      },
      {
        id: 12,
        name: 'Venus [TEST DATA]',
        population: 'not known',
        rotationPeriod: '243 days',
        diameter: '12.104 km'
      }
    ];
  
    _starships = [
      {
        id: 11,
        name: 'USS Enterprise [TEST DATA]',
        model: 'NCC-1701-C',
        manufacturer: 'Northrop Grumman Shipbuilding',
        costInCredits: 'not known',
        length: 'approx 300 meters',
        crew: 1000,
        passengers: 50,
        cargoCapacity: 100
      },
      {
        id: 12,
        name: 'Russia 1961 [TEST DATA]',
        model: 'Belka 4',
        manufacturer: 'Sukhoi Jet',
        costInCredits: '500 000',
        length: '500 meters',
        crew: 1000,
        passengers: 50,
        cargoCapacity: 500
      }
    ];
  
    getAllPeople = async () => {
      return this._people;
    };
  
    getPerson = async () => {
      return this._people[0];
    };
  
    getAllPlanets = async () => {
      return this._planets;
    };
  
    getPlanet = async (id) => {
      const i = (id === 11 || id === 12) ? id : 11;
      return this._planets[i-11]
    };
  
    getAllStarships = async () => {
      return this._starships;
    };
  
    getStarship = async (id) => {
      const i = (id === 11 || id === 12) ? id : 11;
      return this._starships[i-11];
    };
  
    getPersonImage = () => {
      return `https://placeimg.com/400/500/people`
    };
  
    getStarshipImage = ({id}) => {
      return `https://placeimg.com/600/400/tech/${id}`;
    };
  
    getPlanetImage = ({id}) => {
      return `https://placeimg.com/400/400/nature/${id}`
    };
  }
  