import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import footerlogo from "./footerlogo.png"
import x from "./x.png"
import f from "./f.png"
import i from "./i.png"
import y from "./y.png"


const Footer = () => {
  return (
    <footer >
        <Box  sx={{display:'flex',alignItems:'center',justifyContent:'space-between',background:'black',padding:{xs:'10px 30px',md:'10px 80px',lg:'10px 80px'}}} >
<Stack  sx={{display:{xs:'none',md:'block',lg:'block'}}}><a href='#Home'><img src={footerlogo} style={{maxHeight:'70px',height:'auto'}} alt="logo" srcset="" /></a></Stack>
<Typography sx={{color:'white'}}>© Copyright 2024</Typography>
<Stack
direction={'row'}
spacing={2}>
  <a href="https://x.com/konkodyprakash?s=08" target='_blank' rel='noreferrer'><img src={x} alt="" srcset="" /></a>
  <a href="#Home"><img src={f} alt="" srcset="" /></a>
  <a href="#Home"><img src={i} alt="" srcset="" /></a>
  <a href="https://youtube.com/@konkodyprakash?si=tN9HUh28IlE-DW1b" target='_blank' rel="noreferrer"><img src={y} alt="" srcset="" /></a>
</Stack>
        </Box>
    </footer>
  )
}

export default Footer