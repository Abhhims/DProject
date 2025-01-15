import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import DoctorPortfolio from './DoctorPortfolioPage/DoctorPortfolio';
import Header from './DoctorPortfolioPage/Header';
import Footer from './DoctorPortfolioPage/Footer';
import Latestactivity from './DoctorPortfolioPage/Latestactivity';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', }}>
      <div style={{ width: '100%', maxWidth: '1440px' }}>
      <Header></Header>
        <Routes>
          <Route path="/" element={<DoctorPortfolio />} />
          <Route path="/activity" element={<Latestactivity />} />
        </Routes>
        <Footer></Footer>
        </div>
      </div>
    </Router>
  );
}

export default App;
