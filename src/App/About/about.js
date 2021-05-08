import './about.scss';
import SelfPortrait from '../../assets/About/Clear-Glasses.jpg';

function About() {
  return (
    <div className="About">
      <h1><i>A Special Hello</i></h1>

      <div className="Content">

        <div className="Portrait">
          <div className="PortraitImage">
            <img src={SelfPortrait} alt="Self Portrait"/>
          </div>
        </div>

        <div className="Bio">
          <p>
            I’m Bryan Min, a student at UC Santa Cruz studying for a B.S. in Computer Engineering.
          </p>
          <p>
            I began my creative journey with a curiosity for what aesthetics means to me. Along the way, I became inspired by the minimalist era, and I now strive to produce work that is clean yet deep in emotion.
          </p>
          <p>
            Through the discovery of my artistic identity, I also grew passionate for building tools through code that can benefit me and my peers.
          </p>

          <div className="Socials">
            <div className="Links">
              <a href="https://www.linkedin.com/in/bryan-min-72108a19b/" target="_blank" rel="noreferrer"><p>LinkedIn</p></a>
              <a href="https://github.com/bdmin00" target="_blank" rel="noreferrer"><p>GitHub</p></a>
              <a href="https://vsco.co/bryanmin/gallery" target="_blank" rel="noreferrer"><p>VSCO</p></a>
              <a href="mailto: bryandhmin@gmail.com"><p>Email</p></a>
            </div>
          </div>
        </div>


      </div>




    </div>
  )
}

export default About