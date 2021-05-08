import './projects.scss';
import Projects from './projects'

function ProjectsPage() {
  return (
    <div className="ProjectsPage">
      
      <div className="Header">
        <div className="Text">
          <h1><i>Things I've Made</i></h1>
        </div>
        {/* <p></p> */}

        {/* Update eventually */}
        {/* <div class="ProjectType">
          All
              •   
          UI/UX Design
              •   
          Computer Science
              •   
          Engineering
        </div> */}
      </div>

      <Projects />
    </div>
  )
}

export default ProjectsPage