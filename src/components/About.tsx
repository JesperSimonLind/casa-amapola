import * as React from "react";
import { motion, useReducedMotion } from "motion/react";
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
import { useContent } from "../context/ContentContext";

const defaultAboutImages = [
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
  const { t, media } = useContent();
  const aboutImages = media?.about ?? defaultAboutImages;
  const [imageIndex, setActiveImage] = React.useState(0);
  const activeImage = imageIndex % aboutImages.length;
  const prefersReducedMotion = useReducedMotion();
  const pointerStartX = React.useRef<number | null>(null);
  const suppressClick = React.useRef(false);

  const showPreviousImage = () => {
    setActiveImage(
      (currentImage) =>
        (currentImage + aboutImages.length - 1) % aboutImages.length,
    );
  };

  const showNextImage = () => {
    setActiveImage((currentImage) => (currentImage + 1) % aboutImages.length);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      showPreviousImage();
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      showNextImage();
    }
  };

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (pointerStartX.current === null) return;

    const distance = event.clientX - pointerStartX.current;
    pointerStartX.current = null;
    if (Math.abs(distance) < 48) return;

    suppressClick.current = true;
    if (distance > 0) showPreviousImage();
    else showNextImage();
  };

  const visibleImages = [
    {
      index: (activeImage + aboutImages.length - 1) % aboutImages.length,
      position: -1,
    },
    { index: activeImage, position: 0 },
    { index: (activeImage + 1) % aboutImages.length, position: 1 },
  ];

  const showImage = (imageIndex: number) => {
    if (suppressClick.current) {
      suppressClick.current = false;
      return;
    }
    setActiveImage(imageIndex);
  };

  return (
    <Box
      component="section"
      id="about-us"
      sx={{
        backgroundColor: "var(--page-background-light)",
        py: { xs: 6, md: 8 },
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "0.8fr 1.2fr" },
            gap: { xs: 4, md: 6 },
            alignItems: "center",
          }}
        >
          <MotionReveal>
            <Box
              sx={{ color: "#353535", textAlign: { sm: "center", md: "left" } }}
            >
              <Typography
                variant="overline"
                className="heading-font section-heading"
                sx={{
                  display: "block",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  fontSize: { xs: "1.2rem", md: "1.35rem" },
                  color: "#2F2C2A",
                }}
              >
                {t.about.overline}
              </Typography>

              <Box sx={{ maxWidth: 440, mx: { sm: "auto", md: 0 } }}>
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
              role="region"
              aria-label={t.about.overline}
              aria-roledescription="carousel"
              tabIndex={0}
              onKeyDown={handleKeyDown}
              onPointerDown={(event) => {
                pointerStartX.current = event.clientX;
              }}
              onPointerUp={handlePointerUp}
              onPointerCancel={() => {
                pointerStartX.current = null;
              }}
              sx={{
                position: "relative",
                width: "100%",
                aspectRatio: "1.32 / 1",
                overflow: "hidden",
                backgroundColor: "transparent",
                perspective: "1200px",
                outline: "none",
                userSelect: "none",
                touchAction: "pan-y",
                "&:focus-visible": {
                  outline: "2px solid #4B5134",
                  outlineOffset: 4,
                },
              }}
            >
              {visibleImages.map(({ index, position }) => {
                const isActive = position === 0;
                const image = aboutImages[index];

                return (
                  <motion.button
                    key={position}
                    type="button"
                    aria-label={`${isActive ? "Current image" : "Show image"} ${index + 1}: ${image.alt}`}
                    aria-current={isActive ? "true" : undefined}
                    onClick={() => !isActive && showImage(index)}
                    initial={false}
                    animate={{
                      left:
                        position === -1
                          ? "-38%"
                          : position === 1
                            ? "74%"
                            : "12%",
                      width: isActive ? "76%" : "64%",
                      y: "-50%",
                      height: isActive ? "100%" : "84%",
                      rotateY: isActive ? 0 : position * -28,
                      opacity: isActive ? 1 : 0.82,
                    }}
                    transition={{
                      duration: prefersReducedMotion ? 0 : 0.62,
                      ease: "easeInOut",
                    }}
                    style={{
                      position: "absolute",
                      top: "50%",
                      zIndex: isActive ? 2 : 1,
                      border: 0,
                      padding: 0,
                      overflow: "hidden",
                      borderRadius: 7,
                      background: "transparent",
                      boxShadow: "none",
                      cursor: isActive ? "default" : "pointer",
                      transformStyle: "preserve-3d",
                      userSelect: "none",
                    }}
                  >
                    <Box
                      component="img"
                      src={image.src}
                      alt={isActive ? image.alt : ""}
                      draggable={false}
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                        pointerEvents: "none",
                      }}
                    />
                  </motion.button>
                );
              })}

              <IconButton
                aria-label="Show previous image"
                onClick={showPreviousImage}
                sx={{
                  position: "absolute",
                  left: { xs: "14%", md: "15%" },
                  top: "50%",
                  transform: "translateY(-50%)",
                  zIndex: 3,
                  width: 38,
                  height: 38,
                  color: "#fff",
                  backgroundColor: "rgba(38, 39, 31, 0.62)",
                  "&:hover": { backgroundColor: "rgba(38, 39, 31, 0.82)" },
                }}
              >
                <ArrowBackIosNewIcon fontSize="small" />
              </IconButton>

              <IconButton
                aria-label="Show next image"
                onClick={showNextImage}
                sx={{
                  position: "absolute",
                  right: { xs: "14%", md: "15%" },
                  top: "50%",
                  transform: "translateY(-50%)",
                  zIndex: 3,
                  width: 38,
                  height: 38,
                  color: "#fff",
                  backgroundColor: "rgba(38, 39, 31, 0.62)",
                  "&:hover": { backgroundColor: "rgba(38, 39, 31, 0.82)" },
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
                  zIndex: 3,
                  px: 1.1,
                  py: 0.45,
                  borderRadius: 1,
                  backgroundColor: "rgba(38, 39, 31, 0.62)",
                }}
              >
                <Typography
                  component="span"
                  sx={{ color: "#fff", fontSize: "0.8rem", lineHeight: 1 }}
                >
                  <span aria-live="polite">
                    {activeImage + 1} / {aboutImages.length}
                  </span>
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
