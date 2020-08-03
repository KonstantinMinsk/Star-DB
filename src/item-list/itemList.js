import React, { Component } from 'react';
import './item-list.css';
import SwapiServise from '../service/swapi-servise';
import Spinner from '../spinner/spinner';
import ErrorIndicator from '../error-indicator';

class ItemList extends Component {

    swapiService = new SwapiServise;

    state = {
        peopleList: null,
        loading: true,
        error: false
    }

    onError = (error) => {
        this.setState({
          error: true,
          loading: false
        })
      }
    
    componentDidMount() {
        this.swapiService
            .getAllPeople()
            .then(peopleList => {
                this.setState({
                    peopleList
                })
            })
            .catch(this.onError)
    }

    renderItem(arr) {
        return arr.map(person => {
            const { id, name } = person;
            return (
                <li className='list-group-item'
                    key={id} 
                    onClick={ () => this.props.onItemSelected(id) } >
                    { name }
                </li>
            )
        })
    }

    render() {

        const { peopleList, error } = this.state;
        if(!peopleList) {
            return <Spinner />
        }
        const errorMessage = error ? <ErrorIndicator /> : null;

        const items = !error ? this.renderItem(peopleList) : null;
        return (
            <ul className='item-list list-group col-6'>
                { errorMessage }
                { items }
            </ul>
        )
    }
}
export default ItemList