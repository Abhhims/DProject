import { Box, Button, Stack, Typography } from '@mui/material';
import React, { useRef, useState } from 'react';
import youtube from "./youtube.png"
import skills from "./skills.png"
import notification from "./notification.png"
import location from "./location.png"
import twitter from "./twitter.png"
import CustomCard2 from './CardType2';
import HospitalModal from './HospitalModal';

const Activity = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
   
    const content=[{img:youtube,title:'YouTube'},{img:twitter,title:'Twitter'},{img:skills,title:'List of advanced skills'},{img:skills,title:'List of continued Medical education'},{img:location,title:'List of hospitals available'},{img:notification,title:'Notifications'}]
    return (
        <>
            <Box
                sx={{
                    padding:{ xs:'20px 16px',md:'20px 30px',lg:'20px 45px'},
                    height: 'auto',
                    backgroundColor: 'rgba(241, 251, 255, 1)',
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
                className='no-scrollbar'
                    sx={{
                        display: 'flex',
                        width: '100%',
                        margin:'0 auto',
                        justifyContent:{xs:'center',lg:'center',md:'center'},
                        gap: 0, // Spacing between cards
                        scrollBehavior: 'smooth', // Smooth scrolling
                        mt: 4,
                        pb: 2,
                        
                        flexWrap: 'wrap', // Prevent wrapping to next row
                      }}
                >
                {content.map((e,i)=><CustomCard2 handleOpen={handleOpen} key={i} img={e.img} title={e.title} index={i} />)}
                </Box>
            </Box>
            <HospitalModal handleClose={handleClose} open={open}></HospitalModal>

        </>
    );
};


export default Activity