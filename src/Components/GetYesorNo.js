import React, { Component } from 'react';
import '../Styles/GetYesorNo.css';
import YesorNo from './YesorNo';
import GetTryThese from './GetTryThese';

class GetYesorNo extends Component {

  static defaultProps = {
    // starting properties
    answer: '',
    answered: false
  };

  constructor(props) {
    super(props);
    // starting state of state
    this.state = {
      answer: '',
      answered: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    // this logic adds and removes classes if you've gotten the same answer twice, so that the animation will repeat and make it look like you've chosen again

    if (this.state.answer === prevState.answer) {
  
      const yesImg = document.getElementById("yes");
      const noImg = document.getElementById("no");
      const yesBody = document.getElementById("yes-body");
      const noBody = document.getElementById("no-body");

      if (yesImg.classList.contains("answer")) {
        yesImg.classList.remove("answer");
        setTimeout(() => {
          yesImg.classList.add("answer");
        }, 100);
      }
      if (noImg.classList.contains("answer")) {
        noImg.classList.remove("answer");
        setTimeout(() => {
          noImg.classList.add("answer");
        }, 100);
      }
      if (yesBody.classList.contains("answer")) {
        yesBody.classList.remove("answer");
        setTimeout(() => {
          yesBody.classList.add("answer");
        }, 100);
      }
      if (noBody.classList.contains("answer")) {
        noBody.classList.remove("answer");
        setTimeout(() => {
          noBody.classList.add("answer");
        }, 100);
      }
    }
  }
  
  answerYesorNo() {

    // choose yes or no
    const chance = Math.floor(Math.random() * 2);
    let result = '';
    chance === 1 ? result = 'Yes' : result = 'No';

    this.setState({
      answer: result,
      answered: true
    });
  }

  handleClick() {
    this.answerYesorNo();
  }

  render() {
    return (
      <div>
        {/* page title */}
        <img className="page-title" src="https://www.projectdivination.xyz/images/title-outlines-yes-or-no.svg" alt="Yes or No"/>

        {/* grid wrapper */}
        <div className="GetYesorNo"> 
          <section className="main-content">
            <h1>Yes or No</h1>
            <YesorNo
              answer={this.state.answer}
              answered={this.state.answered}
            />
            <button onClick={this.handleClick}>Yes or No?</button>              
          </section>

          <section className="side-content-1">
            <h4>A Straight Answer</h4>
            <p>Get a simple "Yes" or "No" answer to any question you desire.</p>
            <h4>Instructions</h4>
            <p>Decide on a question and hold it in your mind, then click the button. You can click it as many times as you want, but that won't change the first answer you got!</p>
          </section>

          <section className="side-content-2">
            <GetTryThese />
          </section>
        </div>
      </div>
    )
  }
}

export default GetYesorNo;