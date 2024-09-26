import React, { Component } from 'react';
import './projects.scss';
import { projects } from '../../../assets/projects'

function Projects() {
  return (
    <div className="Projects">
      <div className="projects-content">
        <h2>Past Projects</h2>

        {/* <ProjectItem
          title={'Sensecape'}
          description={'Multilevel information exploration and sensemaking powered by GPT-4. Externalize your natural exploration path as you dive into topics.'}
          type={'Creativity Lab'}
          image={projects.Sensecape}
          link={'https://creativity.ucsd.edu/ai'}
          skills={[]}
        /> */}

        <ProjectItem
          title={'Marathon'}
          description={'A social goal-tracking app. Keep yourself and others accountable and achieve your dream goals with your self-created community supporting your entire journey.'}
          award={'big'}
          type={'SD Hacks 2022 Winner'}
          image={projects.Marathon}
          link={'https://devpost.com/software/marathon-gsz8to'}
        />

        <ProjectItem
          title={'Maintain'}
          description={'Date-based task-manager. Maintain steady productivity with tasks that last until you complete them and habits that reappear each day.'}
          type={'Personal Project'}
          image={projects.Maintain}
          link={'https://github.com/bdhmin/Maintain'}
        />

        <ProjectItem
          title={'Annota'}
          description={'A platform to learn, understand, and perform the qualitative research process through collaborative hands-on experience.'}
          type={'Tech4Good Lab'}
          image={projects.Annota}
          link={'https://tech4good.soe.ucsc.edu/#/'}
        />

        <ProjectItem
          title={'Gratitude'}
          description={'The platform for creating collective thank you cards. Send collective thank you card decks to express gratitude and give back to your community.'}
          type={'Tech4Good Lab'}
          image={projects.Gratitude}
          link={'https://gratitude-ucsc.web.app/#/'}
        />

        {/* <ProjectItem
          title={'Who Would Win?'}
          description={'A League of Legends player statistics comparison web app. Compare two summoners to find who is more likely to win in a match. Uses Riot API.'}
          type={'Personal Project'}
          image={projects.WhoWouldWin}
          link={'https://github.com/bdhmin/WhoWouldWin'}
        /> */}
      </div>
    </div>
  )
}

class ProjectItem extends Component {
  render() {
    return (
      <a className="project-box" href={this.props.link} target="_blank" rel="noreferrer">
        <div className='preview'>
          <img src={this.props.image} alt={this.props.title}/>
        </div>
        <div className="description">
          <h3>{this.props.title}</h3>
          <h5 style={{
            color: this.props.award === 'big' ? '#f19a21' : '',
          }}>{this.props.type}</h5>
          <p>{this.props.description}</p>
        </div>
      </a>
    )
  }
}

export default Projects