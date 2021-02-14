import React, { Component } from 'react';
import '../Styles/GetCoinSide.css';
import Coin from './Coin';
import GetTryThese from './GetTryThese';

class GetCoinSide extends Component {

  static defaultProps = {
    // starting properties
  };

  constructor(props) {
    super(props);
    // starting state of state
    this.state = {
      flipClass: '',
      side: '',
      flipped: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {

    // the coin
    const coin = document.getElementById("coin");

    // remove the animation class so that it can do it again
    if (coin.classList.contains("animation900")) {
      coin.classList.remove("animation900");
      setTimeout(() => {
        coin.classList.add("animation900");
      }, 100);
    }
    if (coin.classList.contains("animation1080")) {
      coin.classList.remove("animation1080");
      setTimeout(() => {
        coin.classList.add("animation1080");
      }, 100);
    }
  }

  flipCoin() {
    // choose number of flips
    const chance = Math.floor(Math.random() * 2);

    let addClass = '';
    let side = '';

    if (chance === 1) {
      addClass = 'animation900';
      side = 'Heads';
    } else {
      addClass = 'animation1080';
      side = 'Tails';
    }

    this.setState({
      flipClass: addClass,
      flipped: true,
      side: side
    });
  }

  handleClick() {
    this.flipCoin();
  }

  render() {
    return (
      <div>
        {/* page title */}
        <img className="page-title" src="https://www.projectdivination.xyz/images/title-outlines-flip-a-coin.svg" alt="Flip a Coin"/>

        {/* grid wrapper */}
        <div className="GetCoinSide"> 
          <section className="main-content">
          <h1>Flip a Coin</h1>
            <Coin
              flipClass={this.state.flipClass}
              flipped={this.state.flipped}
              side={this.state.side}
            />
            <button id="flip" onClick={this.handleClick}>Flip a Coin</button>              
          </section>

          <section className="side-content-1">
            <h4>Heads or Tails</h4>
            <p>Get a simple "Yes" or "No" answer to any question you desire.</p>
            <h4>Instructions</h4>
            <p>Think of an either-or question and assign one aspect of it to heads and the other to tails. You can flip the coin as many times as you want, but that won't change the first answer you got!</p>
          </section>

          <section className="side-content-2">
            <GetTryThese />
          </section>
        </div>
      </div>
    )
  }
}

export default GetCoinSide;