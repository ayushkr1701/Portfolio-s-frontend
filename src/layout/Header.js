import React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Toolbar from "@mui/material/Toolbar";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MenuIcon from "@mui/icons-material/Menu";
import GitHubIcon from "@mui/icons-material/GitHub";

// Font Awesome Icons
import CustomButton from "../components/CustomButton";

const Header = ({ onSidebarOpen }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 38,
  });
  
  return (
    <React.Fragment>
      <AppBar
        position="sticky"
        elevation={trigger ? 1 : 0}
        sx={{
          top: 0,
          border: 0,
          backgroundColor: trigger ? "rgba(8, 17, 31, 0.86)" : "rgba(8, 17, 31, 0.52)",
          backdropFilter: "blur(18px)",
          borderBottom: "1px solid rgba(148, 163, 184, 0.14)",
          boxShadow: trigger ? "0 18px 45px rgba(2, 8, 23, 0.35)" : "none",
        }}
      >
        <Toolbar sx={{ minHeight: 70 }}>
          <IconButton 
            onClick={() => onSidebarOpen()}
            aria-label="Menu"
            sx={{ 
              color: "#fff",
              display: { xs: "block", md: "none" } 
            }}
          >
            <MenuIcon fontSize="medium" sx={{color: "#fff"}}/>
          </IconButton>
          <Link href="/" style={{ textDecoration: "none" }}>
            <IconButton size="large" disabled>
              <img
              src= {'https://i.ibb.co/0QKqX5M/web-icon-modified.png'}
                 
                style={{ 
                  height: 55, 
                  width: "100%",
                  filter: "brightness(0) invert(1)",
                }} 
              />
              {/* <Typography 
                variant="h3" 
                component="div" 
                sx={{ 
                  flexGrow: 1,
                  marginLeft: "10px",
                  color: theme.palette.primary.main,
                  fontWeight: 700,
                  textDecoration: "none",
                  display: { md: "inline", xs: "none" }
                }}
              >
                Portfolio
              </Typography> */}
            </IconButton>
          </Link>
          <Box sx={{ flexGrow: 1 }} />
          <Box 
            sx={{ 
              alignItems: "center",
              display: { md: "flex", xs: "none" } 
            }}
          >
            <CustomButton 
              href="#home"
              text="Home"
            />
            <CustomButton 
              href="#education"
              text="Education"
            />
            <CustomButton 
              href="#projects"
              text="Projects"
            />
            <CustomButton 
              href="#technologies"
              text="Skills"
            />
            <CustomButton
              href="#testimonials"
              text="Experience"
            />
            <CustomButton 
              href="#contact"
              text="Contact"
            />
          </Box>
          <Divider
            orientation="vertical"
            sx={{ 
              height: 32, 
              mx: 2,
              borderColor: "rgba(148, 163, 184, 0.18)",
              display: { lg: "flex", md: "none", xs: "none" } 
            }} 
          />
          <Box sx={{ display: { lg: "flex", md: "none", xs: "none" } }}>
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
                color: "#fff",
              }}
            >
              <LinkedInIcon fontSize="large" />
            </IconButton>
            <IconButton 
              aria-label="Instagram" 
              href="https://www.instagram.com/ayxshhhhh.__/"
              target="_blank"
              sx={{ 
                color: "#fff",
              }}
            >
              <InstagramIcon fontSize="large" />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

Header.propTypes = {
  onSidebarOpen: PropTypes.func,
};

export default Header;
