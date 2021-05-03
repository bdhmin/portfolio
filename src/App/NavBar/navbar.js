import './navbar.scss';
import { Link } from 'react-router-dom';
import Brand from '../Brand/brand'

function NavBar() {
  return (
    <div className="Bar">
      <Brand />

      <ul id="nav">
        <Link to="/About">
          <li>About</li>
        </Link>
        <Link to="/Projects">
          <li>Projects</li>
        </Link>
        <Link to="Photography">
          <li>Photography</li>
        </Link>
      </ul>
    </div>

  )
}

export default NavBar