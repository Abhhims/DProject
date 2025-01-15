import React, { useState } from 'react';
import {
  Box,
  Modal,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import logo from "./manglogo.png"

const hospitals = [
  { id: 1, name: 'Jayasree Hospital', location: 'Mangaluru', logo: logo },
  { id: 2, name: 'Srinivasa Hospital', location: 'Mangaluru', logo: logo },
  { id: 3, name: 'Mangala Hospital', location: 'Mangaluru', logo: logo },
  { id: 4, name: 'SCS Hospital', location: 'Mangaluru', logo: logo },
  { id: 5, name: 'Mangalore Nursing Home', location: 'Mangaluru', logo: logo },
];

const HospitalModal = ({handleClose,open}) => {
 

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '80%',
            bgcolor: 'background.paper',
            borderRadius: '10px',
            boxShadow: 24,
            height:'80%',
            overflow:'auto',
            scrollbarWidth:0,
            boxSizing:'border-box',
            p: {xs:3,md:'40px 40px 100px 40px',lg:'40px 40px 100px 40px'}
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mt:2,mb:6
            }}
          >
            <Typography id="modal-title" sx={{fontSize:{xs:'16px',md:'25px',lg:'32px'},fontWeight:600}}>
              Available in following hospitals
            </Typography>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>

         <Box sx={{width:'100%',display:'flex',alignItems:'center',justifyContent:'center'}}>
             {/* Grid Layout for Hospitals */}
          <Grid container spacing={3}  sx={{maxWidth:'700px',width:'100%',justifyContent:'center',gap:2}} >
            {hospitals.map((hospital) => (
        
                <Card key={hospital.id}
                  sx={{
                    border: '1px solid #007BFF',
                    borderRadius: '8px',
                    textAlign: 'center',
                    padding: '5px',
                    display:'flex',
                    flexDirection:'row-reverse',
                    alignItems:'center',
                    width:'100%',
                    maxWidth:'300px',
                    justifyContent:'space-between'
                  }}
                >
                  <CardMedia
                    component="img"
                    height="40"
                    image={hospital.logo}
                    alt={`${hospital.name} logo`}
                    sx={{ marginBottom: '10px', objectFit: 'contain',width:'30%' }}
                  />
                  <CardContent sx={{textAlign:'start'}}>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      gutterBottom
                      sx={{fontSize:{xs:'12px',md:'18px',lg:'20px'}}}
                    >
                      {hospital.name}
                    </Typography>
                <Typography variant="body2" color="text.secondary" sx={{fontSize:{xs:'12px',md:'18px',lg:'20px'}}}>
                      {hospital.location}
                    </Typography>
                  </CardContent>
                </Card>
            ))}
          </Grid>
         </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default HospitalModal;
