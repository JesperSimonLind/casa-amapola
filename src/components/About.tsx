import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import MotionReveal from "./MotionReveal";
import about1 from "../assets/about/about-1.jpg";
import about2 from "../assets/about/about-2.jpg";
import about3 from "../assets/about/about-3.jpg";
import about4 from "../assets/about/about-4.jpeg";
import about5 from "../assets/about/about-5.jpeg";
import about6 from "../assets/about/about-6.jpeg";
import about7 from "../assets/about/about-7.jpeg";
import about8 from "../assets/about/about-8.jpeg";
import about9 from "../assets/about/about-9.jpeg";
import about10 from "../assets/about/about-10.jpeg";
import about11 from "../assets/about/about-11.jpeg";
import about12 from "../assets/about/about-12.jpeg";
import about13 from "../assets/about/about-13.jpeg";
import about14 from "../assets/about/about-14.jpeg";
import about15 from "../assets/about/about-15.jpeg";
import about16 from "../assets/about/about-16.jpeg";
import about17 from "../assets/about/about-17.jpeg";
import about18 from "../assets/about/about-18.jpeg";
import about19 from "../assets/about/about-19.jpeg";
import about20 from "../assets/about/about-20.jpeg";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

const aboutImages = [
  { src: about1, alt: "Terrace seating area" },
  { src: about2, alt: "Decorative planter on a terrace" },
  { src: about3, alt: "Sunset over valley" },
  { src: about4, alt: "Casa Amapola" },
  { src: about5, alt: "Casa Amapola" },
  { src: about6, alt: "Casa Amapola" },
  { src: about7, alt: "Casa Amapola" },
  { src: about8, alt: "Casa Amapola" },
  { src: about9, alt: "Casa Amapola" },
  { src: about10, alt: "Casa Amapola" },
  { src: about11, alt: "Casa Amapola" },
  { src: about12, alt: "Casa Amapola" },
  { src: about13, alt: "Casa Amapola" },
  { src: about14, alt: "Casa Amapola" },
  { src: about15, alt: "Casa Amapola" },
  { src: about16, alt: "Casa Amapola" },
  { src: about17, alt: "Casa Amapola" },
  { src: about18, alt: "Casa Amapola" },
  { src: about19, alt: "Casa Amapola" },
  { src: about20, alt: "Casa Amapola" },
];

function About() {
  const { language } = useLanguage();
  const t = translations[language];
  const [activeImage, setActiveImage] = React.useState(0);

  const showPreviousImage = () => {
    setActiveImage(
      (currentImage) =>
        (currentImage + aboutImages.length - 1) % aboutImages.length,
    );
  };

  const showNextImage = () => {
    setActiveImage((currentImage) => (currentImage + 1) % aboutImages.length);
  };

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
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: { xs: 4, md: 10 },
            alignItems: "center",
          }}
        >
          <MotionReveal>
            <Box
              sx={{ color: "#353535", textAlign: { sm: "center", md: "left" } }}
            >
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
                {t.about.overline}
              </Typography>

              <Box sx={{ mt: 3, maxWidth: 440, mx: { sm: "auto", md: 0 } }}>
                {t.about.paragraphs.map((paragraph) => (
                  <Typography
                    key={paragraph}
                    sx={{
                      fontSize: "1rem",
                      lineHeight: 1.75,
                      color: "#2F2C2A",
                      mb: 2,
                      "&:last-child": { mb: 0 },
                    }}
                  >
                    {paragraph}
                  </Typography>
                ))}
              </Box>
            </Box>
          </MotionReveal>

          <MotionReveal delay={0.1} distance={36}>
            <Box
              sx={{
                position: "relative",
                height: { xs: 360, md: 520 },
                overflow: "hidden",
                backgroundColor: "#D9D0C5",
              }}
            >
              <Box
                component="img"
                src={aboutImages[activeImage].src}
                alt={aboutImages[activeImage].alt}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />

              <IconButton
                aria-label="Show previous image"
                onClick={showPreviousImage}
                sx={{
                  position: "absolute",
                  left: 12,
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#fff",
                  backgroundColor: "rgba(0, 0, 0, 0.45)",
                  "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.65)" },
                }}
              >
                <ArrowBackIosNewIcon fontSize="small" />
              </IconButton>

              <IconButton
                aria-label="Show next image"
                onClick={showNextImage}
                sx={{
                  position: "absolute",
                  right: 12,
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#fff",
                  backgroundColor: "rgba(0, 0, 0, 0.45)",
                  "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.65)" },
                }}
              >
                <ArrowForwardIosIcon fontSize="small" />
              </IconButton>

              <Box
                sx={{
                  position: "absolute",
                  bottom: 16,
                  left: "50%",
                  transform: "translateX(-50%)",
                  px: 1.1,
                  py: 0.45,
                  backgroundColor: "rgba(0, 0, 0, 0.45)",
                }}
              >
                <Typography
                  component="span"
                  sx={{ color: "#fff", fontSize: "0.8rem", lineHeight: 1 }}
                >
                  {activeImage + 1} / {aboutImages.length}
                </Typography>
              </Box>
            </Box>
          </MotionReveal>
        </Box>
      </Container>
    </Box>
  );
}

export default About;
