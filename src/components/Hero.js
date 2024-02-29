import React, { useState, useEffect } from "react";
import axios from "axios";
import AOS from "aos";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import image1 from "../assets/images/PFP50x70.jpg";

import HeroButtons from "./HeroButtons";

const Hero = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), { defaultMatches: true });

  const heroData = [
    {
      title: "Ayush Kumar",
      subtitle: "Full-Stack Developer",
      description: "I am a final-year B.Tech student at Indian Institute of Technology, Jodhpur and my passion lies in the world of app and website development. Crafting digital experiences through coding is my true love. ",
      image: image1,
    },
  ];

  useEffect(() => {
    AOS.init({
      once: true,
      delay: 50,
      duration: 600,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div id="home">
      <Box
        maxWidth={{ sm: 720, md: 1236 }}
        width={1}
        margin="0 auto"
        paddingX={2}
        paddingY={4}
        sx={{
          backgroundImage: `url()`,
          backgroundColor: "#212121",
        }}
      >
        {heroData.map((item, i) => (
          <Grid container key={i} spacing={4}>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                order: { xs: 2, md: 1 },
              }}
            >
              <Box data-aos={isMd ? "fade-right" : "fade-up"}>
                <Box marginBottom={2}>
                  <Typography
                    color={"#f56539"}
                    variant="h1"
                    fontWeight={700}
                    fontSize={"3.2rem"}
                    marginTop={3}
                    align="left"
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    color={"#fff"}
                    variant="h3"
                    fontWeight={700}
                    align="left"
                    marginBottom={3}
                  >
                    {item.subtitle}
                  </Typography>
                </Box>
                <Box marginBottom={3}>
                  <Typography
                    variant="h4"
                    component="p"
                    color={"#fff"}
                    align="justify"
                  >
                    {item.description}
                  </Typography>
                </Box>
                <HeroButtons />
              </Box>
            </Grid>
            <Grid
              item
              container
              alignItems="center"
              justifyContent="center"
              xs={12}
              md={6}
              sx={{ order: { xs: 1, md: 2 } }}
            >
              <Box
                sx={{
                  height: { xs: "auto", md: 1 },
                  "& img": {
                    objectFit: "cover",
                  },
                  "& .lazy-load-image-loaded": {
                    height: 1,
                    width: 1,
                  },
                }}
              >
                <img
                  src={item.image}
                  alt="Background Image"
                  height={"80%"} // Adjust the height as needed
                  width={"80%"} // Adjust the width as needed
                  style={{ borderRadius: "8px" }} // Add styling if needed
                />
              </Box>
            </Grid>
          </Grid>
        ))}
        <Divider sx={{ mt: 6, color: "#f56539" }} />
      </Box>
    </div>
  );
};

export default Hero;


