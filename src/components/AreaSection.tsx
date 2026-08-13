import * as React from "react";
import HikingOutlinedIcon from "@mui/icons-material/HikingOutlined";
import LiquorOutlinedIcon from "@mui/icons-material/LiquorOutlined";
import MuseumOutlinedIcon from "@mui/icons-material/MuseumOutlined";
import UmbrellaOutlinedIcon from "@mui/icons-material/UmbrellaOutlined";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import beachesImage from "../assets/area/beaches.jpg";
import dayTripsImage from "../assets/area/day-trips.jpg";
import foodWineImage from "../assets/area/food-wine.jpg";
import natureHikingImage from "../assets/area/nature-hiking.jpg";

type AreaCard = {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
};

const areaCards: AreaCard[] = [
  {
    title: "Nature & Hiking",
    description: "Mountains, trails and breathtaking views",
    image: natureHikingImage,
    icon: (
      <HikingOutlinedIcon
        sx={{ fontSize: { xs: 22, md: 18 }, color: "#4A4A4A" }}
      />
    ),
  },
  {
    title: "Beaches",
    description: "Sunny beach close by",
    image: beachesImage,
    icon: (
      <UmbrellaOutlinedIcon
        sx={{ fontSize: { xs: 22, md: 18 }, color: "#4A4A4A" }}
      />
    ),
  },
  {
    title: "Food & Wine",
    description: "Tapas, restaurants and local vineyards",
    image: foodWineImage,
    icon: (
      <LiquorOutlinedIcon
        sx={{ fontSize: { xs: 22, md: 18 }, color: "#4A4A4A" }}
      />
    ),
  },
  {
    title: "Day Trips",
    description: "Museums and beautiful villages",
    image: dayTripsImage,
    icon: (
      <MuseumOutlinedIcon
        sx={{ fontSize: { xs: 22, md: 18 }, color: "#4A4A4A" }}
      />
    ),
  },
];

function AreaSection() {
  return (
    <Box
      component="section"
      id="area"
      sx={{
        backgroundColor: "#F5F1EB",
        py: { xs: 6, md: 8 },
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "0.72fr 1.88fr" },
            columnGap: { xs: 0, lg: 5 },
            rowGap: { xs: 5, lg: 0 },
            alignItems: "start",
          }}
        >
          <Box sx={{ maxWidth: 370 }}>
            <Typography
              sx={{
                fontSize: "0.82rem",
                color: "#2F2C2A",
                letterSpacing: "0.08em",
                mb: 1,
                fontWeight: 600,
              }}
            >
              EXPLORE THE AREA
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "2.1rem", md: "2.6rem" },
                lineHeight: 1.1,
                color: "#5A574F",
                mb: 2,
                fontWeight: 400,
              }}
            >
              Alhaurín el Grande & Andalusia
            </Typography>

            <Typography
              sx={{
                fontSize: "0.98rem",
                lineHeight: 1.7,
                color: "#2F2C2A",
                mb: 2,
              }}
            >
              A charming Spanish town at the foot of the Mijas mountains,
              surrounded by nature, history and culture.
            </Typography>

            <Typography
              sx={{
                fontSize: "0.98rem",
                lineHeight: 1.7,
                color: "#2F2C2A",
              }}
            >
              From beautiful beaches and mountain hikes to traditional villages,
              local markets and restaurants, everything is within easy reach.
            </Typography>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, minmax(0, 1fr))",
                lg: "repeat(4, minmax(0, 1fr))",
              },
              gap: { xs: 2, md: 2.2 },
            }}
          >
            {areaCards.map((card) => (
              <Box
                key={card.title}
                sx={{
                  position: "relative",
                  minHeight: { xs: 240, md: 300 },
                  overflow: "hidden",
                }}
              >
                <Box
                  component="img"
                  src={card.image}
                  alt={card.title}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />

                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(0, 0, 0, 0.82) 10%, rgba(0, 0, 0, 0.3) 58%, rgba(0, 0, 0, 0.16) 100%)",
                  }}
                />

                <Box
                  sx={{
                    position: "absolute",
                    left: "50%",
                    transform: "translateX(-50%)",
                    bottom: { xs: 20, md: 26 },
                    textAlign: "center",
                    width: "86%",
                  }}
                >
                  <Box
                    sx={{
                      width: { xs: 40, md: 34 },
                      height: { xs: 40, md: 34 },
                      borderRadius: "50%",
                      backgroundColor: "#F2EFEC",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: { xs: "0 auto 8px", md: "0 auto 5px" },
                    }}
                  >
                    {card.icon}
                  </Box>

                  <Typography
                    sx={{
                      color: "#fff",
                      fontWeight: 500,
                      fontSize: { xs: "1.12rem", md: "0.98rem" },
                      lineHeight: 1.25,
                      minHeight: { xs: 30, md: 36 },
                      display: "flex",
                      alignItems: "flex-end",
                      justifyContent: "center",
                    }}
                  >
                    {card.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#fff",
                      fontWeight: 400,
                      fontSize: { xs: "0.96rem", md: "0.82rem" },
                      lineHeight: 1.4,
                      mt: { xs: 0.35, md: 0.2 },
                      minHeight: { xs: 30, md: 34 },
                    }}
                  >
                    {card.description}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default AreaSection;
