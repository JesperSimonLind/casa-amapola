import * as React from "react";
import Button from "@mui/material/Button";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

function ContactButton() {
  const { language } = useLanguage();
  const t = translations[language];

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
      {t.contactButton}
    </Button>
  );
}

export default ContactButton;
