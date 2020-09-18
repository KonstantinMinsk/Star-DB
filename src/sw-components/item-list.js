import React from 'react';
import { withData, ViewList } from '../hoc/theory';
import SwapiServise from '../service/swapi-servise';

const swapiServise = new SwapiServise();
const {
    getAllPeople,
    getAllPlanets,
    getAllStarships
} = swapiServise;

const withChildFunction = (Wrapped, fn) => {
    return (props) => {
        return (
            <Wrapped { ...props } >
                {fn}
            </Wrapped>
        )
    }
}

// const ListWithChildren = withChildFunction(ViewList, renderPlanet)
// const compose = (x) => func(g(x));

const PersonList = withData(ViewList, getAllPeople);


const renderPlanet = ({ name, diameter}) => { 
    return <span>{`${name}, diameter ${diameter}`}</span>
}

const PlanetList = withData(
    withChildFunction(ViewList, renderPlanet), 
    getAllPlanets);


const renderStarship = ({ name, length}) => { 
    return <span>{`${name}, (length - ${length})`}</span>
}

const StarshipList = withData(
    withChildFunction(ViewList, renderStarship), 
    getAllStarships);;

export {
    PersonList,
    PlanetList,
    StarshipList
}
