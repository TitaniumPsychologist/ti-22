import { Link } from 'react-router-dom';

// import components
import Social from '../Social';

const Header = () => {
  return (
    <div>
      <h1 className='font-bold text-3xl md:text-4xl text-center drop-shadow-md'>TitaniumPsychologist</h1>
      <h2 className='text-center font-bold'>Titanium Psychologist / Ti-22 / Ti22Psych</h2>
      <div className='flex justify-around'>
        <Social />
      </div>
      <nav className='text-xl'>
        <ul className='flex justify-around'>
          <li className='hover:text-slate-700'>
            <Link to="/">Home</Link>
          </li>
          <li className='hover:text-slate-700'>
            <Link to='/about'>About</Link>
          </li>
          <li className='hover:text-slate-700'>
            <Link to="/works">Works</Link>
          </li>
          <li className='hover:text-slate-700'>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header;