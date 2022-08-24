import { Link } from 'react-router-dom';
import social from '../../utils/social';

// import components
import Social from '../Social';

const Header = () => {
  return (
    <div>
      <h1 className='font-bold text-3xl md:text-4xl text-center drop-shadow-md'>TitaniumPsychologist</h1>
      <h2 className='text-center font-bold p-2'>Titanium Psychologist / Ti-22 / Ti22Psych</h2>
      <div className='flex justify-around p-2'>
        <div className="grid md:grid-cols-5 gap-2">
          {social.map(social => (
            <Social
              link={social.link}
              name={social.name}
            />))}
        </div>
      </div>
      <nav className='text-xl p-2'>
        <ul className='flex justify-around'>
          <li className='text-green'>
            <Link to="/">Home</Link>
          </li>
          <li className='text-green'>
            <Link to='/about'>About</Link>
          </li>
          <li className='text-green'>
            <Link to="/works">Works</Link>
          </li>
          <li className='text-green'>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header;