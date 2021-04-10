import './h2utechnologies.scss'
import H2UHome from '../../../assets/H2U/Home.png';
import H2UAbout from '../../../assets/H2U/About.png';

function H2UTechnologiesPreview() {
  return (
    <div className="H2UTechnologiesPreview">
      <div className="Content">
        <div className="Text">
          <div className="Date">August 2020</div>
          <div className="Title">H2U Technologies Website</div>
          <div className="Subtitle">A design that empowers its values through colors and lines.</div>
        </div>

        {/* H2U Technologies */}
        <div className="Image">
          <div className="H2UImage">
            <div className="H2UHome">
              <img src={H2UHome} alt="H2U Home" draggable="false" />
            </div>
            <div className="H2UAbout">
              <img src={H2UAbout} alt="H2U About" draggable="false" />
            </div>
          </div>
        </div>
      </div>
      <div className="Types">UI/UX Design</div>
    </div>
  )
}

export default H2UTechnologiesPreview