import * as React from "react";
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

const areaImages = [
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
  const [activeImage, setActiveImage] = React.useState(0);

  const showPreviousImage = () => {
    setActiveImage(
      (currentImage) =>
        (currentImage + areaImages.length - 1) % areaImages.length,
    );
  };

  const showNextImage = () => {
    setActiveImage((currentImage) => (currentImage + 1) % areaImages.length);
  };

  return (
    <Box component="section" sx={{ backgroundColor: "#F5F1EB", pb: { xs: 6, md: 8 } }}>
      <Container maxWidth="xl">
        <Box
          sx={{
            position: "relative",
            maxWidth: 1080,
            height: { xs: 330, sm: 460, md: 560 },
            mx: "auto",
            overflow: "hidden",
            backgroundColor: "#D9D0C5",
          }}
        >
          <Box
            component="img"
            src={areaImages[activeImage]}
            alt={`Area image ${activeImage + 1}`}
            sx={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />

          <IconButton
            aria-label="Show previous area image"
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
            aria-label="Show next area image"
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
            <Typography component="span" sx={{ color: "#fff", fontSize: "0.8rem", lineHeight: 1 }}>
              {activeImage + 1} / {areaImages.length}
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default AreaCarousel;