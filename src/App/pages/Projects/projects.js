import React, { Component } from 'react';
import './projects.scss';
import { projects, techstack } from '../../../assets/Projects'

function Projects() {
  return (
    <div className="Projects">
      <div className="projects-content">
        <h2>Projects</h2>

        <ProjectItem
          title={'Maintain'}
          description={'A date-based task-managing desktop app. Maintain steady productivity with tasks that last until you complete them and habits that reappear each day.'}
          type={'Personal Project'}
          image={projects.Maintain}
          link={'https://github.com/bdhmin/Maintain'}
          skills={[techstack.Electron, techstack.Angular, techstack.TypeScript, techstack.HTML, techstack.Sass, techstack.Firebase]}
        />

        <ProjectItem
          title={'Marathon.'}
          description={'A social goal-tracking app. Keep yourself and others accountable and achieve your dream goals with your self-created community supporting your entire journey.'}
          type={'SD Hacks 2022 Winner'}
          image={projects.Marathon}
          link={'https://devpost.com/software/marathon-gsz8to'}
          skills={[techstack.React, techstack.Javascript, techstack.HTML, techstack.CSS, techstack.Flask, techstack.MongoDB, techstack.Python]}
        />

        <ProjectItem
          title={'Annota'}
          description={'A platform to learn, understand, and perform the qualitative research process through collaborative hands-on experience.'}
          type={'The Tech4Good Lab'}
          image={projects.Annota}
          link={'https://tech4good.soe.ucsc.edu/#/'}
          skills={[techstack.Angular, techstack.TypeScript, techstack.HTML, techstack.Sass, techstack.Firebase]}
        />

        <ProjectItem
          title={'Gratitude'}
          description={'The platform for creating collective thank you cards. Send collective thank you card decks to express gratitude and give back to your community.'}
          type={'The Tech4Good Lab'}
          image={projects.Gratitude}
          link={'https://tech4good.soe.ucsc.edu/#/'}
          skills={[techstack.Angular, techstack.TypeScript, techstack.HTML, techstack.Sass, techstack.Firebase]}
        />

        <ProjectItem
          title={'Who Would Win?'}
          description={'A League of Legends player statistics comparison web app. Compare two summoners to find who is more likely to win in a match. Uses Riot API!'}
          type={'Passion Project'}
          image={projects.WhoWouldWin}
          link={'https://github.com/bdhmin/WhoWouldWin'}
          skills={[techstack.React, techstack.Javascript, techstack.HTML, techstack.CSS, techstack.Express]}
        />
      </div>
    </div>
  )
}

class ProjectItem extends Component {
  render() {
    return (
      <a className="project-box" href={this.props.link} target="_blank" rel="noreferrer">
        <img className="preview" src={this.props.image} alt={this.props.title}/>
        <div className="description">
          <h3>{this.props.title}</h3>
          <h5>{this.props.type}</h5>
          <p>{this.props.description}</p>

          <div className="skillset">
            {
              this.props.skills.map((skill) => <img style={{width: 'auto', height: '22px'}} src={skill} alt="skill" />)
            }
          </div>
        </div>
      </a>
    )
  }
}

export default Projects