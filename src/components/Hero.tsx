import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import HeroInfoRow from "./HeroInfoRow";
import { MotionStagger, MotionStaggerItem } from "./MotionReveal";
// import heroDesktop from "../assets/hero/hero-desktop.png";
import heroDesktop from "../assets/hero/hero-desktop.jpg";
import heroMobile from "../assets/hero/hero-mobile.png";
import Menu from "./Menu";

function Hero() {
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
      }}
    >
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          minHeight: { xs: "calc(env(safe-area-inset-top) + 64px)", md: 76 },
          px: { xs: 2, sm: 3, md: 4, lg: 6, xl: "170px" },
          pt: { xs: "env(safe-area-inset-top)", md: 0 },
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 2,
          display: "flex",
          alignItems: "center",
          backgroundColor: "rgb(195, 223, 212)",
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
              maxWidth: { xs: 320, sm: 600, md: 820 },
            }}
          >
            <MotionStaggerItem>
              <Typography
                component="h1"
                sx={{
                  mt: 1,
                  fontWeight: 600,
                  fontSize: { xs: "3.55rem", sm: "5.5rem", md: "5rem" },
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
                  fontSize: { xs: "3.55rem", sm: "5.5rem", md: "5rem" },
                  lineHeight: 1,
                  fontFamily: "'EB Garamond', Georgia, serif",
                }}
              >
                Amapola
              </Typography>
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
