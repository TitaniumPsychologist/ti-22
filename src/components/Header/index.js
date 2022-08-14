import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <header>
      <div>
          <h1>TitaniumPsychologist</h1>
        <nav>
          <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/works">
            <li>Works</li>
          </Link>
          </ul>
        </nav>
      </div>
    </header>
  )
};

export default Header;