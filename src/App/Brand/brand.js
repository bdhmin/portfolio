import './brand.scss';
import { Link } from 'react-router-dom';

function Brand() {
  return (
    <div className="Brand">
      <Link to="/">
        <div className="Name">Bryan Min</div>
      </Link>
    </div>
  )
}

export default Brand