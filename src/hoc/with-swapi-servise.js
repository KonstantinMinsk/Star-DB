import React from 'react';
import { SwapiServiseConsumer } from '../swapi-servise-context';

const withSwapiServise = (Wrapped, mapMethodTOProps) => {
    return (props) => {
        return  (
            <SwapiServiseConsumer>
                {
                    (swapiServise) => {
                        const serviseProps = mapMethodTOProps ? mapMethodTOProps(swapiServise) : null
                        return (
                            <Wrapped { ...props } 
                                    swapiServise={swapiServise}
                                    { ...serviseProps }
                            />
                        )
                    }
                }
            </SwapiServiseConsumer>
            )
    }
}

export default withSwapiServise;