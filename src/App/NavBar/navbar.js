import './navbar.scss';
import { Link } from 'react-router-dom';
import Brand from '../Brand/brand'

function NavBar() {
  return (
    <div className="NavBar">
      <div className="Bar">
        <Brand />

        <ul id="nav">
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/projects">
            <li>Projects</li>
          </Link>
          <Link to="photography">
            <li>Photography</li>
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default NavBar