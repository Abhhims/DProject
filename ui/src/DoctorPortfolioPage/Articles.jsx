import { Box, Button, Stack, Typography } from '@mui/material';
import React, { useRef } from 'react';
import Ricon from "./Ricon.png"; // Right Arrow Icon
import Licon from "./Licon.png"; // Left Arrow Icon
import CustomCard from './Card';

const Articles = () => {
    const scrollContainerRef = useRef(null); // Reference for the scrollable container

    // Scroll handler for left and right buttons
    const handleScroll = (direction) => {
        const scrollContainer = scrollContainerRef.current;
        const scrollAmount = 300; // Adjust the scroll distance
        if (direction === 'left') {
            scrollContainer.scrollLeft -= scrollAmount;
        } else {
            scrollContainer.scrollLeft += scrollAmount;
        }
    };

    return (
        <>
            <Box
                sx={{
                    padding:{ xs:'20px 16px',md:'20px 30px',lg:'20px 45px'},
                    height: 'auto',
                    backgroundColor: 'rgba(241, 251, 255, 1)',
                }}
                id={'Articles'}
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
                    <Stack direction="row" spacing={2}>
                        {/* Left Button */}
                        <Button
                            onClick={() => handleScroll('left')}
                            sx={{ border: '1px solid rgba(21, 134, 84, 1)', padding: '8px 0px' }}
                        >
                            <img src={Ricon}  style={{width:'100%',maxWidth:'14px'}} alt="Right Arrow" />
                        </Button>

                        {/* Right Button */}
                        <Button
                            onClick={() => handleScroll('right')}
                            sx={{ border: '1px solid rgba(21, 134, 84, 1)', padding: '8px 0px',width:{xs:'30px',lg:'40px'} }}
                        >
                            <img src={Licon} alt="Left Arrow"  style={{width:'100%',maxWidth:'14px'}} />
                        </Button>
                    </Stack>
                </Stack>
                {/* Scrollable Container */}
                <Box
                className='no-scrollbar'
                    ref={scrollContainerRef}
                    sx={{
                        display: 'flex',
                        width: '100%',
                        overflowX: 'auto', // Enables smooth scrolling
                        gap: 0, // Spacing between cards
                        scrollBehavior: 'smooth', // Smooth scrolling
                        mt: 4,
                        pb: 2,
                        flexWrap: 'nowrap', // Prevent wrapping to next row
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
                </Box>
            </Box>
        </>
    );
};

export default Articles;
