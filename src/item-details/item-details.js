import React, { Component } from 'react';

import './person-details.css';
import SwapiServise from '../service/swapi-servise';
import Spinner from '../spinner/spinner';
import ErrorButton from '../error-button/error-button';

export default class ItemDetails extends Component {

  state = {
    item: null,
    loading: true,
  }

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if(this.props.itemId !== prevProps.itemId) {
      this.setState({
        loading: true
      })
      this.updateItem();
    }
  }

  updateItem() {
    const { itemId, getData } = this.props;
    if(!itemId) {
      return
    }
    // getData = this.swapiService.getPerson
    getData(itemId)
      .then(item => {
        this.setState({ 
          item,
          loading: false
        })
      })
  }

  render() {

    const { item, loading } = this.state;

    // if(!person) {
    //   return (
    //       <h2> Select a person from a list </h2>
    //   )
    // }

    const content = loading ? <Spinner /> : <ViewPerson item={item} />

    return (
    <div className="person-details card col-6">
        { content }
    </div>
    )
  }
}


const ViewPerson = ({ item }) => {

  const { id, name, gender, birthYear, eyeColor } = item;

  return (
    <>
      <img className="person-image"
        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />

      <div className="card-body">
        <h4> { name } </h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Gender</span>
            <span> { gender } </span>
          </li>
          <li className="list-group-item">
            <span className="term">Birth Year</span>
            <span> { birthYear } </span>
          </li>
          <li className="list-group-item">
            <span className="term">Eye Color</span>
            <span> { eyeColor } </span>
          </li>
          <li className="list-group-item">
            <span className="term">
              <ErrorButton />
            </span>
          </li>
        </ul>
      </div>
    </>
  )
}