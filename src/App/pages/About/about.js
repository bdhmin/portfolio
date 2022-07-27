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
              I’m a fourth-year student at <a className="ucsd" href="https://ucsd.edu" target="_blank" rel="noreferrer">UC San Diego</a> studying for a B.S. in Computer Science. 
              I'm a developer who focuses on building tools for productivity and personal growth. 
              I truly believe that everyone can become a better version of themselves with the right motivators and tools, and I home to create projects that can make a difference in people aspiring to grow.
              I also do other things for fun that are related to my hobbies such as tennis, <a class="glry" href="/gallery">photography</a>, and video games.
            </p>
            <p>
              I discovered my interest in app development for productivity while I developed social computing web apps in professor David T. Lee's lab.
              I was introduced to many differnt uses of online platforms to support communities grow, be heard, and bond.
            </p>
            <p>
              I began my creative journey with a curiosity for what aesthetics means to me. Along the way, I became inspired by the minimalist era, and I now strive to produce work that is clean yet deep in emotion. My personal website attempts to practice this philosophy as its color palette, layout, and fonts have a minimalistic taste, yet components of the app shift in depth as the user scrolls.
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
            {/* <img className="PortraitImage" src={SelfPortrait} alt="Self Portrait"/> */}
          </div>
        </div>
        {/* <Socials /> */}

      </div>

    </div>
  )
}

export default About