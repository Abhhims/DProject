import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Link,
  IconButton,
} from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { useNavigate } from "react-router-dom";

function CustomCard2({ img, title, index, handleOpen }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        if (title === "YouTube") {
          window.open("https://youtube.com/@konkodyprakash?si=tN9HUh28IlE-DW1b", "_blank");
        } else if (title === "Twitter") {
           window.open("https://x.com/konkodyprakash?s=08", "_blank");
        } else {
          index === 4 ? handleOpen() : navigate("/activity");
        }
      }}
    >
      <Card
        sx={{
          maxWidth: { xs: "300px", lg: "400px" },
          flex: "0 0 auto", // Prevent shrinking, ensure the card takes its space
          borderRadius: 4,
          boxShadow: 3,
          overflow: "hidden",
          m: 2,
        }}
      >
        {/* Image */}
        <CardMedia
          component="img"
          height="240"
          image={img} // Replace with actual image URL
          alt="Family Image"
        />

        {/* Content */}
        <CardContent>
          {/* Title */}
          <Typography
            variant="h6"
            fontWeight="bold"
            gutterBottom
            sx={{ color: "black" }}
          >
            {title}
          </Typography>

          {/* More Info */}
          <Link
            href="#"
            underline="none"
            color="green"
            sx={{ display: "flex", alignItems: "center", fontWeight: "bold" }}
          >
            More Info
            <IconButton
              size="small"
              sx={{
                color: "green",
                ml: 0.5,
                backgroundColor: "rgba(0, 128, 0, 0.1)",
              }}
            >
              <ArrowOutwardIcon fontSize="small" />
            </IconButton>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}

export default CustomCard2;
