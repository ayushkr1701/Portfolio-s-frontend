import React from "react";
import PropTypes from "prop-types";
//import Link from "next/link";
import { Link } from 'react-router-dom';
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import DevicesIcon from "@mui/icons-material/Devices";
import EmailIcon from "@mui/icons-material/EmailOutlined";
import HomeIcon from "@mui/icons-material/HomeOutlined";
import InfoIcon from "@mui/icons-material/InfoOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ListIcon from "@mui/icons-material/FormatListBulleted";
import GitHubIcon from "@mui/icons-material/GitHub";

// Font Awesome Icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faLaptopCode);

import CustomButton from "../components/CustomButton";

const Sidebar = ({ open, onClose }) => {
  const theme = useTheme();
  
  return (
    <React.Fragment>
      <Drawer
        anchor="left"
        onClose={() => onClose()}
        open={open}
        variant="temporary"
        sx={{
          "& .MuiPaper-root": {
            width: "100%",
            maxWidth: 280,
            backgroundColor: "#212121"
          }
        }}
      >
        <Box sx={{ height: "100%", padding: 1 }}>
          <Box width={1} paddingX={2} paddingY={1}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <IconButton size="large" disabled>
              <img
              src= {'https://i.ibb.co/0QKqX5M/web-icon-modified.png'}
                 
                style={{ 
                  height: 55, 
                  width: "100%"
                }} 
              />
                {/* <Typography 
                  variant="h3" 
                  color={theme.palette.primary.main}
                  fontWeight={700}
                  textDecoration="none"
                  flexGrow={1}
                  marginLeft="10px"
                >
                  Ayush's Portfolio
                </Typography> */}
              </IconButton>
            </Link>
          </Box>
          <Box paddingX={2} paddingY={2}>
            <CustomButton 
              href="#home"
              text="Home"
            />
            <Box paddingY={1}>
              <CustomButton 
                href="#education"
                text="Education"
              />
            </Box>
            <Box paddingY={1}>
              <CustomButton 
                href="#projects"
                text="Projects"
              />
            </Box>
            <Box paddingY={1}>
              <CustomButton 
                href="#technologies"
                text="Skills"
              />
            </Box>
            {/* <Box paddingY={1}>
              <CustomButton
                href="#testimonials"
                text="Testimonials"
              />
            </Box> */}
            <Box paddingY={1}>
              <CustomButton 
                href="#contact"
                text="Contact"
              />
            </Box>
            <Box>
              <Stack direction="row" spacing={1}>
                <IconButton 
                  aria-label="Github" 
                  href="https://github.com/ayushkr1701"
                  target="_blank"
                  sx={{ 
                    color: "#fff",
                  }}
                >
                  <GitHubIcon fontSize="large" />
                </IconButton>
                <IconButton 
                  aria-label="LinkedIn" 
                  href="https://www.linkedin.com/in/ayushkr1701/"
                  target="_blank"
                  sx={{ 
                    color: '#fff',
                  }}
                >
                  <LinkedInIcon fontSize="large" />
                </IconButton>
                <IconButton 
                  aria-label="Instagram" 
                  href="https://www.instagram.com/ayush_.kr_/"
                  target="_blank"
                  sx={{ 
                    color: "#fff",
                  }}
                >
                  <InstagramIcon fontSize="large" />
                </IconButton>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Drawer>
    </React.Fragment>
  );
};

Sidebar.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
};

export default Sidebar;