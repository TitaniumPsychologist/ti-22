import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import components
import Header from './components/Header';
import Footer from './components/Footer';

// import pages
import Home from './pages/Home';
import About from './pages/About';
import Works from './pages/Works';

function App() {
  return (
    <Router>
      <div className='container p-4 mx-auto relative'>
        <Header />
        <div className='container p-4'>
          <Routes>
            <Route
              path="/ti-22"
              element={<Home />}
            />
            <Route
              path="/ti-22/about"
              element={<About />}
            />
            <Route
              path="/ti-22/works"
              element={<Works />}
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
