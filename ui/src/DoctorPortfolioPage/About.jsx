import React from 'react'
import bodyparts from "./bodyparts.png";
import beat from "./beat.png"
import { Typography } from '@mui/material';
const About = () => {
  return (
    <section className="specialties" id="About">
    <Typography
      sx={{ color: "rgba(17, 128, 195, 1)", fontWeight: "bold",fontSize:{xs:'16px',md:'30px',lg:'32px',marginTop:'80px'} }}
      >
     Intensivist Driven Care of The Critically Ill in Mangaluru
    </Typography>
    <Typography
      sx={{ color: "rgba(17, 128, 195, 1)",fontWeight:'400',fontSize:{xs:'14px',md:'16px',lg:'18px'},marginTop:'15px' }}
      >
     Expertise in treatment of life threatening conditions such as Respiratory Failure,
    </Typography>
    <Typography
      sx={{ color: "rgba(17, 128, 195, 1)",fontWeight:'400',fontSize:{xs:'14px',md:'16px',lg:'18px'} }}
      >
   Mechanical Ventilation ,ECMO, Cardiac Arrest, Shock, Multiple Organ Failure
    </Typography>
        <img src={beat} alt="" style={{ maxWidth: '40px', width: '100%', margin: '30px 0 20px 0' }} />
        <img src={bodyparts} alt="bodyparts" style={{ maxWidth: '700px', width: '100%', margin: '10px',marginLeft:'40px',marginRight:'40px' }} />
    </section>
  )
}

export default About