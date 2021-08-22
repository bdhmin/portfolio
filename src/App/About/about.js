import './about.scss';
import SelfPortrait from '../../assets/About/Bryan-Wall.jpg';

function About() {
  return (
    <div className="About">
      <div className="AboutBox">
        <h2>About</h2>

        <div className="Content">

          {/* <div className="Portrait">
            <div className="PortraitImage">
              <img src={SelfPortrait} alt="Self Portrait"/>
            </div>
          </div> */}

          <div className="Bio">
            <p>
              I’m a rising third-year student at <a class="ucsd" href="https://ucsd.edu" target="_blank" rel="noreferrer">UC San Diego</a> studying for a B.S. in Computer Science.
            </p>
            {/* <p>
              I began my creative journey with a curiosity for what aesthetics means to me. Along the way, I became inspired by the minimalist era, and I now strive to produce work that is clean yet deep in emotion.
            </p> */}
            <p>
              {/* I'm a developer who loves to build tools that improve the traits of the user using it—traits like productivity, knowledge in a particular field, or even tennis.  */}
              I'm a developer who loves to build tools for self-improvement in productivity, knowledge in a particular field, or even gaming.
            </p>
            <p>
              Outside of development, I play tennis, take <a class="glry" href="/gallery">photos</a>, and occasionally play some video games.
            </p>
            {/* <p>
              Scroll up to see my <b>live status</b>! If you want to learn how I did this, <Link to="/docs/live-status"><u>click here</u></Link>.
            </p> */}
          </div>



        </div>
        
        <div className="More">
          {/* <div className="Socials">
            <div className="Links">
              <a href="https://www.linkedin.com/in/bryan-min-72108a19b/" target="_blank" rel="noreferrer"><h6>LinkedIn</h6></a>
              <a href="https://github.com/bdmin00" target="_blank" rel="noreferrer"><h6>GitHub</h6></a>
              <a href="https://vsco.co/bryanmin/gallery" target="_blank" rel="noreferrer"><h6>VSCO</h6></a>
              <a href="mailto: bryandhmin@gmail.com"><h6>Email</h6></a>
            </div>
          </div> */}
          <div className="Portrait">
            <div className="PortraitImage">
              <img src={SelfPortrait} alt="Self Portrait"/>
            </div>
          </div>
        </div>
        {/* <Socials /> */}

      </div>

    </div>
  )
}

export default About