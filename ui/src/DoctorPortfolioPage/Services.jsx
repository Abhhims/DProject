import { Box, Button, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import serviceicon from './serviceIcon.png'
import Brain from "./brain.png"
import Braintext from "./brainText.png"
import Lungs from "./lungs.png"
import Lungstext from './lungsText.png'
import Heart from "./heart.png"
import Hearttext from "./heartText.png"
import Liver from "./liver.png"
import Livertext from "./liverText.png"
import Emergencies from "./emergency.png"
import Emergenciestext from "./emergencyText.png"
import Kidneytext from "./kidenyText.png"

const Services = () => {
    let [click, setclick] = useState('Brain')
    let CustomButton = ({ isclick, text, setclick, index }) => {
        return <Button onClick={() => setclick(index)} sx={{ padding:'5px 10px',fontSize: '14px', width: '180px', color: isclick ? "white" : 'rgba(17, 128, 195, 1)', backgroundColor: isclick ? 'rgba(17, 128, 195, 1)' : "transparent", borderRadius: '40px', display: 'flex', justifyContent: 'space-between', textTransform: 'none' }}>{text} <span style={{ padding: '5px', borderRadius: '50px', backgroundColor: isclick ? 'white' : 'rgba(17, 128, 195, 0.1)', height: '34px', width: '34px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}> <img src={serviceicon} alt="" height={'15px'} width={'15px'} srcset="" /></span></Button>
    }
    return (
        <>
            <Box sx={{ p: 2, }}  id={'Services'}>
                <Box textAlign={'center'} sx={{marginTop:'80px'}}><Typography variant='h6' sx={{ fontSize: { xs: "18px", md: '28px', lg: '32px' } }} fontWeight={'700'}>Specialty Service</Typography></Box>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center',marginTop:'30px',flexWrap:'wrap' }}>
                    <Stack spacing={{ xs: 1 }}
                        direction="column"
                        useFlexGap
                        sx={{ flexWrap: 'wrap', backgroundColor: 'rgba(242, 251, 255, 1)', padding: '20px', borderRadius: '10px',margin:'10px',display:{xs:'none',lg:'flex'},alignItems:'center',justifyContent:'center',minHeight:'380px' }}>
                        {['Brain', 'Lungs', "Heart", "Liver", 'Emergencies', 'Kidney'].map((e, i) => <CustomButton key={i} index={e} isclick={click == e} text={e} setclick={setclick}></CustomButton>)}
                    </Stack>
                    <Stack spacing={{ xs: 3 }}
                     direction="row"
                     className='no-scrollbar'
                        sx={{ padding: '20px', borderRadius: '10px',margin:'10px',display:{xs:'flex',lg:'none'},
                            width: '100%',
                            overflowX: 'auto', // Enables smooth scrolling
                            gap: 0, // Spacing between cards
                            scrollBehavior: 'smooth', // Smooth scrolling
                            mt: 4,
                            justifyContent:{xs:'start',md:'center',lg:'center'},
                            pb: 2,
                            flexWrap: 'nowrap', // Prevent wrapping to next row
                            
                        }}>
                        {['Brain', 'Lungs', "Heart", "Liver", 'Emergencies', 'Kidney'].map((e, i) =><Button onClick={()=>setclick(e)}  sx={{border:click==e?"none":'1px solid rgba(17, 128, 195, 1)',borderRadius:'50px',padding:'10px 20px',minWidth:'auto',width:'auto',color:click==e?"white":'rgba(17, 128, 195, 1)',backgroundColor:click==e?"rgba(17, 128, 195, 1)":'white'}}>{e}</Button>)}
                    </Stack>
                    <Stack spacing={{ xs: 2, }}
                        direction="row"
                        useFlexGap
                        sx={{ flexWrap: 'wrap', border: '1px solid rgba(17, 128, 195, 1)', padding: '10px', borderRadius: '10px',margin:'10px' }}>
                        <Stack sx={{display:{xs:'none',md:'block',lg:'block'}}} >
                            <img  src={click=="Brain"?Brain:click=="Lungs"?Lungs:click=='Heart'?Heart:click=='Liver'?Liver:click=='Emergencies'?Emergencies:click=='Kidney'?Liver:Brain} width={'300px'} height={'380px'} alt="" srcset="" />
                        </Stack>
                        <Stack sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                            <img src={click=="Brain"?Braintext:click=="Lungs"?Lungstext:click=='Heart'?Hearttext:click=='Liver'?Livertext:click=='Emergencies'?Emergenciestext:click=='Kidney'?Kidneytext:Braintext} style={{maxHeight:'380px',maxWidth:'300px'}}  alt="" srcset="" />
                        </Stack>
                    </Stack>
                </Box>
            </Box>
        </>
    )
}

export default Services