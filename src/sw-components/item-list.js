import React from 'react';
import { withData, ViewList } from '../hoc/theory';
import SwapiServise from '../service/swapi-servise';

const swapiServise = new SwapiServise();
const {
    getAllPeople,
    getAllPlanets,
    getAllStarships
} = swapiServise;


const PersonList = withData(ViewList, getAllPeople);

const PlanetList = withData(ViewList, getAllPlanets);

const StarshipList = withData(ViewList, getAllStarships);

export {
    PersonList,
    PlanetList,
    StarshipList
}
