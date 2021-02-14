import React, { Component } from 'react';
import '../Styles/TryThis.css';
import { Link } from 'react-router-dom';

class TryThis extends Component {
  render() {
    return (
      <div className="TryThis">
        <img src={this.props.imgSrc} alt={this.props.name} height="50px"/>
        <span><Link to={this.props.link}>{this.props.name}</Link></span>
      </div>
    )
  }
}

export default TryThis;