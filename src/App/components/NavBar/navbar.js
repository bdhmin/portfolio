import React, { Component } from 'react';
import './navbar.scss';
import { Link } from 'react-router-dom';
import Brand from '../Brand/brand'

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      copiedEmail: false,
    }
  }

  copyEmail = () => {
    if (!this.state.copiedEmail) {
      const copyBlock = document.getElementById('copy');
      copyBlock.classList.add('show-popup');
      this.setState({copiedEmail: true});

      navigator.clipboard.writeText('bryandhmin@gmail.com');

      setTimeout(() => {
        copyBlock.classList.remove('show-popup');
        this.setState({copiedEmail: false});
      }, 2000);
    }
  }

  render() {
    return (
      <div className="NavBar">
          <div className="copied-popup" id="copy">
            <div className="popup-box">
              Email copied to clipboard!
            </div>
          </div>
        <div class="background-border">
          <div class="background-bar"></div>
        </div>
        <div className="Bar">
          <Brand />
  
          <ul id="nav">
            {/* <Link to="/" className="nav-item">
              <li>About</li>
            </Link> */}
            {/* <Link to="/background" className="nav-item">
              <li>Background</li>
            </Link> */}
            {/* <Link to="/timeline" className="nav-item">
              <li>Timeline</li>
            </Link> */}
            <Link to="/projects" className="nav-item">
              <li>Projects</li>
            </Link>
            <Link to="/gallery" className="nav-item">
              <li>Gallery</li>
            </Link>
            <a className="nav-item" href="https://drive.google.com/file/d/1OI90k0_RCVjZIiIyvhXtSn5DpGX8X9QJ/view?usp=sharing" target="_blank" rel="noreferrer">
              <li>Resume</li>
            </a>
            {/* <div onClick={this.copyEmail} className="nav-item">
              <li>Contact Me</li>
            </div> */}
  
            {/* <span className="nav-item">
              <Link to="/gallery">
                <li>The Gallery</li>
              </Link>
            </span>
            <span className="nav-item">
              <Link to="/gallery">
                <li>Contact</li>
              </Link>
            </span> */}
          </ul>
        </div>
      </div>
    )
  }
}

export default NavBar