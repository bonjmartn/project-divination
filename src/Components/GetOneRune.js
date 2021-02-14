import React, { Component } from 'react';
import '../Styles/GetOneRune.css';
import Rune from './Rune';
import { bagOfRunes } from '../data/bagOfRunes.js';
import GetTryThese from './GetTryThese';

class GetOneRune extends Component {

  static defaultProps = {
    // starting properties
    id: 25,
    imgSrc: 'https://www.projectdivination.xyz/images/Rune_BLANK.png',
    name: 'One Rune',
    englishName: 'One Rune',
    phoneme: '',
    description: 'Draw a rune to see your reading.'
  };

  constructor(props) {
    super(props);
    // starting state of state
    this.state = {
      id: 25,
      imgSrc: 'https://www.projectdivination.xyz/images/Rune_BLANK.png',
      name: 'One Rune',
      englishName: 'One Rune',
      phoneme: '',
      description: '',
      drawn: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  getARune() {

    // get a random rune from bagOfRunes.js
    const randomRune = bagOfRunes[Math.floor(Math.random() * bagOfRunes.length)];

    // set the state with the object we got
    // ... spreads the object
    this.setState({...randomRune, drawn: true});
  }

  handleClick() {
    this.getARune();
  }

  render() {
    return (
      <div>
        {/* page title */}
        <img className="page-title" src="https://www.projectdivination.xyz/images/title-outlines-one-rune.svg" alt="One Rune"/>

        {/* grid wrapper */}
        <div className="GetOneRune"> 
          <section className="main-content">
            <h1>Get One Rune</h1>
              <Rune 
                imgSrc={this.state.imgSrc} 
                name={this.state.name} 
                englishName={this.state.englishName} 
                phoneme={this.state.phoneme} 
                description={this.state.description}
                drawn={this.state.drawn}
              />                  
              <button onClick={this.handleClick}>Draw a Rune</button>              
          </section>

          <section className="side-content-1">
          <h4>One Question, One Answer</h4>
            <p>These Norse runes are 24 letters in a runic alphabet that were also used in divination with brief meanings.<br /><br />      
            Draw one rune to get a clue about any question you desire.</p>
            <h4>Instructions</h4>
            <p>Decide on a question and hold it in your mind, then draw a rune. Consider the meaning of the rune in relation to your question.</p>
          </section>

          <section className="side-content-2">
            <GetTryThese />
          </section>
        </div>
      </div>
    )
  }
}

export default GetOneRune;