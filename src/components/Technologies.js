import React, { useState, useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import Marquee from "react-fast-marquee";

const Technologies = () => {
  const theme = useTheme();
  
  const [technologies, setTechnologies] = useState([]);
  
  const fetchTechnologies = () => {
    axios.get("https://ayush-portfolio-backend.onrender.com/technologies", {
      headers: {
        "Accept": "application/json",
      }
    })
    .then(response => {
      setTechnologies(response.data);
    })
    .catch(err => console.log(err));
  };
  
  useEffect(() => {
    fetchTechnologies();
  }, []);
  
  return (
    <div id="technologies">
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
              variant="h2"
              fontWeight={1000}
              fontSize={"3.2rem"}
              marginTop="5px"
              data-aos="fade-up"
              gutterBottom
              color={'#f56539'}
              align="center"
            >
              Skills
            </Typography>
            <Typography
              variant="h4"
              align="center"
              color={"#fff"}
              data-aos="fade-up"
              marginTop={4}
              marginBottom={6}
            >
              Tech stacks I'm familiar with:
            </Typography>
          </Box>
          <Marquee      gradient={false} 
                        speed={80} 
                        pauseOnHover={true}
                        pauseOnClick={true} 
                        delay={0}
                        play={true} 
                        direction="left">
            {technologies.map((item, i)=>(
              <Card sx={{
                background: "#FAFAFA",
                backgroundColor: "#212121",
                boxShadow: '0px 0px 30px #f565394d',
                // boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.12)',
                borderRadius: '10px',
                width: '160px',
                height: '160px',
                margin: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '2rem 1rem',
                transition: '300ms ease-in-out',
                color: "#fff"
              }}>
                <img src={item.icon} style={{height: "50px", margin: "15px"}}/>
                
                {item.name}
              </Card>
            ))}
          </Marquee>
          {/* <Grid container spacing={2}>
            {technologies.map((item, i) => (
              <Grid item xs={12} md={3} key={i}>
                <Box
                  width={1}
                  height={1}
                  data-aos="fade-up"
                  data-aos-delay={100}
                  data-aos-offset={100}
                  data-aos-duration={600}
                  component={Card}
                  backgroundColor={"#f56539"}
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  boxShadow={0}
                  variant="outlined"
                  borderRadius={2}
                > 
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      transition: "all .2s ease-in-out",
                      "&:hover": {
                        transform: `translateY(-${theme.spacing(1)})`,
                      },
                    }}
                  >
                    <Box marginBottom={1}>
                      <Box
                        component={CardMedia}
                        width={60}
                        height={60}
                        marginBottom={2}
                        backgroundColor="transparent"
                        variant="rounded"
                        borderRadius={2}
                        image={item.icon}
                      />
                    </Box>
                    <Typography 
                      align="center"
                      color={theme.palette.text.primary}
                      fontWeight="bold"
                    >
                      {item.name}
                    </Typography>
                  </CardContent>
                </Box>
                
              </Grid>
              
            ))}
          </Grid> */}
        </Box>
      </Box>
      <Divider />
    </div>
  );
};

export default Technologies;