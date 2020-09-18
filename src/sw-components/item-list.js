import React from 'react';
import { withData, ViewList } from '../hoc/theory';
import withSwapiServise from '../hoc/with-swapi-servise';
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
const mapPlanetMethodsToPros = (swapiServise) => {
    return {
        getData: swapiServise.getAllPlanets
    }
}
const PlanetList = withSwapiServise(
                        withData(
                            withChildFunction(ViewList, renderPlanet)), 
                            mapPlanetMethodsToPros);


const renderStarship = ({ name, length}) => { 
    return <span>{`${name}, (length - ${length})`}</span>
}
const mapStarshipMethodsToPros = (swapiServise) => {
    return {
        getData: swapiServise.getAllStarships
    }
}
const StarshipList = withSwapiServise(
                            withData(
                                withChildFunction(ViewList, renderStarship)), 
                                mapStarshipMethodsToPros
                        );

export {
    PersonList,
    PlanetList,
    StarshipList
}
