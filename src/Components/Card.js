import React, { Component } from 'react';
import '../Styles/Card.css';

class Card extends Component {
  render() {
    return (
      <div className="Card">
        <img id="tarot-card" src={this.props.imgSrc} alt={this.props.name} height="350px"/>
        <h3>{this.props.name}</h3>
        <div className="card-description">
          <p>{this.props.description}</p>
        </div>
      </div>
    )
  }
}

export default Card;