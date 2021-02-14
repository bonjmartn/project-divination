import React, { Component } from 'react';
import '../Styles/Moment.css';

class Moment extends Component {
  render() {
    return (
      <div className="Moment">
        <h4>Card of the Moment</h4>
        <h5>{this.props.name}</h5>
        <div className="Moment-wrapper">
          <img src={this.props.imgSrc} alt={this.props.name} />   
          <p className="moment-description">{this.props.description}</p>
        </div>
      </div>
    )
  }
}

export default Moment;