import './about.scss';
import Path from '../Path/path';
import SelfPortrait from '../../assets/SelfPortrait.jpg';

function About() {
  return (
    <div className="About">
      <Path />

      <div className="Content">
        <div className="Portrait">
          <img className="PortraitImage" src={SelfPortrait} alt="Self Portrait" draggable="false"/>
          
          <svg className="PortraitBlocks" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 100">
            <path id="Portrait1" data-name="Portrait1" d="M0,0H20V20H0Z" fill="#c0ba7f"/>
            <path id="Portrait2" data-name="Portrait2" d="M0,0H20V20H0Z" transform="translate(0 20)" fill="#919539"/>
            <path id="Portrait3" data-name="Portrait3" d="M0,0H20V20H0Z" transform="translate(0 60)" fill="#6b6d4e"/>
            <path id="Portrait4" data-name="Portrait4" d="M0,0H20V20H0Z" transform="translate(0 40)" fill="#585528"/>
            <path id="Portrait5" data-name="Portrait5" d="M0,0H20V20H0Z" transform="translate(0 80)" fill="#0e1117"/>
          </svg>
        </div>

        <div className="Bio">
          <div className="Intro">
            Hi! <br></br> I'm Bryan Min, a student at UC Santa Cruz studying Computer Engineering.
          </div>

          <div className="MainBody">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
          </div>


        </div>
      </div>

    </div>
  )
}

export default About