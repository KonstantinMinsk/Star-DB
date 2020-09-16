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

const renderPlanet = ({ name, diameter}) => { 
    return <span>{`${name}, diameter ${diameter}`}</span>
}

const PersonList = withData(ViewList, getAllPeople);

const PlanetList = withData(
    withChildFunction(ViewList, renderPlanet), 
    getAllPlanets);

const StarshipList = withData(ViewList, getAllStarships);

export {
    PersonList,
    PlanetList,
    StarshipList
}
