import React from "react";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";

const CustomButton = ({ href, icon, text }) => {
  const theme = useTheme();
  
  return (
    <Button
      component="a"
      color="primary"
      href={href}
      size="small"
      variant="text"
      sx={{
        color: "#fff",
        fontSize: theme.typography.h4,
        fontWeight: "600",
        textTransform: "none",
        mr: 2,
        "&:active": {
          color: "#212121"
        },
        "&:hover": {
          color: "#fff"
        },
        "& svg": {
          mr: 0.5
        },
      }}
    >
      {text}
    </Button>
  );
};

export default CustomButton;