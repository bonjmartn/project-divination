import React, { Component } from 'react';
import '../Styles/GetItemMoment.css';
import { deck } from '../data/deck.js';
import Moment from './Moment';

class GetItemMoment extends Component {

  static defaultProps = {
    // starting properties
    id: 100,
    name: "Item Name",
    description: "Description",
    imgSrc: "https://www.projectdivination.xyz/images/card-back-3.svg"
  };

  constructor(props) {
    super(props);
    // starting state of state
    this.state = {
      id: 100,
      name: "Item Name",
      description: "Description",
      imgSrc: "https://www.projectdivination.xyz/images/card-back-3.svg"     
    }
  }

  componentDidMount() {
    const randomCard = deck[Math.floor(Math.random() * deck.length)];

    // set state with the object
    this.setState({...randomCard});
  }

  render() {

    return (
      <div className="GetItemMoment">
        <Moment 
          imgSrc={this.state.imgSrc} 
          name={this.state.name}
          description={this.state.description} 
        />                          
      </div>
    )
  }
}

export default GetItemMoment;