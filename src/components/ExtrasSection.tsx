import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { motion } from "motion/react";

import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

function ExtrasSection() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <Box
      component="section"
      sx={{ backgroundColor: "#FCF9F5", pb: { xs: 6, md: 7 } }}
    >
      <Container maxWidth="xl">
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          sx={{
            maxWidth: 980,
            mx: "auto",
            pt: { xs: 5, md: 6 },
            borderTop: "1px solid rgba(47, 44, 42, 0.18)",
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "0.9rem",
              color: "#2F2C2A",
              letterSpacing: "0.09em",
              mb: 2,
              fontWeight: 600,
            }}
          >
            {t.preFooter.extrasTitle}
          </Typography>

          <Typography
            sx={{
              maxWidth: 760,
              mx: "auto",
              fontSize: "0.96rem",
              lineHeight: 1.8,
              color: "#2F2C2A",
              mb: 1.5,
            }}
          >
            {t.preFooter.extrasParagraph1}
          </Typography>

          <Typography
            sx={{
              maxWidth: 760,
              mx: "auto",
              fontSize: "0.96rem",
              lineHeight: 1.8,
              color: "#2F2C2A",
              mb: 1.5,
            }}
          >
            {t.preFooter.extrasParagraph2}
          </Typography>

          <Typography
            sx={{
              maxWidth: 760,
              mx: "auto",
              fontSize: "0.96rem",
              lineHeight: 1.8,
              color: "#2F2C2A",
            }}
          >
            {t.preFooter.extrasParagraph3}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default ExtrasSection;
