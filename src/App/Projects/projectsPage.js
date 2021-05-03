import './projects.scss';
import Projects from './projects'

function ProjectsPage() {
  return (
    <div className="ProjectsPage">
      
      <div className="ProjectsHeader">
        <h1><i>Projects</i></h1>

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