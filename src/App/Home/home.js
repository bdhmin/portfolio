import './home.scss';
import Sunglasses from '../../assets/Home/Sunglasses-Wide.jpg';
import Projects from '../Projects/projects';

function Home() {
  return (
    <div className="Home">
      <div className="Intro">

        <div className="Sunglasses">
          <img src={Sunglasses} alt="Bryan Min" />
        </div>

        <div className="Greeting">
          <h1><i>Hi!</i></h1>
          <h1>I'm Bryan Min</h1>

          <p>I’m a student at UC Santa Cruz studying Computer Engineering who also loves aesthetic design. Currently, I’m making cool things as a Web Developer in the <a href="https://tech4good.soe.ucsc.edu/#/" target="_blank" rel="noreferrer"><b>Tech4Good Labs</b></a>.</p>
        </div>


      </div>
      
      <Projects />

    </div>
  )
}

export default Home