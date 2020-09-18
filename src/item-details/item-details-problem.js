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
    const { children } = this.props;
    // console.log({children});
    
    const content = loading 
                    ? <Spinner /> 
                    : <ViewPerson item={ item } image={ image } > { children } </ViewPerson>

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


const ViewPerson = (props) => {
  const { image, item, children } = props;
  // console.log(children);
  // const newChildren = [children[1]];
  // console.log(newChildren);
  
  
  // const { id, name, gender, birthYear, eyeColor } = item;
  return (
    <>
      <img className="person-image" alt=''
        src={ image } />

      <div className="card-body">
        <h4> { item.name } </h4>
        <ul className="list-group list-group-flush">
          {/* <li className="list-group-item">
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
          </li> */}
          { 
            React.Children.map(children[1], (child, idx) => {
                return React.cloneElement(child, { item })
            })
          }
        </ul>
      </div>
    </>
  )
}