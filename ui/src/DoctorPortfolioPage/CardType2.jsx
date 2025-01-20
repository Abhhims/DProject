import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Link,
  IconButton,
  Tooltip,
} from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { useNavigate } from "react-router-dom";

function CustomCard2({  pathClick,setPathClick, img, title, index, handleOpen }) {
  const navigate = useNavigate();
  return (
    <Link href="#Articles">
    <div 
      onClick={() => {
       
        if (title === "YouTube") {
          window.open("https://youtube.com/@konkodyprakash?si=tN9HUh28IlE-DW1b", "_blank");
        } else if (title === "Twitter") {
          window.open("https://x.com/konkodyprakash?s=08", "_blank");
        } else {
          index === 4 ? handleOpen() : setPathClick('/activity')
          index === 4 ? handleOpen() : navigate("/activity");
        }
      }}
    >
      <Card
      
        sx={{
          maxWidth: { xs: "125px", sm: "250px", md: "300px", lg: "350px" },
          height: { xs: "135px", sm: "250px", md: "300px", lg: "350px" },
          flex: "1 0 calc(33.33% - 16px)",
          paddingBottom: {sm:1,md:1,lg:1},
          borderRadius: 4,
          boxShadow: 3,
          overflow: "hidden",
          m: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Image */}
        <CardMedia
          component="img"
          sx={{
            height: { xs: "100px", sm: "150px", md: "200px", lg: "240px" },
            objectFit: "cover",
          }}
          image={img}
          alt="Family Image"
        />

        {/* Content */}
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            flexGrow: 1,
            padding:{xs:'8px',md:'16px',lg:'18px'},
            "&:last-child": {
              paddingBottom: "10px", // Ensures the last-child padding is applied
            },
          }}
        >
          {/* Title with Ellipsis */}
          <Tooltip title={title} >
            <Typography
              variant="h6"
              fontWeight="bold"
              gutterBottom
              sx={{
                color: "black",
                fontSize: { xs: "0.5rem", sm: "0.9rem", md: "1.2rem" },
                whiteSpace: "nowrap", // Prevents text wrapping
                overflow: "hidden", // Hides overflow content
                textOverflow: "ellipsis", // Adds ellipsis
              }}
            >
              {title}
            </Typography>
          </Tooltip>

          {/* More Info */}
          <Link
            href="#"
            underline="none"
            color="green"
            sx={{
              display: "flex",
              alignItems: "center",
              fontWeight: "bold",
              fontSize: { xs: "0.55rem", sm: "1rem", md: "1.2rem" },
              mt: "auto",
            }}
          >
            More Info
            <IconButton
              size="small"
              sx={{
                color: "green",
                ml: 0.5,
                backgroundColor: "rgba(0, 128, 0, 0.1)",
                fontSize: { xs: "0.6rem", sm: "1rem", md: "1.2rem" },
              }}
            >
              <ArrowOutwardIcon
                fontSize="small"
                sx={{
                  fontSize: { xs: "0.6rem", sm: "1rem", md: "1.2rem" },
                }}
              />
            </IconButton>
          </Link>
        </CardContent>
      </Card>
    </div>
    </Link>
  );
}

export default CustomCard2;
