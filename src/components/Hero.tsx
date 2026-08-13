import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import ContactButton from "./ContactButton";
import HeroInfoRow from "./HeroInfoRow";
import heroDesktop from "../assets/hero/hero-desktop.png";
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
        maxWidth="lg"
        sx={{
          pt: { xs: "calc(env(safe-area-inset-top) + 12px)", md: 3 },
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
        <Box
          sx={{
            color: "#fff",
            ml: { xs: 2, md: "128px" },
            pr: 2,
            maxWidth: { xs: 320, md: 820 },
          }}
        >
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: { xs: "1.02rem", md: "1.3rem" },
              color: "rgba(255,255,255,0.88)",
            }}
          >
            Welcome to
          </Typography>

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

          <Typography
            sx={{
              mt: { xs: 1.4, md: 3 },
              fontWeight: 400,
              fontSize: { xs: "1.04rem", md: "1.35rem" },
              maxWidth: { xs: 290, md: 720 },
              color: "rgba(255,255,255,0.9)",
            }}
          >
            A charming Bed & Breakfast in the heart of Alora, Andalusia, Spain.
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1.2,
              mt: { xs: 2, md: 2 },
            }}
          >
            <ContactButton />
            <Box
              component="a"
              href="#rooms"
              sx={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid rgba(255,255,255,0.5)",
                color: "#fff",
                textDecoration: "none",
                fontWeight: 600,
                fontSize: "1rem",
                width: { xs: 170, md: 190 },
                py: 1.1,
                bgcolor: "rgba(15, 15, 15, 0.55)",
              }}
            >
              Explore rooms
            </Box>
          </Box>

          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <HeroInfoRow />
          </Box>
        </Box>

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
