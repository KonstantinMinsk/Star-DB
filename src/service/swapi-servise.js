 export default class SwapiServise {

    async getResource(url) {
        const res = await fetch(url);
        if(!res.ok) {
            throw new Error(`Could not fetch ${url},
            received ${res.status}`)
        }
        const body = await res.json();
        return body;
    }

    async getAllPeople() {
        const res = await this.getResource('https://swapi.dev/api/people/');
        // return res.results
        return res.results.map( person => this._transforPerson(person));
    }
    async getPerson(id) {
        const person = await this.getResource(`https://swapi.dev/api/people/${id}`);
        return this._transforPerson(person);
    }
    async getAllPlanets() {
        const res = await this.getResource('https://swapi.dev/api/planets/');
        return res.results.map(this._transforPlanet);
    }
    async getPlanet(id) {
        const planet = await this.getResource(`https://swapi.dev/api/planets/${id}`);
        return this._transforPlanet(planet);
    }
    async getAllStarships() {
        const res = await this.getResource('https://swapi.dev/api/starships/');
        return res.results.map(this._transforStarship);
    }
    async getStarship(id) {
        const starship = await this.getResource(`https://swapi.dev/api/starships/${id}`);
        return this._transforStarship(starship)
    }

    _extractId(item) {
        const idRegExp = /\/([0-9]*)\/$/;
        const id = item.url.match(idRegExp)[1];
        return id
    }
    _transforPlanet(planet) {
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter,
          }
    }
    _transforPerson(person) {
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color
          }
    }
    _transforStarship(starship) {
        return {
            id: this._extractId(starship),
            name: starship.name,
            model: starship.model,
            length: starship.length,
            cargoCapacity: starship.cargo_capacity,
            costInCredit: starship.cost_in_credit
          }
    }
}

// const swapi = new SwapiServise();

// swapi.getAllPeople().then((people) => {
//     people.forEach(person => {
//         console.log(person);
//     });
// })