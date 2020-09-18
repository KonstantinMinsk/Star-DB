import React, { Component } from 'react';

import './person-details.css';
import Spinner from '../spinner/spinner';

export default class ItemDetails extends Component {

  state = {
    item: null,
    loading: true,
    image: null,
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
    const { itemId, getData, getImageURL } = this.props;
    if(!itemId) {
      return
    }
    // getData = this.swapiService.getPerson
    getData(itemId)
      .then(item => {
        this.setState({ 
          item,
          loading: false,
          image: getImageURL(item),
        })
      })
  }

  render() {

    const { item, loading, image } = this.state;

    const ViewPerson = () => {
      return(
        <React.Fragment>
          <img className='person-image' src={image} alt=''/>

          <div className="card-body">
            <h4> { item['name'] } </h4>
            <ul className="list-group list-group-flush">
              { 
                React.Children.map(this.props.children, (child, idx) => {
                    return React.cloneElement(child, { item })
                })
              }
            </ul>
          </div>
        </React.Fragment>
        )
    }
    
    
    const content = loading 
                    ? <Spinner /> 
                    : <ViewPerson />

    return (
      <div className="person-details card col-6">
          { content }
      </div>
    )
  }
}

const Record = ({ item, field, label }) => {
    return (
      <li className="list-group-item">
          <span className="term"> { label } </span>
          <span> { item[field] } </span>
      </li>
    )
}
export { Record }


const ViewPerson = ({ item, image }) => {
  
  // const { id, name, gender, birthYear, eyeColor } = item;
  return (
    <>
      <img className="person-image"
        src={ image } />

      <div className="card-body">
        <h4> { item.name } </h4>
        <ul className="list-group list-group-flush">
          { 
            React.Children.map(this.props.children, (child, idx) => {
                return React.cloneElement(child, { item })
            })
          }
        </ul>
      </div>
    </>
  )
}