import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import MovieDetails from './components/MovieDetails';
import './App.css';

const App = () => {
  return (
    <Router>
      <Header />
      <div className="content">
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
