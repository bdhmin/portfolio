import './about.scss';
// import SelfPortrait from '../../assets/About/Bryan-Wall.jpg';

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
              I’m a fourth-year undergraduate student at <a className="ucsd" href="https://ucsd.edu" target="_blank" rel="noreferrer">UC San Diego</a> pursuing Computer Science. 
              I am doing research in the <a className="creativity" href="https://creativity.ucsd.edu/" target="_blank" rel="noreferrer">Creativity Lab</a> on building interfaces and systems to improve workflows for productivity.
            </p>
            <p>
              Previously, I was a part of the <a className="t4g" href="https://tech4good.soe.ucsc.edu/#/" target="_blank" rel="noreferrer">Tech4Good Lab</a>, where I developed web applications for social computing research.
            </p>
            {/* <p>
              I discovered my interest in app development for productivity while I developed social computing web apps in professor David T. Lee's lab.
              I was introduced to many differnt uses of online platforms to support growth in communities.
            </p> */}
            {/* <p>
              I began my creative journey with a curiosity for what aesthetics means to me. Along the way, I became inspired by the minimalist era, and I now strive to produce work that is clean yet deep in emotion.
            </p> */}
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
            {/* <img className="PortraitImage" src={SelfPortrait} alt="Self Portrait"/> */}
          </div>
        </div>
        {/* <Socials /> */}

      </div>

    </div>
  )
}

export default About