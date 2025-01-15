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
  { id: 1, name: 'Mangala Hospital', location: 'Mangaluru', contact: '09449503512' },
  { id: 2, name: 'Srinivasa Hospital', location: 'Mangaluru', contact: '08242478586 ' },
  { id: 3, name: 'Jayasree Hospital', location: 'Mangaluru', contact: '08217026883' },
  { id: 4, name: 'SCS Hospital', location: 'Mangaluru', contact: '08242881100' },
  { id: 5, name: 'Mangalore Nursing Home', location: 'Mangaluru', contact: '08242218316' },
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
            overflow:'auto',
            scrollbarWidth:0,
            maxHeight:'90%',
            boxSizing:'border-box',
            p: {xs:3,md:'20px 30px 70px 30px',lg:'20px 30px 80px 30px'}
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
        <Card
        key={hospital.id}
        sx={{
          border: '1px solid #007BFF',
          borderRadius: '8px',
          padding: '10px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          width: '100%',
          maxWidth: '300px',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
          transition: 'transform 0.2s ease-in-out',
          '&:hover': {
            transform: 'scale(1.05)',
          },
        }}
      >
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '5px',
            width: '100%',
            padding:'0',
            paddingBottom:'0',
            '&.css-1gca02x-MuiCardContent-root:last-child':{
              paddingBottom:'0'
            }
          }}
        >
          <Typography
            variant="body1"
            fontWeight="bold"
            gutterBottom
            sx={{
              fontSize: { xs: '14px', md: '18px', lg: '20px' },
              color:'rgb(0, 81, 130)',
            }}
          >
            {hospital.name}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontSize: { xs: '12px', md: '16px', lg: '18px' } }}
          >
            {hospital.location}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginTop: '8px',
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '12px', md: '16px', lg: '18px' },
                color: '#333',
                fontWeight: 'bold',
              }}
            >
              Contact{' '} :
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: { xs: '12px', md: '16px', lg: '18px' },
                color: '#007BFF',
                textDecoration: 'underline',
                cursor: 'pointer',
              }}
              onClick={() => window.location.href = `tel:${hospital.contact}`}
            >
              {hospital.contact}
            </Typography>
          </Box>
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
