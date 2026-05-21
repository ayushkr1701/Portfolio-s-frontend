import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
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
        justifyContent="flex-start"
        marginTop={3}
      >
        <Button
          component="a"
          variant="contained"
          // color="primary"
          size="large"
          download="Resume Ayush Kumar IIT Jodhpur.pdf"
          target="_blank"
          href="/Resume Ayush Kumar IIT Jodhpur.pdf"
          rel='noreferrer'
          endIcon={<FileDownloadOutlinedIcon />}
          fullWidth={isMd ? false : true}
          disableElevation={true}
          sx={{
            marginRight: { sm: "15px" },
            color: "#06111f",
            background: "linear-gradient(135deg, #38bdf8, #7dd3fc)",
            border: "1px solid rgba(125, 211, 252, 0.65)",
            boxShadow: "0 18px 38px rgba(56, 189, 248, 0.22)",
            "&:hover": {
              background: "linear-gradient(135deg, #7dd3fc, #38bdf8)",
              boxShadow: "0 22px 46px rgba(56, 189, 248, 0.32)",
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
              border: "1px solid rgba(148, 163, 184, 0.32)",
              color: "#e2e8f0",
              backgroundColor: "rgba(255, 255, 255, 0.03)",
              backdropFilter: "blur(10px)",
              "&:hover": {
                backgroundColor: "rgba(56, 189, 248, 0.12)",
                color: "#fff",
                border: "1px solid rgba(56, 189, 248, 0.65)",
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
