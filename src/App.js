import './App.css';
import GetOneCard from './Components/GetOneCard';
import GetThreeCards from './Components/GetThreeCards';
import GetOneRune from './Components/GetOneRune';
import GetThreeRunes from './Components/GetThreeRunes';
import GetFortune from './Components/GetFortune';
import GetYesorNo from './Components/GetYesorNo';
import GetCoinSide from './Components/GetCoinSide';
import GetLotteryBalls from './Components/GetLotteryBalls';
import Home from './Components/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Terms from './Components/Terms';
import NotFound from './Components/NotFound';
import ScrollToTop from './Components/ScrollToTop';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CookieConsent from "react-cookie-consent";
import { Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="page-container">
      <Header />
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/one-tarot-card" exact component={GetOneCard} />
          <Route path="/three-tarot-cards" exact component={GetThreeCards} />       
          <Route path="/one-rune" exact component={GetOneRune} />
          <Route path="/three-runes" exact component={GetThreeRunes} />
          <Route path="/crystal-ball" exact component={GetFortune} />
          <Route path="/yes-or-no" exact component={GetYesorNo} />
          <Route path="/flip-coin" exact component={GetCoinSide} />
          <Route path="/lottery" exact component={GetLotteryBalls} />
          <Route path="/about" exact component={About} />
          <Route path="/terms" exact component={Terms} />
          <Route component={NotFound} />
        </Switch>
      </div>
      <Footer />
      <CookieConsent
        location="bottom"
        buttonText="I AGREE"
        cookieName="termsCookie"
        style={{ background: "#1A1A1A" }}
        buttonStyle={{ color: "#1A1A1A", fontSize: "13px" }}
        expires={150}
      >
        <span style={{ fontSize: "15px" }}>By using this website, you agree to the <Link to='/terms'>Terms of Use</Link></span>
      </CookieConsent>
      </div>
    </Router>
  );
}

export default App;