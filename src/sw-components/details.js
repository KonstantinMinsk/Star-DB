import React from 'react';
import withSwapiServise from '../components/hoc/with-swapi-servise';
import ItemDetails, { Record } from '../components/item-details/item-details-problem';
import SwapiServise from '../service/swapi-servise';
import { SwapiServiseConsumer } from '../swapi-servise-context/index';

const swapiServise = new SwapiServise();
const {
    getPerson,
    getPersonImage,
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

const StarshipDetails = ({ itemId, swapiServise }) => {
    const { getStarship, getStarshipImage } = swapiServise;
    return (
        <ItemDetails itemId={ itemId } 
                     getData={ getStarship } 
                     getImageURL={ getStarshipImage }
    >
        <Record field='model' label='Model'/>
        <Record field='costInCredit' label='Cost in credit'/>
        <Record field='cargoCapacity' label='Cargo capacity'/>
    </ItemDetails>
    )
}
export default withSwapiServise(StarshipDetails);

export {
    PersonDetails,
    PlanetDetails,
    // StarshipDetails
}