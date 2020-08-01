import React, { Component } from 'react';
import './item-list.css';
import SwapiServise from '../service/swapi-servise';
import Spinner from '../spinner/spinner';

class ItemList extends Component {

    swapiService = new SwapiServise;

    state = {
        peopleList: null,
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

        const { peopleList } = this.state;
        if(!peopleList) {
            return <Spinner />
        }

        const items = this.renderItem(peopleList)
        return (
            <ul className='item-list list-group col-6'>
                { items }
            </ul>
        )
    }
}
export default ItemList