import React, { useState } from "react";
import {
  Box,
  Tab,
  Tabs,
  Typography,
  Paper,
  Avatar,
  useMediaQuery,
} from "@mui/material";
import { Stack, styled } from "@mui/system";
import manlogo from "./manglogo.png";
import assistant from "./assistant.png";
import kanlogo from "./kanalogo.png";
import tatalogo from "./tatalogo.png";
import mullogo from "./mullogo.png";
import comlogo from "./commonlogo.png";
import background from "./background.png";
const StyledCard = styled(Paper)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: { xs: "start", md: "center", lg: "center" },
  border: "1px solid rgba(17, 128, 195, 1)", // Light blue border
  borderRadius: "10px",
  padding: theme.spacing(3),
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  width: "100%",
  maxWidth: "400px",
  marginBottom: "16px",
}));

const DateBadge = styled(Box)(({ theme }) => ({
  backgroundColor: "#E3F2FD", // Light blue background
  color: "rgba(34, 43, 69, 1)", // Blue text
  border:'1px solid rgba(17, 128, 195, 1)',
  borderRadius: "15px",
  padding: "2px 10px",
  fontSize: "12px",
  // fontWeight: "bold",
  marginTop: theme.spacing(1),
  display: "inline-block",
}));

const RoleText = styled(Typography)({
  fontWeight: "bold",
  fontSize: "14px",
});

const HospitalText = styled(Typography)({
  fontSize: "12px",
  color: "#6D6D6D", // Gray text
});

