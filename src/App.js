import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import components
import Header from './components/Header';
import Footer from './components/Footer';

// import pages
import Home from './pages/Home';
import About from './pages/About';
import Works from './pages/Works';
import Contact from './pages/Contact';

function App() {
  return (
    <Router basename='ti-22'>
      <div className='container p-2 mx-auto relative background-dark text-white'>
        <div className='p-2 md:p-3'>
          <Header />
        </div>
        <div className='container p-4'>
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/about"
              element={<About />}
            />
            <Route
              path="/works"
              element={<Works />}
            />
            <Route
              path='/contact'
              element={<Contact />}
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
