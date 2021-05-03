import './projects.scss';
import H2UTechnologiesPreview from './H2UTechnologies/h2utechnologiesPreview';

function Projects() {
  return (
    <div className="Projects">
      {/* Soon: href="/Projects/H2UTechnologies" */}
      <a href="https://www.h2utechnologies.com" target="_blank" rel="noreferrer"><H2UTechnologiesPreview /></a>
    </div>

  )
}

export default Projects