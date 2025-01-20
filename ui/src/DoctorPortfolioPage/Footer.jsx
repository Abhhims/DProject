import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import footerlogo from "./footerlogo.png"
import x from "./x.png"
import f from "./f.png"
import i from "./i.png"
import y from "./y.png"


const Footer = () => {
  return (
    <footer style={{ width: '100%' }}>
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'black',
        padding: { xs: '10px 20px', sm: '10px 30px', md: '10px 60px', lg: '10px 80px' },
        // flexDirection: { xs: 'column', md: 'row' },
      }}
    >
      {/* Logo */}
      <Stack
        sx={{
          display: { xs: 'none', md: 'block' },
          mb: { xs: 2, md: 0 }, // Margin for small screens
        }}
      >
        <a href="#Home">
          <img
            src={footerlogo}
            style={{ maxHeight: '70px', height: 'auto' }}
            alt="logo"
          />
        </a>
      </Stack>

      {/* Copyright */}
      <Typography
        sx={{
          color: 'white',
          fontSize: { xs: '12px', sm: '14px', md: '16px', lg: '20px' },
          textAlign: { xs: 'center', md: 'left' },
          mb: { xs: 0, md: 0 }, // Margin for small screens
        }}
      >
       @ Copyright © 2024
      </Typography>

      {/* Social Icons */}
      <Stack
        direction="row"
        spacing={2}
        sx={{
          justifyContent: { xs: 'center', md: 'flex-start' },
        }}
      >
        <a
          href="https://x.com/konkodyprakash?s=08"
          target="_blank"
          rel="noreferrer"
        >
          <img src={x} alt="X" style={{ width: 24, height: 24 }} />
        </a>
        <a href="#Home">
          <img src={f} alt="Facebook" style={{ width: 24, height: 24 }} />
        </a>
        <a href="#Home">
          <img src={i} alt="Instagram" style={{ width: 24, height: 24 }} />
        </a>
        <a
          href="https://youtube.com/@konkodyprakash?si=tN9HUh28IlE-DW1b"
          target="_blank"
          rel="noreferrer"
        >
          <img src={y} alt="YouTube" style={{ width: 24, height: 24 }} />
        </a>
      </Stack>
    </Box>
  </footer>
  )
}

export default Footer