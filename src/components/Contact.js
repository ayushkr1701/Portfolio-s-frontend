import React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import EmailIcon from "@mui/icons-material/Email";
import LocationIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";

import Map from "./Map";

const Contact = () => {
  // const fetchContact = () => {
  //   axios.get("https://ayush-portfolio-backend.onrender.com/contact", {
  //     headers: {
  //       "Accept": "application/json",
  //     }
  //   })
  //   .then(response => {
  //     setContact(response.data);
  //   })
  //   .catch(error => console.log(error));
  // };
  
  // useEffect(() => {
  //   async function fetchContact(){
  //     const response= await fetch('https://ayush-portfolio-backend.onrender.com/contact');
  //     const data= await response.json();
  //     setContact(data);

  //   }
  //   fetchContact();
  // }, []);
  const contactData =[
    {name:"Ayush Kumar",
    email:'ayushkr2503@gmail.com',
    phone:"+91 9509191973",
    address: "Gurgaon, India",
    latitude: "28.4595",
    longitude: "77.0266"
  
  },
  ]
    
  return (
    <div id="contact">
      <Box 
        position="relative"
        marginBottom={15}
      >
        <Box
          maxWidth={{ sm: 720, md: 1236 }}
          width={1}
          margin="0 auto"
          paddingX={2}
          paddingY={{ xs: 4, sm: 6, md: 8 }}
          paddingBottom={10}
        >
          <Box marginBottom={4}>
            <Typography
              variant="h3"
              align="center"
              fontWeight={1000}
              marginTop="5px"
              data-aos="fade-up"
              gutterBottom
              color={'#f8fafc'}
            >
              Get in touch
            </Typography>
            <Typography
              variant="h6"
              align="center"
              color={'text.secondary'}
              data-aos="fade-up"
              marginTop={4}
              marginBottom={6}
            >
              Need help building a full-stack product, AI workflow, backend API, or cloud deployment? I would love to hear from you.
            </Typography>
          </Box>
          {contactData.map((item,i) => (
            <Grid container spacing={3} key={i}>
              <Grid item md={3} xs={12}>
                <Box marginTop={3} marginBottom={2} justifyContent="center">
                  <Typography 
                    variant="h4" 
                    sx={{ fontWeight: 600, color: "#f8fafc" }} 
                    gutterBottom
                    alignItems="center"
                  >
                    Contact details
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                >
                  <Box
                    component={ListItem}
                    disableGutters
                    width="auto"
                    padding={0}
                    marginRight={10}
                    marginBottom={3}
                  >
                    <Box
                      component={ListItemAvatar}
                      minWidth="auto !important"
                      marginRight={2}
                    >
                      <Box
                        component={Avatar}
                        width={50}
                        height={50}
                        sx={{
                          background: "linear-gradient(135deg, #38bdf8, #fb7185)",
                          color: "#06111f",
                        }}
                      >
                        <PhoneIcon fontSize="small" />
                      </Box>
                    </Box>
                    <ListItemText sx={{color: "#f8fafc", "& .MuiListItemText-secondary": { color: "text.secondary" }}}
                      primary="Phone"
                      secondary={item.phone}
                    />
                  </Box>
                  <Box
                    component={ListItem}
                    disableGutters
                    width="auto"
                    padding={0}
                    marginRight={10}
                    marginBottom={3}
                  >
                    <Box
                      component={ListItemAvatar}
                      minWidth="auto !important"
                      marginRight={2}
                    >
                      <Box
                        component={Avatar}
                        width={50}
                        height={50}
                        sx={{
                          background: "linear-gradient(135deg, #38bdf8, #fb7185)",
                          color: "#06111f",
                        }}
                      >
                        <EmailIcon fontSize="small" />
                      </Box>
                    </Box>
                    <ListItemText sx={{color: "#f8fafc", "& .MuiListItemText-secondary": { color: "text.secondary" }}}
                      primary="Email"
                      secondary={item.email}
                    />
                  </Box>
                  <Box
                    component={ListItem}
                    disableGutters
                    width="auto"
                    padding={0}
                    marginBottom={3}
                  >
                    <Box
                      component={ListItemAvatar}
                      minWidth="auto !important"
                      marginRight={2}
                    >
                      <Box
                        component={Avatar}
                        width={50}
                        height={50}
                        sx={{
                          background: "linear-gradient(135deg, #38bdf8, #fb7185)",
                          color: "#06111f",
                        }}
                      >
                        <LocationIcon fontSize="small" />
                      </Box>
                    </Box>
                    <ListItemText sx={{color: "#f8fafc", "& .MuiListItemText-secondary": { color: "text.secondary" }}}
                      primary="Location"
                      secondary={item.address} 
                    />
                  </Box>
                </Box>
              </Grid>
              <Grid item md={8} xs={12}>
                <Map 
                  coordinates={[item.latitude, item.longitude]} 
                  zoom={15} 
                />
              </Grid>
            </Grid>
          ))}
        </Box>
      </Box>
    </div>
  );
};

export default Contact;
