 export default class SwapiServise {

    getResource = async (url) => {
        const res = await fetch(url);
        if(!res.ok) {
            throw new Error(`Could not fetch ${url},
            received ${res.status}`)
        }
        const body = await res.json();
        return body;
    }

    getAllPeople = async () => {
        const res = await this.getResource('https://swapi.dev/api/people/');
        // return res.results
        return res.results.map( person => this._transforPerson(person));
    }
    getPerson = async (id) => {
        const person = await this.getResource(`https://swapi.dev/api/people/${id}`);
        return this._transforPerson(person);
    }
    getAllPlanets = async () => {
        const res = await this.getResource('https://swapi.dev/api/planets/');
        return res.results.map(this._transforPlanet);
    }
    getPlanet = async (id) => {
        const planet = await this.getResource(`https://swapi.dev/api/planets/${id}`);
        return this._transforPlanet(planet);
    }
    getAllStarships = async () => {
        const res = await this.getResource('https://swapi.dev/api/starships/');
        return res.results.map(this._transforStarship);
    }
    getStarship = async (id) => {
        const starship = await this.getResource(`https://swapi.dev/api/starships/${id}`);
        return this._transforStarship(starship)
    }

    _extractId = (item) => {
        const idRegExp = /\/([0-9]*)\/$/;
        const id = item.url.match(idRegExp)[1];
        return id
    }
    _transforPlanet = (planet) => {
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter,
          }
    }
    _transforPerson = (person) =>{
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color
          }
    }
    _transforStarship = (starship) => {
        return {
            id: this._extractId(starship),
            name: starship.name,
            model: starship.model,
            length: starship.length,
            cargoCapacity: starship.cargo_capacity,
            costInCredit: starship.cost_in_credit
          }
    }

    getPersonImage = (person) => {
        const { id } = person;
        return `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`
    }
    getPlanetImage = (item) => {
        const { id } = item;
        return `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`
    }
    getStarshipImage = (item) => {
        const { id } = item;
        return `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`
    }
}

// const swapi = new SwapiServise();

// swapi.getAllPeople().then((people) => {
//     people.forEach(person => {
//         console.log(person);
//     });
// })