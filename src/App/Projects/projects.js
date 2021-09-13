import './projects.scss';
import projects from '../../assets/Projects'

function Projects() {
  return (
    <div className="Projects">
      <div className="projects-content">
        <h2>Projects</h2>

        {/* Annota at The Tech4Good Lab */}
        <a className="project-box" href="https://tech4good.soe.ucsc.edu/#/" target="_blank" rel="noreferrer">
          <img className="preview" src={projects.Annota} alt="Annota"/>
          <div className="description">
            <div className="title"><h3>Annota</h3><p><i>Private Project</i></p></div>
            <h5>The Tech4Good Lab</h5>
            <p>A platform to learn, understand, and perform the qualitative research process through collaborative hands-on experience.</p>
            
            <div className="skillset">
              <div className="skill">TypeScript</div>
              <div className="skill">HTML</div>
              <div className="skill">Sass</div>
              <div className="skill">Angular</div>
              <div className="skill">NgRx</div>
              <div className="skill">Firebase</div>
            </div>
          </div>
        </a>

        {/* Gratitude at The Tech4Good Lab */}
        <a className="project-box" href="https://tech4good.soe.ucsc.edu/#/" target="_blank" rel="noreferrer">
          <img className="preview" src={projects.Gratitude} alt="Gratitude"/>
          <div className="description">
          <div className="title"><h3>Gratitude</h3><p><i>Private Project</i></p></div>
            <h5>The Tech4Good Lab</h5>
            <p>The platform for creating collective thank you cards. Send collective thank you card decks to express gratitude and give back to your community.</p>

            <div className="skillset">
              <div className="skill">TypeScript</div>
              <div className="skill">HTML</div>
              <div className="skill">Sass</div>
              <div className="skill">Angular</div>
              <div className="skill">NgRx</div>
              <div className="skill">Firebase</div>
            </div>
          </div>
        </a>

        {/* Who Would Win a Personal Project */}
        <a className="project-box" href="https://github.com/bdhmin/WhoWouldWin" target="_blank" rel="noreferrer">
          <img className="preview" src={projects.WhoWouldWin} alt="Who Would Win"/>
          <div className="description">
            <h3>Who Would Win?</h3>
            <h5>Passion Project</h5>
            <p>A League of Legends player statistics comparison web app. Compare two summoners to find who is more likely to win in a match.</p>

            <div className="skillset">
              <div className="skill">Javascript</div>
              <div className="skill">HTML</div>
              <div className="skill">Sass</div>
              <div className="skill">React</div>
              <div className="skill">Express</div>
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Projects