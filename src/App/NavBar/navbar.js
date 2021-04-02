import './navbar.scss';
import Brand from '../Brand/brand'

function NavBar() {
  return (
    <div className="Bar">
      <Brand />

      <ul id="nav">
        <li><a href="/About">About</a></li>
        <li><a href="/Projects">Projects</a></li>
        <li><a href="/Art">Art</a></li>
      </ul>
    </div>

  )
}

export default NavBar