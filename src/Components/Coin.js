import React, { Component } from 'react';
import '../Styles/Coin.css';

class Coin extends Component {

  render() { 

    return (
      <div className="Coin">
        <div id="coin-flip-cont">
          <div id="coin" className={this.props.flipClass}>
            <div className="front"></div>
            <div className="back"></div>
          </div>
        </div>
        <h3 className={`${this.props.flipped ? "" : "hidden"}`} >You got: {this.props.side}</h3>
      </div>
    )
  }
}

export default Coin;