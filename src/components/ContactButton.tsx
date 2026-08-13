import * as React from "react";
import Button from "@mui/material/Button";

function ContactButton() {
  return (
    <Button
      href="#contact"
      sx={{
        mt: "16px",
        backgroundColor: "#4B5134",
        color: "#fff",
        borderRadius: 0,
        px: 2.7,
        py: 1.35,
        minWidth: "150px",
        textTransform: "none",
        fontSize: "1.02rem",
        fontWeight: 600,
        boxShadow: "none",
        "&:hover": {
          backgroundColor: "#40472e",
          boxShadow: "none",
        },
      }}
    >
      Contact us
    </Button>
  );
}

export default ContactButton;
