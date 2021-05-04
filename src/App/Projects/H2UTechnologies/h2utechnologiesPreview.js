import './h2utechnologies.scss'
import H2UHome from '../../../assets/H2U/Home.png';
import H2UAbout from '../../../assets/H2U/About.png';

function H2UTechnologiesPreview() {
  return (
    <a className="H2UTechnologiesPreview" href="https://www.h2utechnologies.com"  target="_blank" rel="noreferrer">
      <div className="Content">
        <div className="Text">
          <div className="Date">August 2020</div>
          <div className="Title">H2U Technologies Website</div>
          <div className="Subtitle">A design that empowers values of clean energy through its lines and colors.</div>
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
    </a>
  )
}

export default H2UTechnologiesPreview