import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import HelpIcon from "@mui/icons-material/HelpOutlineOutlined";
import ManageSearchIcon from "@mui/icons-material/ManageSearchOutlined";
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

const HeroButtons = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(
    theme.breakpoints.up("md"),
    { defaultMatches: true }
  );
  
  return (
    <React.Fragment>
      <Box
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
        alignItems={{ xs: "stretched", sm: "flex-start" }}
        justifyContent="center"
        marginTop={4}
      >
        <Button
          component="a"
          variant="contained"
          // color="primary"
          size="large"
          download="resume"
          target="_blank"
          href="https://drive.google.com/file/d/1p4NvEBt7T1uypJrd34Qf3kQsAmnbwMQ1/view?usp=sharing"
          rel='noreferrer'
          endIcon={<FileDownloadOutlinedIcon />}
          fullWidth={isMd ? false : true}
          disableElevation={true}
          sx={{
            marginRight: "15px",
            color: "#fff",
            backgroundColor: "transparent",
            border: "2px solid " + "#f56539",
            "&:hover": {
              backgroundColor: "#f56539",
              border: "2px solid " + "#fff"
            }
          }}
        >
          Download CV
        </Button>
        <Box
          marginTop={{ xs: 2, sm: 0 }}
          marginLeft={{ sm: 1 }}
          width={{ xs: "100%", md: "auto" }}
        >
          <Button
            component="a"
            variant="outlined"
            // color="#fff"
            size="large"
            href="#projects"
            endIcon={<ManageSearchIcon />}
            fullWidth={isMd ? false : true}
            disableElevation={true}
            sx={{
              border: "2px solid " + "#fff",
              color: "#f56539",
              backgroundColor: "#transparent",
              "&:hover": {
                backgroundColor: "#f56539",
                color: "#fff",
                border: "2px solid " + "#f56539"
              }
            }}
          >
            View My Work
          </Button>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default HeroButtons;