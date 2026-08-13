import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { motion } from "motion/react";

import ownersImage from "../assets/owners.jpg";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

function PreFooterSection() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <Box component="section" id="contact" sx={{ backgroundColor: "#FCF9F5" }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1.2fr 0.8fr 1fr" },
          width: "100%",
          minHeight: { xs: "auto", md: 270 },
        }}
      >
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          sx={{
            backgroundColor: "#ECE8DC",
            px: { xs: 3, md: 4 },
            py: { xs: 3.5, md: 4 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "0.9rem",
              color: "#2F2C2A",
              letterSpacing: "0.08em",
              mb: 2.5,
              fontWeight: 600,
            }}
          >
            {t.preFooter.extrasTitle}
          </Typography>

          <Typography
            sx={{
              fontSize: "0.96rem",
              lineHeight: 1.8,
              color: "#2F2C2A",
              mb: 2,
            }}
          >
            {t.preFooter.extrasParagraph1}
          </Typography>

          <Typography
            sx={{
              fontSize: "0.96rem",
              lineHeight: 1.8,
              color: "#2F2C2A",
              mb: 2,
            }}
          >
            {t.preFooter.extrasParagraph2}
          </Typography>

          <Typography
            sx={{ fontSize: "0.96rem", lineHeight: 1.8, color: "#2F2C2A" }}
          >
            {t.preFooter.extrasParagraph3}
          </Typography>
        </Box>

        <Box
          component={motion.img}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          src={ownersImage}
          alt="Hosts at Casa Amapola"
          sx={{
            width: "100%",
            height: { xs: 260, md: "100%" },
            minHeight: { md: 270 },
            objectFit: "cover",
            display: "block",
          }}
        />

        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          sx={{
            backgroundColor: "#F1ECE4",
            px: { xs: 3, md: 4 },
            py: { xs: 3.5, md: 4 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "0.92rem",
              color: "#2F2C2A",
              letterSpacing: "0.08em",
              mb: 2,
              fontWeight: 600,
            }}
          >
            {t.preFooter.hostsTitle}
          </Typography>

          <Typography
            sx={{
              fontSize: "0.95rem",
              lineHeight: 1.6,
              color: "#2F2C2A",
              mb: 1.8,
            }}
          >
            {t.preFooter.hostsParagraph1}
          </Typography>

          <Typography
            sx={{
              fontSize: "0.95rem",
              lineHeight: 1.6,
              color: "#2F2C2A",
              mb: 1.8,
            }}
          >
            {t.preFooter.hostsParagraph2}
          </Typography>

          <Typography
            sx={{
              fontSize: "0.95rem",
              lineHeight: 1.6,
              color: "#2F2C2A",
              mb: 1.8,
            }}
          >
            {t.preFooter.hostsParagraph3}
          </Typography>

          <Typography
            sx={{ fontSize: "1.32rem", color: "#7D7A72", textAlign: "right" }}
          >
            {t.preFooter.hostsSignature}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default PreFooterSection;
