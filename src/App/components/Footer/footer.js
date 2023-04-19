import Socials from '../Socials/socials'
import './footer.scss'

function Footer() {
  return (
    <div className="Footer">
      <Socials />
      {/* <span className="msg">정성으로 만든</span> */}
      <span className="cp">Made by Bryan Min</span>
    </div>
  )
}

export default Footer;