import React from 'react';
import './DoctorPortfolio.css'; // Import your CSS file
import DoctorProfile from './DoctorProfile';
import About from './About';
import Education from './Education';
import Services from './Services';
import Activity from './Activity';

const DoctorPortfolio = () => {
    return (
        <>
           
                <DoctorProfile></DoctorProfile>
                <About></About>
                <Education></Education>
                <Services></Services>
                <Activity></Activity>
          
        </>
    );
};

export default DoctorPortfolio;
