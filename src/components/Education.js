import React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import SchoolIcon from '@mui/icons-material/School';

const Education = () => {
  const educationData = [
    {
      title: "INDIAN INSTITUTE OF TECHNOLOGY, JODHPUR",
      SchoolName: "B.Tech, July 2020 - May 2024",
      CGPA: "CGPA: 7.11 / 10.0",
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
      >
        <Box>
          <Box marginBottom={4}>
            <Typography
              variant="h1"
              align="center"
              marginTop="5px"
              data-aos="fade-up"
              gutterBottom
              color={'#f8fafc'}
            >
              Education
            </Typography>
            <Typography
              variant="h5"
              color={"text.secondary"}
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
                  transition: "all .25s ease-in-out",
                  "&:hover": {
                      transform: "translateY(-8px) rotateX(2deg)",
                    },
                  }}
                >
                  <Box
                    component={Card}
                    padding={3}
                    borderRadius={2}
                    width={1}
                    height={1}
                    data-aos="fade-up"
                    data-aos-delay={i * 100}
                    data-aos-offset={100}
                    data-aos-duration={600}
                    alignItems="center"
                    sx={{
                    background: "linear-gradient(145deg, rgba(15, 23, 42, 0.86), rgba(8, 17, 31, 0.76))",
                    boxShadow: "0 20px 60px rgba(2, 8, 23, 0.38)",
                    "&:hover": {
                      borderColor: "rgba(56, 189, 248, 0.38)",
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
                        sx={{
                          background: "linear-gradient(135deg, #38bdf8, #fb7185)",
                          color: "#06111f",
                        }}
                      >
                        <SchoolIcon/>
                      </Box>
                      <Typography
                        variant="h6"
                        gutterBottom
                        sx={{ fontWeight: 700 }}
                        color={'#f8fafc'}
                      >
                        {item.title}
                      </Typography>
                      <Typography color={'text.secondary'} sx={{ fontWeight: 500 }}>
                        {item.SchoolName}
                      </Typography>
                      <Typography color={'text.secondary'} sx={{ fontWeight: 500 }}>
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
