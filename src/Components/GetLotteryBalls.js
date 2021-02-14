import React, { Component } from 'react';
import '../Styles/GetLotteryBalls.css';
import Ball from './Ball';
import GetTryThese from './GetTryThese';

class GetLotteryBalls extends Component {

  static defaultProps = {
  }

  constructor(props) {
    super(props);
    this.state = {
      howManyNumbers: '6', 
      maxValue: '40',
      balls: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.generateBalls = this.generateBalls.bind(this);
  }

  handleChange(evt) {
    // handles the form input
    this.setState({[evt.target.name]: evt.target.value});
  }

  generateBalls() {

    let howManyNumbers = this.state.howManyNumbers;
    let maxValue = this.state.maxValue;
    let generatedBalls = this.state.balls;

    // clear array before adding numbers again
    generatedBalls = [];

    // generate random numbers for the balls
    for (let i = 0; i < howManyNumbers; i++) {
      let newNum = Math.floor(Math.random() * maxValue + 1);
      generatedBalls.push(newNum);      
    }

    // update state with the current array of ball numbers
    this.setState({balls: generatedBalls});
  }

  handleSubmit(evt) {
    evt.preventDefault(); // prevent reload of page
    this.generateBalls();
  }

  render() {
    return (
      <div>
        {/* page title */}
        <img className="page-title" src="https://www.projectdivination.xyz/images/title-outlines-lottery.svg" alt="Lottery"/>

        {/* grid wrapper */}
        <div className="GetLotteryBalls"> 
          <section className="main-content">
            <h1>Lottery</h1>
            <form onSubmit={this.handleSubmit}>
              <div>
                <label htmlFor='howManyNumbers'>How many lottery balls do you want?</label>
                <input
                  type='number'
                  min='1'
                  max='20'
                  name='howManyNumbers'
                  value={this.state.howManyNumbers}
                  onChange={this.handleChange}
                  id='howManyNumbers'
                />
              </div>
              <div>
                <label htmlFor='maxValue'>What should be the maximum number for each ball?</label>
                <input
                  type='number'
                  min='1'
                  max='1000'
                  name='maxValue'
                  value={this.state.maxValue}
                  onChange={this.handleChange}
                  id='maxValue'
                />
              </div>
              <button>Generate</button>
            </form>
            <div className="generated-balls">
              {this.state.balls.map(n => <Ball num={n} />)}
            </div>           
          </section>

          <section className="side-content-1">
            <h4>Lottery Numbers</h4>
            <p>Generate lottery numbers for the specific lottery game that you want to play.</p>
            <h4>Instructions</h4>
            <p>Choose the number of lottery balls and the maximum number for each ball that will match the game you're playing. Then buy a ticket with your lucky numbers!</p>
          </section>

          <section className="side-content-2">
            <GetTryThese />
          </section>
        </div>
      </div>
    )
  }
}

export default GetLotteryBalls;