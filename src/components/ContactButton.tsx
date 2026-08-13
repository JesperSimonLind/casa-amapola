import * as React from "react";
import Button from "@mui/material/Button";

function ContactButton() {
  return (
    <Button
      href="#contact"
      sx={{
        mt: 0,
        backgroundColor: "#4B5134",
        color: "#fff",
        borderRadius: 0,
        px: 2.3,
        py: 1.1,
        width: { xs: "170px", md: "190px" },
        textTransform: "none",
        fontSize: "1rem",
        fontWeight: 600,
        boxShadow: "none",
        boxSizing: "border-box",
        justifyContent: "center",
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