function Education() {
  const [tabValue, setTabValue] = useState(0);
  const isMobile = useMediaQuery("(max-width:600px)");

  const handleTabChange = (event, newValue) => {
    console.log(newValue, "kajksannqwnqw22");
    setTabValue(newValue);
  };

  return (<div className="profileMain" style={{width:'100%',display:'flex',alignItems:'center',justifyContent:'center',zIndex:1}}>
   <div className="education_main" style={{width:'100%',display:'flex',alignItems:'center',justifyContent:'center',zIndex:2}}>
    
    <Box
      sx={{ p: 2, position: "relative",width:'100%',maxWidth:'1440px', }}
      
      id={"Education"}
    >
      {/* Tabs */}
      
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mb: 3,
          alignItems: "center",
        }}
      >
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          textColor={tabValue === 0 ? "white" : "rgba(17, 128, 195, 1)"}
          sx={{ marginTop: "80px" }}
          TabIndicatorProps={{ style: { display: "none" } }}
        >
          <Tab
            label="Experience"
            sx={{
              borderRadius: "50px",
              backgroundColor:
                tabValue === 0 ? "rgba(255, 104, 76, 1)" : "white",
              border:
                tabValue === 0 ? "none" : "1px solid rgba(17, 128, 195, 1)",
              color: tabValue === 0 ? "white" : "rgba(17, 128, 195, 1)",
              textTransform: "none",
              fontSize: isMobile ? "14px" : "18px",
              marginRight: "15px",
            }}
          />
          <Tab
            label="Education"
            sx={{
              borderRadius: "50px",
              backgroundColor:
                tabValue === 1 ? "rgba(255, 104, 76, 1)" : "white",
              border:
                tabValue === 1 ? "none" : "1px solid rgba(17, 128, 195, 1)",
              textTransform: "none",
              fontSize: isMobile ? "14px" : "18px",
              color: tabValue === 1 ? "white" : "rgba(17, 128, 195, 1)",
              fontWeight: tabValue === 1 ? "bold" : "normal",
              marginLeft: "15px",
            }}
          />
        </Tabs>
      </Box>
      <Box textAlign={"center"} mb={4}>
        <Typography>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry
        </Typography>
      </Box>
      {tabValue === 0 && (
        <div class="timeline-section">
          <div class="container">
            <div class="card">
              <div class="info">
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    justifyContent: "end",
                  }}
                >
                  <StyledCard >
                    <Box>
                      <RoleText>{"Lecturer,  Critical Care"}</RoleText>
                      <HospitalText>{`St. John's Medical College, Bangalore`}</HospitalText>
                      <DateBadge>{"April 2008 - June 2009"}</DateBadge>
                    </Box>
                    <Avatar
                      src={comlogo}
                      alt="Hospital Logo"
                      sx={{ width: 60, height: 60 }}
                    />
                  </StyledCard>
                </Box>
              </div>
            </div>
            <div class="card">
              <div class="info">
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    justifyContent: "start",
                  }}
                >
                  <StyledCard style={{ justifyContent: "start",gap:10}}>
                  <Avatar
                      src={comlogo}
                      alt="Hospital Logo"
                      sx={{ width: 60, height: 60 }}
                    />
                    <Box>
                      <RoleText>
                        {"Senior Resident,  Emergency Medicine"}
                      </RoleText>
                      <HospitalText>{`St John's Medical College,  Bangalore `}</HospitalText>
                      <DateBadge>{"August 2009 - December 2011"}</DateBadge>
                    </Box>
                   
                  </StyledCard>
                </Box>
              </div>
            </div>
            <div class="card">
              <div class="info">
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    justifyContent: "end",
                  }}
                >
                  <StyledCard>
                    <Box>
                      <RoleText>{"Additional Experience"}</RoleText>
                      <HospitalText>{`Worked in multiple ICUs (Eg, Mallige Hospital,  HCG and Bangalore Institute of Oncology)`}</HospitalText>
                      {/* <DateBadge>{'Aug 2017 - July 2018'}</DateBadge> */}
                    </Box>
                    <Avatar
                      src={mullogo}
                      alt="Hospital Logo"
                      sx={{ width: 40, height: 40 }}
                    />
                  </StyledCard>
                </Box>
              </div>
            </div>
            <div class="card">
              <div class="info">
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    justifyContent: "start",
                  }}
                >
                  <StyledCard  style={{ justifyContent: "start",gap:10}}>
                  <Avatar
                      src={comlogo}
                      alt="Hospital Logo"
                      sx={{ width: 60, height: 60 }}
                    />
                    <Box>
                      <RoleText>{" Assistant Professor"}</RoleText>
                      <HospitalText>{`Emergency Medicine, St John's Medical College, Bangalore `}</HospitalText>
                      <DateBadge>{"Jan 2012 - June 2014"}</DateBadge>
                    </Box>
                   
                  </StyledCard>
                </Box>
              </div>
            </div>
            <div class="card">
              <div class="info">
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    justifyContent: "end",
                  }}
                >
                  <StyledCard>
                    <Box>
                      <RoleText>{"DM Resident"}</RoleText>
                      <HospitalText>{`Tata Memorial Hospital, Mumbai`}</HospitalText>
                      <DateBadge>{"August 2014 - July 2017"}</DateBadge>
                    </Box>
                    <Avatar
                      src={tatalogo}
                      alt="Hospital Logo"
                      sx={{ width: 55, height: 55 }}
                    />
                  </StyledCard>
                </Box>
              </div>
            </div>
            <div class="card">
              <div class="info">
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    justifyContent: "start",
                  }}
                >
                  <StyledCard  style={{ justifyContent: "start",gap:10}}>
                  <Avatar
                      src={tatalogo}
                      alt="Hospital Logo"
                      sx={{ width: 55, height: 55 }}
                    />
                    <Box>
                      <RoleText>{"Specialist Senior Resident"}</RoleText>
                      <HospitalText>{`Tata Memorial Hospital,  Mumbai`}</HospitalText>
                      <DateBadge>{"August 2017 - March 2018"}</DateBadge>
                    </Box>
                  </StyledCard>
                </Box>
              </div>
            </div>
            <div class="card">
              <div class="info">
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    justifyContent: "end",
                  }}
                >
                  <StyledCard>
                    <Box>
                      <RoleText>
                        {"Assistant Professor, Critical Care"}
                      </RoleText>
                      <HospitalText>{`Kanachur Institute of Medical Sciences,  Mangalore `}</HospitalText>
                      <DateBadge>{"September 2018 - October 2020"}</DateBadge>
                    </Box>
                    <Avatar
                      src={assistant}
                      alt="Hospital Logo"
                      sx={{ width: 45, height: 45 }}
                    />
                  </StyledCard>
                </Box>
              </div>
            </div>
            <div class="card">
              <div class="info">
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    justifyContent: "start",
                  }}
                >
                  <StyledCard  style={{ justifyContent: "start",gap:10}}>
                  <Avatar
                      src={comlogo}
                      alt="Hospital Logo"
                      sx={{ width: 60, height: 60 }}
                    />
                    <Box>
                      <RoleText>
                        {"Associate Professor, Critical Care"}
                      </RoleText>
                      <HospitalText>{`Srinivasa Institute of Medical Sciences,  Mangalore`}</HospitalText>
                      <DateBadge>{"December 2020 - December 2023"}</DateBadge>
                    </Box>
                    
                  </StyledCard>
                </Box>
              </div>
            </div>
            <div class="card">
              <div class="info">
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    justifyContent: "end",
                  }}
                >
                  <StyledCard>
                    <Box>
                      <RoleText>{"Professor,  Critical Care"}</RoleText>
                      <HospitalText>{`Srinivasa Institute of Medical Sciences,  Mangalore`}</HospitalText>
                      <DateBadge>{"December 2023 - till date"}</DateBadge>
                    </Box>
                    <Avatar
                      src={comlogo}
                      alt="Hospital Logo"
                      sx={{ width: 60, height: 60 }}
                    />
                  </StyledCard>
                </Box>
              </div>
            </div>

            <div class="card">
              <div class="info">
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    justifyContent: "start",
                  }}
                >
                  <StyledCard  style={{ justifyContent: "start",gap:10}}>
                  <Avatar
                      src={manlogo}
                      alt="Hospital Logo"
                      sx={{ width: 50, height: 50 }}
                    />
                    <Box>
                      <RoleText>
                        {"Consultant Intensivist,  Mangalore"}
                      </RoleText>
                      <HospitalText>{`Mangalore,  Mangala Hospital,  Jayasree Hospital, Mangalore Nursing Home and other Private Hospital`}</HospitalText>
                      <DateBadge>{"on call"}</DateBadge>
                    </Box>
                   
                  </StyledCard>
                </Box>
              </div>
            </div>
          </div>
        </div>
      )}

      {tabValue == 1 && (
        <Box
          sx={{
            display: "flex",
            gap: 3,
            justifyContent: "center",
           
            flexWrap: "wrap",
            maxWidth: "1440px",
            width: "100%",
          }}
        >
          <Stack
            maxWidth={"300px"}
            padding={"20px 50px 30px 50px"}
            sx={{ backgroundColor: "white" }}
          >
            <Avatar
              src={tatalogo}
              alt="Hospital Logo"
              sx={{ width: 65, height:65 }}
              mt={1}
              mb={1}
            />
            <Typography mt={1} mb={1} fontSize={"20px"} fontWeight={"700"}>
              DM
            </Typography>
            <Typography  width={'200px'} mt={1} mb={1} fontSize={"20px"} fontWeight={"400"}>
            Tata Memorial Centre, Mumbai
            </Typography>
            <Stack
              mt={1}
              mb={1}
              sx={{
                padding: "2px 12px 2px 12px",
                borderRadius: "50px",
                backgroundColor: "rgba(18, 75, 241, 0.1)",
                maxWidth: "40px",
              }}
            >
              2017
            </Stack>
            <Typography mt={1} mb={1}>
              TMC is premier cancer institute with renowned Critical Care
              faculty, started first DM Critical Care course in India. Got
              training under stalwarts such as JV Divatia, AP Kulkarni, Vijaya
              Patil and Sheila Myatra. Belong to 3rd batch of DM Critical Care
              in India.
            </Typography>
          </Stack>
          <Stack
            maxWidth={"300px"}
            padding={"20px 50px 30px 50px"}
            sx={{ backgroundColor: "white" }}
          >
            <Avatar
              src={mullogo}
              alt="Hospital Logo"
              sx={{ width: 60, height: 60 }}
              mt={1}
              mb={1}
            />
            <Typography mt={1} mb={1} fontSize={"20px"} fontWeight={"700"}>
              MD Medicine
            </Typography>
            <Typography width='150px' mt={1} mb={1} fontSize={"20px"} fontWeight={"400"}>
              Govt. KMC Chennai
            </Typography>
            <Stack
              mt={1}
              mb={1}
              sx={{
                padding: "2px 12px 2px 12px",
                borderRadius: "50px",
                backgroundColor: "rgba(18, 75, 241, 0.1)",
                maxWidth: "40px",
              }}
            >
              2008
            </Stack>
            <Typography mt={1} mb={1}>
              Firm foundation to medical career, thorough exposure and
              experience in Clinical Medicine obtained in MBBS and MD courses.
            </Typography>
          </Stack>
          <Stack
            maxWidth={"300px"}
            padding={"20px 50px 30px 50px"}
            sx={{ backgroundColor: "white" }}
          >
            <Avatar
              src={comlogo}
              alt="Hospital Logo"
              sx={{ width: 70, height: 75,marginTop:'-10px' }}
              mt={1}
              mb={1}
            />
            <Typography mt={1} mb={1} fontSize={"20px"} fontWeight={"700"}>
              MBBS
            </Typography>
            <Typography mt={1} mb={1} fontSize={"20px"} fontWeight={"400"}>
              St John's Medical College Bangalore
            </Typography>
            <Typography
              mt={1}
              mb={1}
              sx={{
                padding: "2px 12px 2px 12px",
                borderRadius: "50px",
                backgroundColor: "rgba(18, 75, 241, 0.1)",
                maxWidth: "40px",
              }}
            >
              2002
            </Typography>
            <Typography mt={1} mb={1}>
              Firm foundation to medical career, thorough exposure and
              experience in Clinical Medicine obtained in MBBS and MD courses.
            </Typography>
          </Stack>
        </Box>
      )}
    </Box>
    </div> 
    </div>
  );
}

export default Education;
