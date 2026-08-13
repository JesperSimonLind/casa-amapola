import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { motion } from "motion/react";
import MotionReveal from "./MotionReveal";
import about1 from "../assets/about/about-1.jpg";
import about2 from "../assets/about/about-2.jpg";
import about3 from "../assets/about/about-3.jpg";

function About() {
  return (
    <Box
      component="section"
      id="about-us"
      sx={{
        backgroundColor: "#F5F0EA",
        py: { xs: 6, md: 8 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "0.9fr 1.6fr" },
            gap: { xs: 4, md: 6 },
            alignItems: "center",
          }}
        >
          <MotionReveal>
            <Box sx={{ color: "#353535" }}>
              <Typography
                variant="overline"
                sx={{
                  display: "block",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  fontSize: "0.8rem",
                  mb: 2,
                  color: "#2F2C2A",
                }}
              >
                ABOUT US
              </Typography>

              <Typography
                sx={{
                  fontFamily: "'EB Garamond', Georgia, serif",
                  fontSize: { xs: "2.35rem", md: "3.8rem" },
                  lineHeight: 1.05,
                  fontWeight: 400,
                  letterSpacing: "-0.02em",
                  color: "#2F2C2A",
                }}
              >
                <Box
                  component="span"
                  sx={{ display: "block", whiteSpace: "nowrap" }}
                >
                  Living life on the
                </Box>
                <Box
                  component="span"
                  sx={{ display: "block", whiteSpace: "nowrap" }}
                >
                  Sunshine side
                </Box>
              </Typography>

              <Box sx={{ mt: 3, maxWidth: 440 }}>
                <Typography
                  sx={{
                    fontSize: "1rem",
                    lineHeight: 1.75,
                    color: "#2F2C2A",
                    mb: 2,
                  }}
                >
                  Casa Amapola is a charming boutique bed & breakfast in the
                  heart of Alhaurín el Grande. Stay in one of our four
                  thoughtfully designed rooms and experience authentic
                  Andalusian hospitality.
                </Typography>

                <Typography
                  sx={{
                    fontSize: "1rem",
                    lineHeight: 1.75,
                    color: "#2F2C2A",
                    mb: 2,
                  }}
                >
                  Relax on our rooftop terrace overlooking the beautiful
                  Guadalhorce Valley, just moments from the town&apos;s cafés,
                  tapas bars, and local atmosphere.
                </Typography>

                <Typography
                  sx={{
                    fontSize: "1rem",
                    lineHeight: 1.75,
                    color: "#2F2C2A",
                  }}
                >
                  A peaceful retreat where traditional Spanish charm meets
                  modern comfort, offering a warm and memorable stay in the
                  heart of Andalusia.
                </Typography>
              </Box>
            </Box>
          </MotionReveal>

          <MotionReveal delay={0.1} distance={36}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "1.2fr 0.8fr" },
                gap: 2,
                alignItems: "stretch",
              }}
            >
              <Box
                component={motion.img}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                src={about1}
                alt="Terrace seating area"
                sx={{
                  width: "100%",
                  height: { xs: 320, md: 420 },
                  objectFit: "cover",
                  display: "block",
                }}
              />

              <Box
                sx={{
                  display: "grid",
                  gridTemplateRows: "1fr 1fr",
                  gap: 2,
                }}
              >
                <Box
                  component={motion.img}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  src={about2}
                  alt="Decorative planter on a terrace"
                  sx={{
                    width: "100%",
                    height: { xs: 180, md: 210 },
                    objectFit: "cover",
                    display: "block",
                  }}
                />
                <Box
                  component={motion.img}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  src={about3}
                  alt="Sunset over valley"
                  sx={{
                    width: "100%",
                    height: { xs: 180, md: 210 },
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </Box>
            </Box>
          </MotionReveal>
        </Box>
      </Container>
    </Box>
  );
}

export default About;
