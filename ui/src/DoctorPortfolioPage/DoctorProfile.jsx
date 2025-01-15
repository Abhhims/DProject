import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import person from "./person.png";
const DoctorProfile = () => {
  return (
    <Box
      sx={{
        marginTop: { xs: "0px", md: "0", lg: "-90px" },
        display: "flex",
        justifyContent: { xs: "start", md: "start", lg: "space-between" },
        alignItems: "center",
        // height: { xs: "100vh", sm: "100vh" },
        maxHeight: "650px",
        objectFit: "cover",
        padding: { xs: "5px 12px", sm: "0px 40px", md: "50px" },
        flexDirection: { xs: "column", lg: "row" },
        textAlign: { xs: "center", lg: "left" },
      }}
      className="profileMain"
      id={"Home"}
    >
      {/* Left Section - Doctor Details */}
      <Box sx={{ maxWidth: { lg: "50%" }, mb: { xs: 3, lg: 0 } }}>
        <Typography
          variant="h6"
          sx={{
            fontSize: { xs: "35px", sm: "40px", md: "50px" },
            fontFamily: "'Mollie Glaston', cursive",
            fontWeight: 100,
            color: "rgba(255, 104, 76, 1)",
          }}
        >
          Dr Jayaprakash
        </Typography>

        <Typography
          variant="h6"
          sx={{
            color: "#000",
            fontWeight: 400,
            fontSize: { xs: "14px", sm: "16px", md: "20px" },
          }}
        >
          MBBS, MD(Med), DM | Director, Hitaayu Critical Care LLP
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: "#007bff",
            fontWeight: 400,
            mt: 2,
            fontSize: { xs: "14px", sm: "16px", md: "20px" },
          }}
        >
          Consultant Intensivist | Professor (Critical Care)
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: "#007bff",
            mb: 2,
            fontSize: { xs: "14px", sm: "16px", md: "20px" },
          }}
        >
          SIMS and RC, Mangaluru
        </Typography>

        {/* Contact Buttons */}
        <Box
          sx={{
            display: "flex",
            gap: 5,
            justifyContent: { xs: "center", lg: "flex-start" },
            mb: 2,
          }}
        >
          <Button
            variant="contained"
            startIcon={
              <div
                style={{
                  padding: "5px",
                  backgroundColor: "rgba(214, 243, 255, 1)",
                  borderRadius: "50px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <PhoneIcon />
              </div>
            }
            href="tel:+919867768221"
            sx={{
              backgroundColor: "#ffffff",
              color: "#007bff",
              borderRadius: "50px",
              boxShadow: "0px 4px 4px rgba(86, 167, 209, 0.16)",
              "&:hover": {
                backgroundColor: "rgb(94, 168, 213)",
                color: "black",
              },
              padding: "6px 10px",
              fontSize: { xs: "14px", sm: "16px", md: "22px" },
            }}
          >
            +91 9867768221
          </Button>
          <Button
            variant="contained"
            startIcon={
              <div
                style={{
                  padding: "5px",
                  backgroundColor: "rgba(214, 243, 255, 1)",
                  borderRadius: "50px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <WhatsAppIcon />
              </div>
            }
            href="tel:+919449818221"
            sx={{
              backgroundColor: "#ffffff",
              color: "#007bff",
              borderRadius: "50px",
              boxShadow: "0px 4px 4px rgba(86, 167, 209, 0.16)",
              "&:hover": {
                backgroundColor: "rgb(94, 168, 213)",
                color: "black",
              },
              padding: "6px 10px",
              fontSize: { xs: "14px", sm: "16px", md: "22px" },
            }}
          >
            +91 9449818221
          </Button>
        </Box>

        <Typography
          variant="h5"
          sx={{
            fontSize: { xs: "18px", sm: "24px" },
            color: "#000",
            mt: 2,
          }}
        >
          <strong style={{ color: "rgba(0, 81, 130, 1)", fontWeight: 700 }}>
            15+ years
          </strong>{" "}
          Experience
        </Typography>
      </Box>

      {/* Right Section - Doctor Image */}
      <Grid
        item
        xs={12}
        lg={6}
        sx={{ textAlign: "center", position: "relative" }}
      >
        <Box
          component="img"
          src={person}
          alt="Dr Jayaprakash"
          sx={{
            width: "100%",
            maxWidth: { xs: "300px", md: "350px", lg: "400px" },
            height: "auto",
          }}
        />
      </Grid>
    </Box>
  );
};

export default DoctorProfile;
