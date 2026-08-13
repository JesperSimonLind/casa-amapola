import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import ContactButton from "./ContactButton";
import HeroInfoRow from "./HeroInfoRow";
import heroDesktop from "../assets/hero/hero-desktop.png";
import Menu from "./Menu";

function Hero() {
  return (
    <Box
      id="home"
      component="section"
      sx={{
        position: "relative",
        minHeight: "78vh",
        backgroundImage: `url(${heroDesktop})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          pt: 3,
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1,
        }}
      >
        <Menu />
      </Container>

      <Box sx={{ minHeight: "78vh", display: "flex", alignItems: "center" }}>
        <Box sx={{ color: "#fff", ml: { xs: 2, md: "128px" }, pr: 2 }}>
          <Typography
            sx={{ fontWeight: 300, fontSize: { xs: "1.1rem", md: "1.3rem" } }}
          >
            Welcome to
          </Typography>

          <Typography
            component="h1"
            sx={{
              mt: 1,
              fontWeight: 600,
              fontSize: { xs: "3rem", md: "5rem" },
              lineHeight: 1,
            }}
          >
            Casa
          </Typography>
          <Typography
            component="h1"
            sx={{
              fontWeight: 600,
              fontSize: { xs: "3rem", md: "5rem" },
              lineHeight: 1,
            }}
          >
            Amapola
          </Typography>

          <Typography
            sx={{
              mt: 3,
              fontWeight: 700,
              fontSize: { xs: "1.1rem", md: "1.35rem" },
            }}
          >
            A charming Bed & Breakfast in the heart of
          </Typography>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: { xs: "1.1rem", md: "1.35rem" },
            }}
          >
            Alora, Andalusia, Spain.
          </Typography>

          <ContactButton />

          <HeroInfoRow />
        </Box>
      </Box>
    </Box>
  );
}

export default Hero;
