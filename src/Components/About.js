import '../Styles/About.css';
import { Link } from 'react-router-dom';

function About() {
  return (

    <div>
      {/* page title */}
      <img className="page-title" src="https://www.projectdivination.xyz/images/title-outlines-about.svg" alt="About"/>

      {/* grid wrapper */}
      <div className="About">
        <section className="about-main-content">
          <h1>About Project Divination</h1>

          <img id="about-logo" src="https://www.projectdivination.xyz/images/logo_Circle_Color.svg" alt="Project Divination" />

          <p>Here at Project Divination, you can get instant readings with tarot cards or runes. The site also offers simple "yes or no" answers, fortunes, and lottery numbers. More divination games are coming soon.</p>

          <p>Obviously, and importantly, these readings are <Link to='/terms'>for entertainment purposes only</Link>.</p>

          <p>This website was created by me, <a href="https://www.bonniejmartin.com/">Bonnie Martin</a>, a front-end web developer and designer. I built this project to learn <a href="https://reactjs.org/">React</a>, a popular front-end JavaScript library/framework. The technology lends itself well to something like drawing cards from a deck, or generating random results that get rendered on the page for the user.</p>

          <p>I also wanted to build a website that provided readings for free without requiring the visitor to enter an email address, deal with excessive ads, or otherwise be tracked (beyond basic cookies and analytics.)</p>
        </section>

        <section className="about-side-content">
          <h4>Related Links</h4>
          <div className="about-related-link">
            <a href="https://github.com/bonjmartn/project-divination"><i className="fab fa-github"></i></a>
            <span>GitHub</span>            
          </div>
          <p>The code for this project is available on <a href="https://github.com/bonjmartn/project-divination">GitHub</a>.</p>
          <div className="about-related-link">
            <a href="https://www.behance.net/bonjmartn"><i className="fab fa-behance"></i></a>
            <span>Behance</span>            
          </div>
          <p>More about the design of this project is available on <a href="https://www.behance.net/bonjmartn">Behance</a>.</p>
          <div className="about-related-link">
            <a href="https://projectdivination.xyz/images/Psychic-Divination-Branding-Sheet.pdf"><i className="fas fa-palette"></i></a>
            <span>Style Guide</span>            
          </div>
          <p>You can download the <a href="https://projectdivination.xyz/images/Psychic-Divination-Branding-Sheet.pdf">Style Guide</a> for this website.</p>
          <div className="about-related-link">
            <a href="https://www.bonniejmartin.com/"><i className="fas fa-desktop"></i></a>
            <span>BonnieJMartin.com</span>            
          </div>
          <p>Take a look at my <a href="https://www.bonniejmartin.com/">resume website</a> for more information about me.</p>
        </section>

      </div>
    </div>
  )
}

export default About;