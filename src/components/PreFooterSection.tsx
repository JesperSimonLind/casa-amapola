import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { motion } from "motion/react";

import ownersImage from "../assets/owners.jpg";

function PreFooterSection() {
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
            EXTRAS
          </Typography>

          <Typography
            sx={{
              fontSize: "0.96rem",
              lineHeight: 1.8,
              color: "#2F2C2A",
              mb: 2,
            }}
          >
            Enquiries for more specific reservations such as planning your stay
            and activities or added guests in your room please contact us.
          </Typography>

          <Typography
            sx={{
              fontSize: "0.96rem",
              lineHeight: 1.8,
              color: "#2F2C2A",
              mb: 2,
            }}
          >
            We are happy to make your stay at Casa Amapola and Alhaurín el
            Grande as pleasant as possible and can help with reservations to
            local restaurants, bodegas and tours.
          </Typography>

          <Typography
            sx={{ fontSize: "0.96rem", lineHeight: 1.8, color: "#2F2C2A" }}
          >
            We can also advise on our preferred car hire and help you with
            airport transfer.
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
            ABOUT YOUR HOSTS
          </Typography>

          <Typography
            sx={{
              fontSize: "0.95rem",
              lineHeight: 1.6,
              color: "#2F2C2A",
              mb: 1.8,
            }}
          >
            We are Richard and BLANK, your hosts at Casa Amapola.
          </Typography>

          <Typography
            sx={{
              fontSize: "0.95rem",
              lineHeight: 1.6,
              color: "#2F2C2A",
              mb: 1.8,
            }}
          >
            Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem
            ipsum lorem ipsum.
          </Typography>

          <Typography
            sx={{
              fontSize: "0.95rem",
              lineHeight: 1.6,
              color: "#2F2C2A",
              mb: 1.8,
            }}
          >
            We are happy to help you with tips and recommendations to make your
            stay unforgettable.
          </Typography>

          <Typography
            sx={{ fontSize: "1.32rem", color: "#7D7A72", textAlign: "right" }}
          >
            / Richard & BLANK
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default PreFooterSection;
