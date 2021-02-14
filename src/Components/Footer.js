import React from 'react';
import '../Styles/Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer>
          <div className="footer-columns-wrapper">
            <div className="footer-column">
              <Link to='/'><img src="https://www.projectdivination.xyz/images/logo_Circle_White.svg" alt="Project Divination" width="200px" /></Link>
            </div>
            <div className="footer-column">
              <p className="footer-nav-title">Tarot</p>
              <ul>
                <li><Link to='/one-tarot-card'>One Tarot Card</Link></li>
                <li><Link to='/three-tarot-cards'>Three Tarot Cards</Link></li>
              </ul>
              <p className="footer-nav-title footer-space">Runes</p>
              <ul>
                <li><Link to='/one-rune'>One Rune</Link></li>
                <li><Link to='/three-runes'>Three Runes</Link></li>
              </ul>
            </div>
            <div className="footer-column">
              <p className="footer-nav-title">Fortunes</p>
              <ul>
                <li><Link to='/crystal-ball'>Crystal Ball</Link></li>
                <li><Link to='/yes-or-no'>Yes or No</Link></li>
                <li><Link to='/flip-coin'>Flip a Coin</Link></li>
              </ul>
              <p className="footer-nav-title footer-space">Numbers</p>
              <ul>
                <li><Link to='/lottery'>Lottery</Link></li>
              </ul>
              </div>
            <div className="footer-column">
              <p className="footer-nav-title">Project Divination</p>
              <ul>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/terms'>Terms of Use</Link></li>
              </ul>
              
              <svg id="footer-candle" width="100px" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><defs><style>{`{.cls-1,.cls-2,.cls-3{fill:none;stroke:#fff;stroke-width:3px;}.cls-1,.cls-3{stroke-miterlimit:10;}.cls-2{stroke-linejoin:round;}.cls-3{stroke-linecap:round;}`}</style></defs><path id="footer-candle-base" className="cls-1" d="M138.38,84.84c18.78,5.11,31.39,14.53,31.39,24.44v50.34c0,15.74-31.24,28.51-69.77,28.51s-69.77-12.77-69.77-28.51V109.28c0-10,14.49-19.76,33.64-24.84l2.78,7.44c-14,3.68-25.46,10.39-25.46,16.89,0,11.14,26.33,20.17,58.81,20.17s58.81-9,58.81-20.17c0-6.26-9.48-12.32-22.56-16Z"/><path id="footer-candle-flame" className="cls-2" d="M122.36,52.85c-18.13-12.79-11.88-30.91-10.36-41,0,0-57.12,34.7-48.17,71.32,3.1,12.67,10.64,19.71,19.57,23.21a26.1,26.1,0,0,1-5.3-6.87c-12.84-23.47,20-57.7,20-57.7.8,7.18-.16,20.75,14.61,26.21,17.94,6.64,19.82,24.12,13.13,32.76a27.22,27.22,0,0,1-8,6c4.72-1.35,8.48-3.06,10.53-4.62C140.57,92.87,144.37,68.39,122.36,52.85Z"/><path id="footer-candle-wick" className="cls-3" d="M100.14,88.15s-5.69,9.91,2,21.66"/></svg>
            </div>
          </div>
          <p className="copyright">Copyright &copy; 2021 <Link to='/'>Project Divination</Link>. All rights reserved.</p>
        </footer>
    )
}

export default Footer;