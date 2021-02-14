import React, { Component } from 'react';
import '../Styles/Nav.css';
import { Link } from 'react-router-dom';

class Nav extends Component {

  constructor(props) {
    super(props);
    this.menuIconClick = this.menuIconClick.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  closeMenu() {
    // close the menu on mobile view when clicked
    const target = document.querySelectorAll("nav a");
    const logotarget = document.querySelector(".nav-logo-bar-logo");
    const nav = document.getElementById("nav");

    // if clicking on any a item within the nav
    target.forEach(item => {
      item.addEventListener('click', event => {
        nav.classList.remove("show");
      })
    });    

    // if clicking on the logo specifically, since it's outside the nav
    logotarget.addEventListener('click', function() {
        nav.classList.remove("show");
    });
  }

  menuIconClick() {
    // toggle between adding and removing the "show" class to nav when the user clicks on the icon
    const target = document.getElementById("nav");
    target.classList.toggle("show");
    const header = document.getElementById("header");
    header.style.borderRadius = "2em";
  }

  render() {

    // logo to be used in both versions of the menu
    const logo = {
      imgSrc: 'https://www.projectdivination.xyz/images/logo_Horizontal_Color.svg',
      width: '275px'
    }

    return (
    <div onClick={this.closeMenu}>
      <div className="nav-logo-bar">
        <span className="nav-logo-bar-logo"><Link to='/'><img src={logo.imgSrc} width={logo.width} alt="Project Divination" /></Link></span>
        <span onClick={this.menuIconClick} className="icon"><i className="fa fa-bars"></i></span>
      </div>

      <nav id="nav" className="main-navigation">
        <ul className="menu">
          <li id="nav-inline-logo"><Link to='/'><img src={logo.imgSrc} width={logo.width} alt="Project Divination" /></Link></li>
          <li className="menu-item-has-children">Tarot <i className="fa fa-caret-down"></i>
            <ul className="sub-menu">
              <li><Link to='/one-tarot-card'>One Tarot Card</Link></li>
              <li><Link to='/three-tarot-cards'>Three Tarot Cards</Link></li>
            </ul>
          </li>
          <li className="menu-item-has-children">Runes <i className="fa fa-caret-down"></i>
            <ul className="sub-menu">
              <li><Link to='/one-rune'>One Rune</Link></li>
              <li><Link to='/three-runes'>Three Runes</Link></li>
            </ul>
          </li>
          <li className="menu-item-has-children">Fortunes <i className="fa fa-caret-down"></i>
            <ul className="sub-menu">
              <li><Link to='/crystal-ball'>Crystal Ball</Link></li>
              <li><Link to='/yes-or-no'>Yes or No</Link></li>
              <li><Link to='/flip-coin'>Flip a Coin</Link></li>
            </ul>
          </li>
          <li className="menu-item-has-children">Numbers <i className="fa fa-caret-down"></i>
            <ul className="sub-menu">
              <li><Link to='/lottery'>Lottery</Link></li>
            </ul>
          </li>
          <li><Link to='/about'>About</Link></li>
        </ul>        
      </nav>

    </div>
    );
  }
}

export default Nav;