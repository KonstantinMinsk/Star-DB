import React, { Component } from 'react';

import './person-details.css';
import SwapiServise from '../service/swapi-servise';
import Spinner from '../spinner/spinner';

export default class PersonDetails extends Component {

  swapiService = new SwapiServise;

  state = {
    person: null,
    loading: true,
  }

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if(this.props.personId !== prevProps.personId) {
      this.setState({
        loading: true
      })
      this.updatePerson();
    }
  }

  componentWillUpdate() {

  }

  updatePerson() {
    const { personId } = this.props;
    if(!personId) {
      return
    }

    this.swapiService
      .getPerson(personId)
      .then(person => {
        this.setState({
          person,
          loading: false
        })
      })
  }

  render() {

    const { person, loading } = this.state;

    // if(!person) {
    //   return (
    //       <h2> Select a person from a list </h2>
    //   )
    // }

    const content = loading ? <Spinner /> : <ViewPerson person={person} />

    return (
    <div className="person-details card col-6">
        { content }
    </div>
    )
  }
}


const ViewPerson = ({person}) => {

  const { id, name, gender, birthYear, eyeColor } = person;

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
        </ul>
      </div>
    </>
  )
}