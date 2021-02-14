import React, { Component } from 'react';
import '../Styles/Rune.css';

class Rune extends Component {
  render() {

    return (
      <div className="Rune">
        <img src={this.props.imgSrc} alt={this.props.name}/>
        <h3>{this.props.name}</h3>

        {/* add a class of "hidden" while the "drawn" prop is false, so that we don't print these to the screen until the user draws a rune */}
        <div className="rune-description">
          <p className={`${this.props.drawn ? "" : "hidden"}`}>English Name: {this.props.englishName}</p>
          <p className={`${this.props.drawn ? "" : "hidden"}`}>Phoneme: {this.props.phoneme}</p>       
          <p className={`${this.props.drawn ? "" : "hidden"}`}>Meaning: {this.props.description}</p>
        </div>
      </div>
    )
  }
}

export default Rune;