import React, { Component } from 'react';
import '../Styles/GetThreeCards.css';
import Card from './Card';
import { deck } from '../data/deck.js';
import WikiAttribution from './WikiAttribution';
import GetTryThese from './GetTryThese';
import GetItemMoment from './GetItemMoment';

class GetThreeCards extends Component {

  static defaultProps = {
    id: 100,
    imgSrc: 'https://www.projectdivination.xyz/images/card-back-3.svg',
    name: 'Card Back',
    suit: 'none',
    description: 'Draw cards to see your reading'
  };

  constructor(props) {
    super(props);
    // starting state of state: three blank cards
    this.state = {
      cards: [
        {
          id: 101,
          name: 'Card One',
          suit: 'none',
          description: '',
          imgSrc: 'https://www.projectdivination.xyz/images/card-back-3.svg'
        },
        {
          id: 102,
          name: 'Card Two',
          suit: 'none',
          description: '',
          imgSrc: 'https://www.projectdivination.xyz/images/card-back-3.svg'
        },
        {
          id: 103,
          name: 'Card Three',
          suit: 'none',
          description: '',
          imgSrc: 'https://www.projectdivination.xyz/images/card-back-3.svg'
        }
      ]
    };
    this.handleClick = this.handleClick.bind(this);
  }

  getCards() {
    // get first random card from deck.js
    const randomCard1 = deck[Math.floor(Math.random() * deck.length)];
    // remove that card from the array
    let removeCard1 = deck.indexOf(randomCard1);
    deck.splice(removeCard1, 1);

    const randomCard2 = deck[Math.floor(Math.random() * deck.length)];
    let removeCard2 = deck.indexOf(randomCard2);
    deck.splice(removeCard2, 1);

    const randomCard3 = deck[Math.floor(Math.random() * deck.length)];
    let removeCard3 = deck.indexOf(randomCard3);
    deck.splice(removeCard3, 1);

    // set state with the three random card objects
    this.setState({
      cards: [randomCard1, randomCard2, randomCard3]
    });
  }

  handleClick() {
    this.getCards();
  }

  render() {
    // get all cards from the array in state
    // make new array with map then display in the render below
    const cards = this.state.cards.map(c => (
      <Card 
        key={c.id} 
        name={c.name} 
        suit={c.suit}
        imgSrc={c.imgSrc} 
        description={c.description} 
      />
    ));

    return (
      <div>
        {/* page title */}
        <img className="page-title" src="https://www.projectdivination.xyz/images/title-outlines-three-cards.svg" alt="Three Tarot Cards"/>

        {/* grid wrapper */}
        <div className="GetThreeCards">
          <section className="main-content-three">
            <h1>Get Three Tarot Cards</h1>
            <div className="inner-cards">            
              {cards}  
            </div>          
            <button onClick={this.handleClick}>Draw Cards</button>
          </section>

          <section className="content-1">
            <h4>Three Perspectives</h4>
            <p>Draw three cards from the tarot deck to answer any question you desire.</p>
            <h4>Instructions</h4>
            <p>Decide on a question and hold it in your mind, then draw the cards.<br /><br />You might consider the three cards as aspects of the same topic, or as hints for the past, present and future of a specific situation.</p>
          </section>

          <section className="content-2">
           <GetTryThese />
          </section>

          <section className="content-3">
            <GetItemMoment />
          </section>

          <section className="content-4">
            <WikiAttribution /> 
          </section>
        </div>
      </div>
    )
  }
}

export default GetThreeCards;