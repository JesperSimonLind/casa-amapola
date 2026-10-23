import * as React from "react";
import { motion, useReducedMotion } from "motion/react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import area1 from "../assets/area/area-1.jpeg";
import area2 from "../assets/area/area-2.jpeg";
import area3 from "../assets/area/area-3.jpeg";
import area4 from "../assets/area/area-4.jpeg";
import area5 from "../assets/area/area-5.jpeg";
import area6 from "../assets/area/area-6.jpeg";
import area7 from "../assets/area/area-7.jpeg";
import area8 from "../assets/area/area-8.jpeg";
import area9 from "../assets/area/area-9.jpeg";
import area10 from "../assets/area/area-10.jpeg";
import area11 from "../assets/area/area-11.jpeg";
import area12 from "../assets/area/area-12.jpeg";
import area13 from "../assets/area/area-13.jpeg";
import { useContent } from "../context/ContentContext";
import { ContentImage } from "../cms/content";

const defaultAreaImages = [
  area1,
  area2,
  area3,
  area4,
  area5,
  area6,
  area7,
  area8,
  area9,
  area10,
  area11,
  area12,
  area13,
];

function AreaCarousel() {
  const { media } = useContent();
  const areaImages: ContentImage[] = media?.area ?? defaultAreaImages.map((src, index) => ({
    src,
    alt: `Area image ${index + 1}`,
  }));
  const [imageIndex, setActiveImage] = React.useState(0);
  const activeImage = imageIndex % areaImages.length;
  const prefersReducedMotion = useReducedMotion();
  const pointerStartX = React.useRef<number | null>(null);
  const suppressClick = React.useRef(false);

  const showPreviousImage = () => {
    setActiveImage(
      (currentImage) =>
        (currentImage + areaImages.length - 1) % areaImages.length,
    );
  };

  const showNextImage = () => {
    setActiveImage((currentImage) => (currentImage + 1) % areaImages.length);
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
      index: (activeImage + areaImages.length - 1) % areaImages.length,
      position: -1,
    },
    { index: activeImage, position: 0 },
    { index: (activeImage + 1) % areaImages.length, position: 1 },
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
      sx={{
        backgroundColor: "var(--page-background-light)",
        py: { xs: 6, md: 8 },
      }}
    >
      <Container maxWidth="xl">
        <Box
          role="region"
          aria-label="Explore the area photo carousel"
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
            maxWidth: 1080,
            aspectRatio: "2 / 1",
            mx: "auto",
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

            return (
              <motion.button
                key={position}
                type="button"
                aria-label={`${isActive ? "Current area image" : "Show area image"} ${index + 1}`}
                aria-current={isActive ? "true" : undefined}
                onClick={() => !isActive && showImage(index)}
                initial={false}
                animate={{
                  left: "50%",
                  width: isActive ? "76%" : "64%",
                  x:
                    position === -1
                      ? "-137.5%"
                      : position === 1
                        ? "37.5%"
                        : "-50%",
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
                  src={areaImages[index].src}
                  srcSet={areaImages[index].srcSet}
                  sizes="(min-width: 1200px) 821px, 76vw"
                  loading="lazy"
                  decoding="async"
                  alt={isActive ? areaImages[index].alt : ""}
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
            aria-label="Show previous area image"
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
            aria-label="Show next area image"
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
                {activeImage + 1} / {areaImages.length}
              </span>
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default AreaCarousel;
