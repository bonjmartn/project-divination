import React, { Component } from 'react';
import '../Styles/GetThreeRunes.css';
import Rune from './Rune';
import { bagOfRunes } from '../data/bagOfRunes.js';
import GetTryThese from './GetTryThese';
import GetItemMoment from './GetItemMoment';

class GetThreeRunes extends Component {

  static defaultProps = {
    id: 100,
    imgSrc: 'https://www.projectdivination.xyz/images/Rune_BLANK.png',
    name: 'One Rune',
    englishName: 'One Rune',
    phoneme: '',
    description: 'Draw a rune to see your reading.'
  };

  constructor(props) {
    super(props);
    // starting state of state
    // three blank runes
    this.state = {
      runes: [
        {
          id: 101,
          name: 'Rune One',
          suit: 'none',
          description: '',
          imgSrc: 'https://www.projectdivination.xyz/images/Rune_BLANK.png'
        },
        {
          id: 102,
          name: 'Rune Two',
          suit: 'none',
          description: '',
          imgSrc: 'https://www.projectdivination.xyz/images/Rune_BLANK.png'
        },
        {
          id: 103,
          name: 'Rune Three',
          suit: 'none',
          description: '',
          imgSrc: 'https://www.projectdivination.xyz/images/Rune_BLANK.png'
        }
      ],
      drawn: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  getRunes() {

    // get first random rune from bagOfRunes.js
    const randomRune1 = bagOfRunes[Math.floor(Math.random() * bagOfRunes.length)];
    // remove that rune from the array
    let removeRune1 = bagOfRunes.indexOf(randomRune1);
    bagOfRunes.splice(removeRune1, 1);

    const randomRune2 = bagOfRunes[Math.floor(Math.random() * bagOfRunes.length)];
    let removeRune2 = bagOfRunes.indexOf(randomRune2);
    bagOfRunes.splice(removeRune2, 1);

    const randomRune3 = bagOfRunes[Math.floor(Math.random() * bagOfRunes.length)];
    let removeRune3 = bagOfRunes.indexOf(randomRune3);
    bagOfRunes.splice(removeRune3, 1);

    // set state with the three random rune objects
    this.setState({
      runes: [randomRune1, randomRune2, randomRune3],
      drawn: true
    });

  }

  handleClick() {
    this.getRunes();
  }

  render() {

    // get all runes from the array in state
    // make new array with map then display in the render below
    const runes = this.state.runes.map(r => (
      <Rune 
        key={r.id} 
        name={r.name} 
        englishName={r.englishName}
        phoneme={r.phoneme}
        imgSrc={r.imgSrc} 
        description={r.description}
        drawn={this.state.drawn}
      />
    ));

    return (

      <div>
        {/* page title */}
        <img className="page-title" src="https://www.projectdivination.xyz/images/title-outlines-three-runes.svg" alt="Three Runes"/>

        {/* grid wrapper */}
        <div className="GetThreeRunes">
          <section className="main-content-three">
            <h1>Get Three Runes</h1>
            <div className="inner-cards">            
              {runes} 
            </div>          
            <button onClick={this.handleClick}>Draw Runes</button>
          </section>

          <section className="content-1">
            <h4>Three Runic Letters</h4>
            <p>These Norse runes are 24 letters in a runic alphabet that were also used in divination with brief meanings.<br /><br />      
            Draw one rune to get a clue about any question you desire.</p>
            <h4>Instructions</h4>
            <p>Decide on a question and hold it in your mind, then draw the runes.<br /><br />You might consider the three runes as aspects of the same topic, or as clues for the past, present and future of a specific situation.</p>
          </section>

          <section className="content-2">
           <GetTryThese />
          </section>

          <section className="content-3">
            <GetItemMoment />
          </section>
        </div>
      </div>
    )
  }
}

export default GetThreeRunes;