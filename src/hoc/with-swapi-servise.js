import React from 'react';
import { SwapiServiseConsumer } from '../swapi-servise-context';

const withSwapiServise = (Wrapped) => {
    return (props) => {
        return  (
            <SwapiServiseConsumer>
                {
                    (swapiServise) => {
                        return (
                            <Wrapped { ...props } swapiServise={swapiServise} />
                        )
                    }
                }
            </SwapiServiseConsumer>
            )
    }
}

export default withSwapiServise;