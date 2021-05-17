import './home.scss';
import Sunglasses from '../../assets/Home/Sunglasses-Wide.jpg';
import Projects from '../Projects/projects';
import About from '../About/about';

function Home() {
  return (
    <div className="Home">
      <div className="Intro">
        <div className="Name">Bryan Min</div>
        <div className="Greeting">
          <p>I’m a student at UC Santa Cruz studying Computer Engineering who also loves aesthetic design. Currently, I’m making cool things as a Web Developer in the <a href="https://tech4good.soe.ucsc.edu/#/" target="_blank" rel="noreferrer"><b>Tech4Good Labs</b></a>.</p>
        </div>
      </div>

      <About />
    </div>
  )
}

export default Home