import Socials from '../Socials/socials'
import './footer.scss'

function Footer() {
  return (
    <div className="Footer">
      <Socials />
      <span className="msg">정성스럽게 만든</span>
      <span className="cp">Copyright © 2021 – Bryan Min</span>
    </div>
  )
}

export default Footer;