import React from "react";
import Button from "@mui/material/Button";

const CustomButton = ({ href, text }) => {
  return (
    <Button
      component="a"
      color="primary"
      href={href}
      size="small"
      variant="text"
      sx={{
        color: "rgba(248, 250, 252, 0.78)",
        fontSize: "0.92rem",
        fontWeight: "600",
        textTransform: "none",
        mr: 2,
        px: 1,
        "&:active": {
          color: "primary.main"
        },
        "&:hover": {
          color: "#fff",
          backgroundColor: "rgba(255, 255, 255, 0.06)",
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
