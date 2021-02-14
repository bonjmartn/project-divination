import '../Styles/NotFound.css';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="NotFound">
      <section>
        <h1>404</h1>

        <p>Wherever you were trying to go, that page doesn't exist.</p>

        <p>Try the <Link to='/'>home page</Link> or maybe get a <Link to='/one-tarot-card'>one card</Link> reading.</p>

        
      </section>    
    </div>
  )
}

export default NotFound;