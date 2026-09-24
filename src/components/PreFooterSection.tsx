import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { motion } from "motion/react";

import ownersImage from "../assets/owners.jpg";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

function PreFooterSection() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <Box
      component="section"
      id="contact"
      sx={{ backgroundColor: "#FCF9F5", py: { xs: 6, md: 8 } }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "0.72fr 1.88fr" },
            columnGap: { xs: 0, lg: 5 },
            rowGap: { xs: 0, lg: 0 },
            width: "100%",
            minHeight: { xs: "auto", md: 300 },
          }}
        >
          <Box
            component={motion.img}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            src={ownersImage}
            alt="Hosts at Casa Amapola"
            sx={{
              width: "100%",
              height: { xs: 240, sm: 320, lg: "100%" },
              minHeight: { lg: 300 },
              objectFit: "cover",
              display: "block",
            }}
          />

          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              delay: 0.16,
              ease: [0.22, 1, 0.36, 1],
            }}
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
                fontSize: "0.93rem",
                lineHeight: 1.7,
                color: "#2F2C2A",
              }}
            >
              {t.preFooter.hostsParagraph}
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default PreFooterSection;
