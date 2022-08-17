import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import components
import Header from './components/Header';
import Footer from './components/Footer';

// import pages
import Home from './pages/Home';
import Works from './pages/Works';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <div>
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/works"
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
