import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { motion } from "motion/react";

import ContactButton from "./ContactButton";
import HeroInfoRow from "./HeroInfoRow";
import { MotionStagger, MotionStaggerItem } from "./MotionReveal";
import heroDesktop from "../assets/hero/hero-desktop.png";
import heroMobile from "../assets/hero/hero-mobile.png";
import Menu from "./Menu";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

function Hero() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <Box
      id="home"
      component="section"
      sx={{
        position: "relative",
        minHeight: { xs: "68svh", md: "78vh" },
        backgroundImage: {
          xs: `url(${heroMobile})`,
          md: `url(${heroDesktop})`,
        },
        backgroundSize: "cover",
        backgroundPosition: { xs: "center", md: "center" },
        backgroundRepeat: "no-repeat",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.42), rgba(0, 0, 0, 0.18) 42%, rgba(0, 0, 0, 0.58))",
          zIndex: 0,
        },
      }}
    >
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          pt: { xs: "calc(env(safe-area-inset-top) + 12px)", md: 3 },
          px: { xs: 2, sm: 3, md: 4, lg: 6, xl: "170px" },
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 2,
        }}
      >
        <Menu />
      </Container>

      <Box
        sx={{
          minHeight: { xs: "68svh", md: "78vh" },
          display: "flex",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
          pb: { xs: 9, md: 0 },
          pt: { xs: "calc(env(safe-area-inset-top) + 20px)", md: 0 },
        }}
      >
        <MotionStagger delayChildren={0.15} staggerChildren={0.14}>
          <Box
            sx={{
              color: "#fff",
              ml: { xs: 2, md: "128px" },
              pr: 2,
              maxWidth: { xs: 320, md: 820 },
            }}
          >
            <MotionStaggerItem>
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: { xs: "1.02rem", md: "1.3rem" },
                  color: "rgba(255,255,255,0.88)",
                }}
              >
                {t.hero.welcome}
              </Typography>
            </MotionStaggerItem>

            <MotionStaggerItem>
              <Typography
                component="h1"
                sx={{
                  mt: 1,
                  fontWeight: 600,
                  fontSize: { xs: "3.55rem", md: "5rem" },
                  lineHeight: 1,
                  fontFamily: "'EB Garamond', Georgia, serif",
                }}
              >
                Casa
              </Typography>
            </MotionStaggerItem>
            <MotionStaggerItem>
              <Typography
                component="h1"
                sx={{
                  fontWeight: 600,
                  fontSize: { xs: "3.55rem", md: "5rem" },
                  lineHeight: 1,
                  fontFamily: "'EB Garamond', Georgia, serif",
                }}
              >
                Amapola
              </Typography>
            </MotionStaggerItem>

            <MotionStaggerItem>
              <Typography
                sx={{
                  mt: { xs: 1.4, md: 3 },
                  fontWeight: 400,
                  fontSize: { xs: "1.04rem", md: "1.35rem" },
                  maxWidth: { xs: 290, md: 720 },
                  color: "rgba(255,255,255,0.9)",
                }}
              >
                {t.hero.description}
              </Typography>
            </MotionStaggerItem>

            <MotionStaggerItem>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1.2,
                  mt: { xs: 2, md: 2 },
                }}
              >
                <Box
                  component={motion.div}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  sx={{ width: { xs: 170, md: 190 } }}
                >
                  <ContactButton />
                </Box>
                <Button
                  href="#rooms"
                  component={motion.a}
                  whileHover={{
                    y: -2,
                    backgroundColor: "rgba(15, 15, 15, 0.7)",
                  }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  sx={{
                    mt: 0,
                    border: "1px solid rgba(255,255,255,0.5)",
                    color: "#fff",
                    borderRadius: 0,
                    px: 2.3,
                    py: 1.1,
                    fontWeight: 600,
                    textTransform: "none",
                    fontSize: "1rem",
                    width: { xs: 170, md: 190 },
                    boxShadow: "none",
                    boxSizing: "border-box",
                    justifyContent: "center",
                    bgcolor: "rgba(15, 15, 15, 0.55)",
                    "&:hover": {
                      bgcolor: "rgba(15, 15, 15, 0.7)",
                      boxShadow: "none",
                    },
                  }}
                >
                  {t.hero.exploreRooms}
                </Button>
              </Box>
            </MotionStaggerItem>

            <MotionStaggerItem>
              <Box sx={{ display: { xs: "none", md: "block" } }}>
                <HeroInfoRow />
              </Box>
            </MotionStaggerItem>
          </Box>
        </MotionStagger>

        <Box
          sx={{
            display: { xs: "block", md: "none" },
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
          }}
        >
          <HeroInfoRow />
        </Box>
      </Box>
    </Box>
  );
}

export default Hero;
