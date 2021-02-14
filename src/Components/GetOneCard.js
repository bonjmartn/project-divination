import React, { Component } from 'react';
import '../Styles/GetOneCard.css';
import Card from './Card';
import { deck } from '../data/deck.js';
import WikiAttribution from './WikiAttribution';
import GetTryThese from './GetTryThese';

class GetOneCard extends Component {

  static defaultProps = {
    // starting properties
    id: 100,
    imgSrc: 'https://www.projectdivination.xyz/images/card-back-3.svg',
    name: 'Card Back',
    suit: 'none',
    description: 'Draw a card to see your reading'
  };

  constructor(props) {
    super(props);
    // starting state of state
    this.state = {
        id: 100,
        name: 'One Card',
        suit: 'Deck',
        description: '',
        imgSrc: 'https://www.projectdivination.xyz/images/card-back-3.svg'
    }
    this.handleClick = this.handleClick.bind(this);
  }

  getACard() {

    // get a random card from deck.js
    const randomCard = deck[Math.floor(Math.random() * deck.length)];

    // set the state with the object we got
    // ... spreads the object
    this.setState({...randomCard});

    const card = document.getElementById('tarot-card');
    card.classList.add('card-turn');
    setTimeout(() => {
      card.classList.remove('card-turn');
    }, 1000);
    
  }

  handleClick() {
    this.getACard();
  }

  render() {
    return (
      <div>
        {/* page title */}
        <img className="page-title" src="https://www.projectdivination.xyz/images/title-outlines-one-card.svg" alt="One Tarot Card"/>

        {/* grid wrapper */}
        <div className="GetOneCard"> 
          <section className="main-content">
            <h1>Get One Tarot Card</h1>
              <Card 
                imgSrc={this.state.imgSrc} 
                name={this.state.name}
                suit={this.state.suit}
                description={this.state.description} 
              />                   
              <button onClick={this.handleClick}>Draw a Card</button>
              
          </section>

          <section className="side-content-1">
            <h4>One Question, One Answer</h4>
            <p>Draw one tarot card from the deck to get a clue about any question you desire.</p>
            <h4>Instructions</h4>
            <p>Decide on a question and hold it in your mind, then draw a card. Consider the description of the card in relation to your question.</p>
          </section>

          <section className="side-content-2">
            <GetTryThese />
          </section>

          <section className="side-content-3">
            <WikiAttribution />
          </section>

        </div>
      </div>
    )
  }
}

export default GetOneCard;