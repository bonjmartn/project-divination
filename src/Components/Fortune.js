import React, { Component } from 'react';
import '../Styles/Fortune.css';

class Fortune extends Component {
  render() {
    return (
      <div className="Fortune">
        <h3 className={`${this.props.drawn ? "" : "hidden"}`}>Your Fortune:</h3>
        <p className={`${this.props.drawn ? "" : "hidden"}`}>{this.props.fortune}</p>
      </div>
    )
  }
}

export default Fortune;