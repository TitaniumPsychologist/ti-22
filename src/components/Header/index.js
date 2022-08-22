import { Link } from 'react-router-dom';

// import components
import Social from '../Social';

const Header = () => {
  return (
    <div>
      <h1 className='font-bold text-3xl md:text-4xl text-center'>TitaniumPsychologist</h1>
      <h2 className='text-center font-bold'>Titanium Psychologist / Ti-22 / Ti22Psych</h2>
      <div className='flex justify-around'>
        <Social />
      </div>
      <nav>
        <ul className='flex justify-around'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
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