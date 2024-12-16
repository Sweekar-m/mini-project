// Hero.jsx
import { Box, Typography } from "@mui/material";
import React from "react";
import AboutUs from "../components/AboutUs";

export default function Hero() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "90vh",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Box
        sx={{
            width: "100%",
  height: "900px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  textAlign: "center",
  backgroundImage: "url(https://images.alphacoders.com/135/1352212.png)",
  backgroundSize: "cover",
  backgroundPosition: "center", // Moves the background image 20px down
  backgroundRepeat: "no-repeat"
        }}
      >
        <Typography
          sx={{
            fontWeight: "900",
      fontSize: { xs: "50px", sm: "80px",md:"70px" },
      textTransform: "uppercase",
      color: "#000000b8",
      position: 'absolute', // Use absolute positioning for the text
      top: '30%', // Adjust this to position the text vertically (from top)
      left: '45%', // Adjust this to position the text horizontally (from left)
      transform: 'translate(-80%, -100%)', 
          }}
          gutterBottom
        >
          Welcome to the AniVerse
        </Typography>
        <Typography
          gutterBottom
          sx={{ fontWeight: "900", fontSize: "20px", color: "#000000b8" }}
        >
          
        </Typography>
        <Typography
          gutterBottom
          sx={{ width: "80%", fontWeight: "600", color: "#000000b8" }}
        >
      
        </Typography>
        <box >
        <Typography sx={{textAlign:'left',marginLeft:'30px',
            marginRight:'850px'
        }}> 
        <AboutUs></AboutUs>
        </Typography>
        </box>
      </Box>
     
    </Box>
    
  );
}
