import React from 'react';
import './app.css';
import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

function App() {
  return (
    <>
        <Header />
        <RandomPlanet />
        <div className='row'>
            <ItemList />
            <PersonDetails />
        </div>
    </>
  );
}

export default App;