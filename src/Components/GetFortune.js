import React, { Component } from 'react';
import '../Styles/GetFortune.css';
import Fortune from './Fortune';
import { fortunes } from '../data/fortunes.js';
import GetTryThese from './GetTryThese';
import GetItemMoment from './GetItemMoment';

class GetFortune extends Component {

  static defaultProps = {
    // starting properties
    id: 100,
    fortune: 'Get a fortune to see your reading'
  };

  constructor(props) {
    super(props);
    // starting state of state
    this.state = {
      id: 100,
      drawn: false,
      fortune: 'Get a fortune to see your reading'
    }
    this.handleClick = this.handleClick.bind(this);
  }

  getAFortune() {

    // get a random fortune from fortunes.js
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];

    // animate a little thinking time
    const circle4 = document.getElementById("circle4");

    circle4.classList.add("getting-fortune");
    setTimeout(() => {
      circle4.classList.remove("getting-fortune");
    }, 2000);

    setTimeout(() => {
      // set the state with the object we got
      this.setState({...randomFortune, drawn: true});      
    }, 2000);    
  }

  handleClick() {
    this.getAFortune();
  }

  render() {
    return (

      <div>
        {/* page title */}
        <img className="page-title" src="https://www.projectdivination.xyz/images/title-outlines-crystal-ball.svg" alt="Crystal Ball"/>

        {/* grid wrapper */}
        <div className="GetFortune"> 
          <section className="main-content">
            <h1>Crystal Ball</h1>
            <svg id="crystal-ball-fortune" width="300px" id="crystal" data-name="crystal" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 298 360"><defs><style>{`.cls-1,.cls-5{fill:#fff;}.cls-2{fill:#835FFF;}.cls-3{fill:#3a0370;stroke:#000;}.cls-3,.cls-4{stroke-miterlimit:10;}.cls-3,.cls-4,.cls-5{stroke-width:3px;}.cls-4{fill:#d5c9ff;stroke:#1a1a1a;}.cls-5{stroke:#fff;stroke-linecap:round;stroke-linejoin:round;}`}</style></defs><ellipse id="ellipse1" className="cls-1" cx="148.62" cy="266.06" rx="77.09" ry="41.28"/><ellipse id="ellipse2" className="cls-2" cx="148.62" cy="266.45" rx="77.09" ry="45.74"/><path id="path3" className="cls-3" d="M223.77,260.93l-1.22.84a20.94,20.94,0,0,1,.66,5.17c0,21.58-33.72,39.06-75.32,39.06s-75.32-17.48-75.32-39.06a20.94,20.94,0,0,1,.66-5.17L72,260.93c-16.89,9.52-27.2,22.23-27.2,36.18,0,29.52,46.15,53.46,103.08,53.46S251,326.63,251,297.11C251,283.16,240.66,270.45,223.77,260.93Z"/><circle id="circle4" className="cls-4" cx="147.89" cy="149.13" r="134.04"/><path id="path5" className="cls-5" d="M178.34,80.46l17.95-29.59S233.75,67.48,251,110.05C251,110.05,224.05,83.13,178.34,80.46Z"/></svg>

            <Fortune 
              fortune={this.state.fortune} 
              drawn={this.state.drawn}
            />
            <button onClick={this.handleClick}>Get a Fortune</button>              
          </section>

          <section className="side-content-1">
            <h4>What does the crystal ball see?</h4>
            <p>The crystal ball gives a fortune to anyone who asks.</p>
            <h4>Instructions</h4>
            <p>Click the "Get a Fortune" button to get a fortune for your future.</p>
          </section>

          <section className="side-content-2">
            <GetTryThese />
          </section>

          <section className="side-content-3">
            <GetItemMoment />
          </section>

        </div>
      </div>
    )
  }
}

export default GetFortune;