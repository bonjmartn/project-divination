import React from 'react';
import '../Styles/Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="Home">
      <div className="home-hero">
        <img src="https://www.projectdivination.xyz/images/home-hero-outlines.svg" alt="Project Divination Home Hero"/>
        <Link to='/one-tarot-card'>Get Started With One Tarot Card</Link>
      </div>

      {/* area for the cards */}
      <div className="Home-Sections-Wrapper">
        <section>
          <Link to='/one-tarot-card'>
            <img src="https://www.projectdivination.xyz/images/home-box_cards.svg" alt="One Tarot Card" />
          </Link>
          <Link to='/one-tarot-card'>
            One Tarot Card
          </Link>
        </section>
        <section>
          <Link to='/three-tarot-cards'>
            <img src="https://www.projectdivination.xyz/images/home-box_cards3.svg" alt="Three Carot Cards" />
          </Link>
          <Link to='/three-tarot-cards'>
            Three Tarot Cards
          </Link>
        </section>
        <section>
          <Link to='/one-rune'>
            <img src="https://www.projectdivination.xyz/images/home-box_rune.svg" alt="One Rune"/>
          </Link>
          <Link to='/one-rune'>
            One Rune
          </Link>
        </section>
        <section>
          <Link to='/three-runes'>
            <img src="https://www.projectdivination.xyz/images/home-box_runes3.svg" alt="Three Runes" />
          </Link>
          <Link to='/three-runes'>
            Three Runes
          </Link>
        </section>
        <section>
          <Link to='/crystal-ball'>
            <img src="https://www.projectdivination.xyz/images/home-box_crystal_ball.svg" alt="Crystal Ball"/>
          </Link>
          <Link to='/crystal-ball'>
            Crystal Ball
          </Link>
        </section>
        <section>
          <Link to='/yes-or-no'>
            <img src="https://www.projectdivination.xyz/images/home-box_yes_no.svg" alt="Yes or No" />
          </Link>
          <Link to='/yes-or-no'>
            Yes or No
          </Link>
        </section>
        <section>
          <Link to='/flip-coin'>
            <img src="https://www.projectdivination.xyz/images/home-box_flip_coin.svg" alt="Flip a Coin" />
          </Link>
          <Link to='/flip-coin'>
            Flip a Coin
          </Link>
        </section>
        <section>
          <Link to='/lottery'>
            <img src="https://www.projectdivination.xyz/images/home-box_lottery.svg" alt="Lottery" />
          </Link>
          <Link to='/lottery'>
            Lottery
          </Link>
        </section>
        
      </div>
    </div>
  );
}

export default Home;