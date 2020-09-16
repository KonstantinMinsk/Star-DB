import React from 'react';
import ItemDetails, { Record } from '../item-details/item-details-problem';
import SwapiServise from '../service/swapi-servise';
import { SwapiServiseConsumer } from '../swapi-servise-context';

const swapiServise = new SwapiServise();
const {
    getPerson,
    getPlanet,
    getStarship,
    getPersonImage,
    getPlanetImage,
    getStarshipImage
} = swapiServise;

const PersonDetails = ({ itemId }) => {
    return (
        <ItemDetails itemId={ itemId } 
                    getData={ getPerson } 
                    getImageURL={ getPersonImage }
        >
            <Record field='gender' label='Gender'/>
            <Record field='eyeColor' label='Eye Color'/>
        </ItemDetails>
    )
}

const PlanetDetails = ({ itemId }) => {
    return (
        <SwapiServiseConsumer>
            {
                (swapiServise) => {
                    const { getPlanet, getPlanetImage } = swapiServise;
                    return (
                        <ItemDetails itemId={ itemId } 
                        getData={ getPlanet } 
                        getImageURL={ getPlanetImage }
                    >
                        <Record field='population' label='Population'/>
                        <Record field='climate' label='Climate'/>
                        <Record field='rotationPeriod' label='Rotation Period'/>
                    </ItemDetails>
                    )
                }
            }
        </SwapiServiseConsumer>
    )
}

const StarshipDetails = () => {
    
}

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
}