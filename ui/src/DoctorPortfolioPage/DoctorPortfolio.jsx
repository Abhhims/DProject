import React from 'react';
import './DoctorPortfolio.css'; // Import your CSS file
import DoctorProfile from './DoctorProfile';
import About from './About';
import Education from './Education';
import Services from './Services';
import Activity from './Activity';

const DoctorPortfolio = (  {pathClick,setPathClick}) => {
    return (
        <>
           
                <DoctorProfile></DoctorProfile>
                <About></About>
                <Education></Education>
                <Services></Services>
                <Activity pathClick={pathClick} setPathClick={setPathClick} ></Activity>
          
        </>
    );
};

export default DoctorPortfolio;
