import './home.scss';
import Sunglasses from '../../assets/Home/Sunglasses.jpg';
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

          <p>I’m a student at UC Santa Cruz studying Computer Engineering. I love to create tools that benefit day-to-day life, and I also love to design interfaces. Currently, I am working as a Web Developer in the <b>Tech4Good Labs</b>. </p>
        </div>


      </div>

      <Projects />

    </div>
  )
}

export default Home