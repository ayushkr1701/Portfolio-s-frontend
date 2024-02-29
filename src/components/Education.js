import React, { useState, useEffect } from "react";
import axios from "axios";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import { yellow } from "@mui/material/colors";
import SchoolIcon from '@mui/icons-material/School';

const Education = () => {
  const theme = useTheme();
  const [about, setAbout] = useState([]);
  const educationData = [
    {
      title: "INDIAN INSTITUTE OF TECHNOLOGY, JODHPUR",
      SchoolName: "B.Tech(2020-2024)",
      CGPA: "Current CGPA: 7.28(out of 10)",
      icon: SchoolIcon, // Use the imported school icon
    },
    {
      title: "ST. JUDES VIDYALYA, BARAUNI",
      SchoolName: "Senior School Education(2017-2019)",
      CGPA: "Marks: 463(out of 500)",
      icon: SchoolIcon, // Use the imported university icon
    },
    {
      title: "RK CHILDREN'S ACAD, BEGUSARAI",
      SchoolName: "Secondary School Education(2015-2017)",
      CGPA: "CGPA: 10(out of 10)",
      icon: SchoolIcon, // Use the imported university icon
    },
    // Add more items if needed
  ];
  
  
  return (
    <div id="education">
      <Box
        
        maxWidth={{ sm: 720, md: 1236 }}
        width={1}
        margin="0 auto"
        paddingX={2}
        paddingY={{ xs: 4, sm: 6, md: 8 }}
        sx={{
          backgroundColor: "rgb(33, 33, 33)"
        }}
      >
        <Box>
          <Box marginBottom={4}>
            <Typography
              variant="h1"
              // sx={{textSize: "1000px"}}
              align="center"
              fontWeight={1000}
              fontSize={"3.2rem"}
              marginTop="5px"
              data-aos="fade-up"
              gutterBottom
              color={'#f56539'}
            >
              Education
            </Typography>
            <Typography
              variant="h5"
              color={"#fff"}
              align="center"
              data-aos="fade-up"
              marginTop={4}
              marginBottom={6}
            >
              
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {educationData.map((item, i) => (
              <Grid item xs={12} sm={4} md={4} key={i}>
                <Box
                  display="block"
                  width={1}
                  height={1}
                  alignItems='center'
                  sx={{
                    textDecoration: "none",
                    transition: "all .2s ease-in-out",
                    "&:hover": {
                      transform: "translateY(-4px)",
                    },
                  }}
                >
                  <Box
                    component={Card}
                    padding={4}
                    borderRadius={2}
                    width={1}
                    height={1}
                    data-aos="fade-up"
                    data-aos-delay={i * 100}
                    data-aos-offset={100}
                    data-aos-duration={600}
                    variant='elevation'
                    alignItems="center"
                    sx={{backgroundColor: '#f565394d',
                    "&:hover": {
                      backgroundColor: "#f565396d",
                    },
                  }}
                  >
                    <Box 
                      display="flex" 
                      flexDirection="column"
                      
                    >
                      <Box
                        component={Avatar}
                        width={60}
                        height={50}
                        marginBottom={2}
                        // backgroundColor={theme.palette.primary.main}
                        sx={{backgroundColor: "#f56539"}}
                        color={"white"}
                      >
                        <SchoolIcon/>
                        {/* <Icon>
                          {item.icon}
                        </Icon> */}
                      </Box>
                      <Typography
                        variant="h6"
                        gutterBottom
                        sx={{ fontWeight: 700 }}
                        color={'#f56539'}
                      >
                        {item.title}
                      </Typography>
                      <Typography color={'#fff'} sx={{ fontWeight: 500 }}>
                        {item.SchoolName}
                      </Typography>
                      <Typography color={'#fff'} sx={{ fontWeight: 500 }}>
                        {item.CGPA}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
      <Divider />
    </div>
  );
};

export default Education;