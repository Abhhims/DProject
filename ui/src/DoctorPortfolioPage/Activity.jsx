import { Box, Button, Stack, Typography } from '@mui/material';
import React, { useRef, useState } from 'react';
import youtube from "./youtubeimg.png"
import skills from "./skillsimg.png"
import notification from "./notificationimg.png"
import location from "./locationimg.png"
import twitter from "./twitterimg.png"
import education from './education.png'
import CustomCard2 from './CardType2';
import HospitalModal from './HospitalModal';

const Activity = (  {pathClick, setPathClick} ) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
   
    const content=[{img:youtube,title:'YouTube'},{img:twitter,title:'Twitter'},{img:skills,title:'Advanced skills'},{img:education,title:'Continued Medical education'},{img:location,title:'List of hospitals available'},{img:notification,title:'Notifications'}]
    return (
        <div style={{backgroundColor: 'rgba(241, 251, 255, 1)',width:'100%',display:'flex',alignItems:'center',justifyContent:'center',boxSizing:'border-box'}}>
            <Box
                sx={{
                    padding:{ xs:'20px 16px',md:'20px 30px',lg:'20px 45px'},
                    height: 'auto',
                    maxWidth:'1440px',
                    boxSizing:'border-box',
                    width:'100%'
                    
                }}
                id={'Activity'}
            >
                {/* Header Section */}
                <Stack direction="row" alignItems={'center'} justifyContent={'space-between'} style={{ marginTop: '80px' }}>
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
  className="no-scrollbar"
  sx={{
    display: 'flex',
    flexWrap: 'wrap', // Allow wrapping for smaller screens
    width: '100%',
    margin: '0 auto',
    justifyContent: { xs: 'center', lg: 'center', md: 'center' },
    gap: 0, // Spacing between cards
    scrollBehavior: 'smooth', // Smooth scrolling
    mt: 4,
    pb: 2,
  }}
>
  {content.map((e, i) => (
    <CustomCard2   pathClick={pathClick} setPathClick={setPathClick} handleOpen={handleOpen} key={i} img={e.img} title={e.title} index={i} />
  ))}
</Box>
            </Box>
            <HospitalModal handleClose={handleClose} open={open}></HospitalModal>

        </div>
    );
};


export default Activity