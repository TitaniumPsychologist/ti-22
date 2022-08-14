import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import components
import Header from './components/Header';
import Social from './components/Social';

// import pages
import Home from './pages/Home';
import Works from './pages/Works';

function App() {
  return (
    <Router>
      <Header />
      <Social />
      <div>
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/works'
            element={<Works />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
