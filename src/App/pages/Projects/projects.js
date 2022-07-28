import React, { Component } from 'react';
import './projects.scss';
import projects from '../../../assets/Projects'

function Projects() {
  return (
    <div className="Projects">
      <div className="projects-content">
        <h2>Projects</h2>

        <ProjectItem
          title={'Marathon.'}
          description={'A social goal-tracking app. Keep yourself and others accountable and achieve your dream goals with your self-created community supporting your entire journey.'}
          type={'SD Hacks 2022 Winner'}
          image={projects.Marathon}
          link={'https://devpost.com/software/marathon-gsz8to'}
          skills={['JavaScipt', 'HTML', 'CSS', 'React', 'Flask', 'MongoDB']}
        />

        <ProjectItem
          title={'Annota'}
          description={'A platform to learn, understand, and perform the qualitative research process through collaborative hands-on experience.'}
          type={'The Tech4Good Lab'}
          image={projects.Annota}
          link={'https://tech4good.soe.ucsc.edu/#/'}
          skills={['TypeScript', 'HTML', 'CSS', 'Angular', 'NgRx', 'Firebase']}
        />

        <ProjectItem
          title={'Gratitude'}
          description={'The platform for creating collective thank you cards. Send collective thank you card decks to express gratitude and give back to your community.'}
          type={'The Tech4Good Lab'}
          image={projects.Gratitude}
          link={'https://tech4good.soe.ucsc.edu/#/'}
          skills={['TypeScript', 'HTML', 'CSS', 'Angular', 'NgRx', 'Firebase']}
        />

        <ProjectItem
          title={'Who Would Win?'}
          description={'A League of Legends player statistics comparison web app. Compare two summoners to find who is more likely to win in a match. Uses Riot API!'}
          type={'Passion Project'}
          image={projects.WhoWouldWin}
          link={'https://github.com/bdhmin/WhoWouldWin'}
          skills={['Javascript', 'HTML', 'CSS', 'React', 'Express']}
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
              this.props.skills.map((skill) => <div className='skill'>{skill}</div>)
            }
          </div>
        </div>
      </a>
    )
  }
}

export default Projects