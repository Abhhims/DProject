import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import DoctorPortfolio from './DoctorPortfolioPage/DoctorPortfolio';
import Header from './DoctorPortfolioPage/Header';
import Footer from './DoctorPortfolioPage/Footer';
import Latestactivity from './DoctorPortfolioPage/Latestactivity';

function App() {

  const [pathClick,setPathClick]=useState("/")

  return (
    <Router>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', }}>
      
      <Header pathClick={pathClick} setPathClick={setPathClick} ></Header>
        <Routes>
          <Route path="/" element={<DoctorPortfolio   pathClick={pathClick} setPathClick={setPathClick} />} />
          <Route path="/activity" element={<Latestactivity   setPathClick={setPathClick} />} />
          <Route path="*" element={<DoctorPortfolio  pathClick={pathClick} setPathClick={setPathClick} />} />
        </Routes>
        <Footer></Footer>
        </div>
    
    </Router>
  );
}

export default App;
