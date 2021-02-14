import React, { Component } from 'react';
import '../Styles/YesorNo.css';

class YesorNo extends Component {

  render() {

    return (
      <div className="YesorNo">
        <div className="YesorNo-SVGs">
          <svg id="yes" className={`${this.props.answer === 'Yes' ? 'answer' : 'black'}`} width="150px" alt="Yes" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 185.89"><defs><style>{`.cls-1{fill:#1a1a1a;stroke:#1a1a1a;stroke-miterlimit:10;stroke-width:3px;}.cls-2{fill:#fff;}`}</style></defs><path id="yes-body" className={`${this.props.answer === 'Yes' ? 'answer' : ''}`} d="M96.08,9.89a84.15,84.15,0,0,0-2.17,168.28,42.08,42.08,0,0,1,2.17-84.11,42.09,42.09,0,1,0,0-84.17Z"/><circle className={`${this.props.answer === 'Yes' ? 'black' : 'answer'}`} cx="95.94" cy="51.7" r="15.65"/></svg>

          <svg id="no" className={`${this.props.answer === 'No' ? 'answer' : 'black'}`} width="150px" alt="No" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 185.89"><defs><style>{`.cls-1{fill:#fff;stroke:#1a1a1a;stroke-miterlimit:10;stroke-width:3px;}.cls-2{fill:#1a1a1a;}`}</style></defs><path id="no-body" className={`${this.props.answer === 'No' ? 'answer' : ''}`} d="M55,178.17A84.15,84.15,0,0,0,57.2,9.89,42.08,42.08,0,0,1,55,94a42.09,42.09,0,1,0,0,84.17Z"/><circle className={`${this.props.answer === 'No' ? 'black' : 'answer'}`} cx="55.17" cy="134.36" r="15.65"/></svg>
        </div>

        <h3 className={`${this.props.answered ? "" : "hidden"}`}>You got: {this.props.answer}</h3>
      </div>
    )
  }
}

export default YesorNo;