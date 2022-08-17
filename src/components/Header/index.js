import { Link } from 'react-router-dom';

// import components
import Social from '../Social';

const Header = () => {
  return (
    <div>
      <h1 className='font-bold text-4xl text-center'>TitaniumPsychologist</h1>
      <h2 className='text-center font-bold'>Titanium Psychologist / Ti-22 / Ti22Psych</h2>
      <Social />
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/works">Works</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header;