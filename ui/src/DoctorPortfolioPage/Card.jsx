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
import Articals from "./Articals.png"
function CustomCard() {
  return (
    <Card
      sx={{
    maxWidth: {xs:'300px',lg:'400px'},
    flex: '0 0 auto', // Prevent shrinking, ensure the card takes its space
    borderRadius: 4,
    boxShadow: 3,
    overflow: 'hidden',
    m: 2,
      }}
    >
      {/* Image */}
      <CardMedia
        component="img"
        height="240"
        image={Articals} // Replace with actual image URL
        alt="Family Image"
      />

      {/* Content */}
      <CardContent>
        {/* Date and Media */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={1}
        >
          <Typography variant="body2" color="text.secondary">
            29 Feb 2024
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Media, YouTube
          </Typography>
        </Box>

        {/* Title */}
        <Typography
          variant="h6"
          fontWeight="bold"
          gutterBottom
          sx={{ color: "black" }}
        >
          Lorem Ipsum is simply dummy text
        </Typography>

        {/* Description */}
        <Typography
          variant="body2"
          color="text.secondary"
          mb={2}
          sx={{ lineHeight: "1.5" }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting dummy
          text dummy text dummy text industry.
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
  );
}

export default CustomCard;
