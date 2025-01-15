import { Box, Button, Stack, Typography } from '@mui/material';
import React, { useRef } from 'react';
import Ricon from "./Ricon.png"; // Right Arrow Icon
import Licon from "./Licon.png"; // Left Arrow Icon
import CustomCard from './Card';
import { useNavigate } from 'react-router-dom';
import right from "./right.png"
const Latestactivity = () => {

const Navigate=useNavigate()
    return (
        <>
            <Box
                sx={{
                    padding:{ xs:'20px 16px',md:'20px 30px',lg:'20px 45px'},
                    height: 'auto',
                    backgroundColor: 'rgba(241, 251, 255, 1)',
                    minHeight:'85vh',
                    marginTop:'-80px'
                }}
                id={'Articles'}
            >
                {/* Header Section */}
                
                <Stack direction="row" alignItems={'center'} justifyContent={'start'} style={{ marginTop: '80px',gap:'20px' }}>
                <img onClick={()=>Navigate("/")} src={right} height={'20px'} style={{}} alt='"navigate back'/> 
                    <Typography
                        variant="h6"
                        sx={{ fontSize: { xs: '16px', md: '25px', lg: '32px' } }}
                        fontWeight={'700'}
                    >
                      Latest Articles
                    </Typography>
                    
                </Stack>
                {/* Scrollable Container */}
                <Box
                
                    sx={{
                        display: 'flex',
                        width: '100%',
                        justifyContent:'center',
                        overflowX: 'auto', // Enables smooth scrolling
                        gap: 0, // Spacing between cards
                        scrollBehavior: 'smooth', // Smooth scrolling
                        mt: 4,
                        pb: 2,
                        flexWrap: 'wrap', // Prevent wrapping to next row
                      }}
                >
                    <CustomCard />
                    <CustomCard />
                    <CustomCard />
                    <CustomCard />
                    <CustomCard />
                    <CustomCard />
                    <CustomCard />
                    <CustomCard />
                    <CustomCard />
                </Box>
            </Box>
        </>
    );
};



export default Latestactivity