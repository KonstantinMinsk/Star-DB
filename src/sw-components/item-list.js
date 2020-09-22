import React from 'react';
import { withData, ViewList } from '../components/hoc/with-data';
import withSwapiServise from '../components/hoc/with-swapi-servise';
import SwapiServise from '../service/swapi-servise';

const swapiServise = new SwapiServise();
const {
    getAllPeople,
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
export { withChildFunction }
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
