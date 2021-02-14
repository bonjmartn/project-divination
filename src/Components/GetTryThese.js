import React, { Component } from 'react';
import '../Styles/GetTryThese.css';
import TryThis from './TryThis';
import { tryThese } from '../data/tryThese.js';

class GetTryThese extends Component {

  static defaultProps = {
    // starting properties
    id: 100,
    name: "One Tarot suggestion",
    link: "/one-tarot-suggestion",
    imgSrc: "https://www.projectdivination.xyz/images/try_suggestions.svg"
  };

  constructor(props) {
    super(props);
    // starting state of state
    this.state = {
      suggestions: []      
    }
  }

  componentDidMount() {
    // get first random suggestion from tryThese.js
    const randomSuggestion1 = tryThese[Math.floor(Math.random() * tryThese.length)];

    // make a new array with all suggestions except the first one drawn
    const secondtryThese = [];
    for (let i = 0; i < tryThese.length; i++) {
      if (tryThese[i].id !== randomSuggestion1.id) {
        secondtryThese.push(tryThese[i]);
      }
    }

    // get second random suggestion from the new second tryThese
    const randomSuggestion2 = secondtryThese[Math.floor(Math.random() * secondtryThese.length)];

    // make a new array with all suggestions except the second one drawn
    const thirdtryThese = [];
    for (let i = 0; i < secondtryThese.length; i++) {
      if (secondtryThese[i].id !== randomSuggestion2.id) {
        thirdtryThese.push(secondtryThese[i]);
      }
    }

    // get third random suggestion from the new third tryThese
    const randomSuggestion3 = thirdtryThese[Math.floor(Math.random() * thirdtryThese.length)];

    // set state with the three random suggestion objects
    this.setState({
      suggestions: [randomSuggestion1, randomSuggestion2, randomSuggestion3]
    });

  }

  render() {

    // get all suggestions from the array in state
    // make new array with map then display in the render below
    const suggestions = this.state.suggestions.map(s => (
      <TryThis 
        key={s.id}
        name={s.name}
        link={s.link}
        imgSrc={s.imgSrc} 
      />
    ));

    return (
      <div className="GetTryThese">
        <h4>Give These a Try</h4>
        {suggestions}                           
      </div>
    )
  }
}

export default GetTryThese;