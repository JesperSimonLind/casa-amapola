import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

import beachesImage from "../assets/area/beaches.jpg";
import dayTripsImage from "../assets/area/day-trips.jpg";
import foodWineImage from "../assets/area/food-wine.jpg";
import natureHikingImage from "../assets/area/nature-hiking.jpg";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

type AreaCard = {
  image: string;
};

const areaCards: AreaCard[] = [
  { image: natureHikingImage },
  { image: beachesImage },
  { image: foodWineImage },
  { image: dayTripsImage },
];

function AreaSection() {
  const { language } = useLanguage();
  const t = translations[language];
  const cards = areaCards.map((card, index) => ({
    ...card,
    title: t.area.cards[index].title,
    description: t.area.cards[index].description,
  }));

  return (
    <Box
      component="section"
      id="area"
      sx={{
        backgroundColor: "var(--page-background-deep)",
        py: { xs: 6, md: 8 },
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            maxWidth: 760,
          }}
          className="section-intro"
        >
          <Box
            sx={{
              textAlign: "left",
            }}
          >
            <Typography
              className="heading-font"
              sx={{
                fontSize: { xs: "1.2rem", md: "1.35rem" },
                color: "#2F2C2A",
                letterSpacing: "0.08em",
                mb: 1,
                fontWeight: 600,
              }}
            >
              {t.area.overline}
            </Typography>

            <Typography
              className="heading-font"
              sx={{
                fontSize: { xs: "2.1rem", md: "2.6rem" },
                lineHeight: 1.1,
                color: "#5A574F",
                mb: 2,
                fontWeight: 400,
              }}
            >
              {t.area.title}
            </Typography>

            <Typography
              sx={{
                fontSize: "0.98rem",
                lineHeight: 1.7,
                color: "#2F2C2A",
                mb: 2,
              }}
            >
              {t.area.paragraph1}
            </Typography>

            <Typography
              sx={{
                fontSize: "0.98rem",
                lineHeight: 1.7,
                color: "#2F2C2A",
              }}
            >
              {t.area.paragraph2}
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, minmax(0, 1fr))",
              lg: "repeat(4, minmax(0, 1fr))",
            },
            columnGap: { xs: 2.5, md: 4 },
            rowGap: { xs: 3.5, md: 5 },
          }}
        >
          {cards.map((card) => (
            <Box
              component="figure"
              key={card.title}
              sx={{
                m: 0,
                minWidth: 0,
              }}
            >
              <Box
                component="img"
                src={card.image}
                alt={card.title}
                sx={{
                  aspectRatio: "3 / 2",
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  display: "block",
                }}
              />

              <Box component="figcaption" sx={{ pt: { xs: 1.5, md: 2 } }}>
                <Typography
                  className="heading-font"
                  sx={{
                    color: "#2F2C2A",
                    fontWeight: 500,
                    fontSize: { xs: "1.35rem", md: "1.55rem" },
                    lineHeight: 1.2,
                  }}
                >
                  {card.title}
                </Typography>
                <Typography
                  sx={{
                    color: "#2F2C2A",
                    fontWeight: 400,
                    fontSize: { xs: "0.96rem", md: "1rem" },
                    lineHeight: 1.6,
                    mt: 0.5,
                  }}
                >
                  {card.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>

        <Box
          sx={{
            mt: { xs: 5, md: 7 },
            pt: { xs: 3, md: 4 },
            borderTop: "1px solid rgba(47, 44, 42, 0.18)",
            textAlign: "center",
          }}
        >
          <Typography
            className="heading-font"
            sx={{
              color: "#2F2C2A",
              fontSize: { xs: "1.45rem", md: "1.7rem" },
              lineHeight: 1.2,
              mb: 0.8,
            }}
          >
            {t.area.ctaTitle}
          </Typography>
          <Typography
            sx={{
              color: "#2F2C2A",
              fontSize: "0.98rem",
              lineHeight: 1.65,
              maxWidth: 620,
              mx: "auto",
              mb: 1.6,
            }}
          >
            {t.area.ctaDescription}
          </Typography>
          <Link
            href="#contact"
            underline="none"
            sx={{
              color: "#4B5134",
              fontSize: "1rem",
              fontWeight: 600,
              borderBottom: "1px solid currentColor",
              pb: 0.25,
              "&:hover": { color: "#40472e" },
            }}
          >
            {t.area.ctaLink}
          </Link>
        </Box>
      </Container>
    </Box>
  );
}

export default AreaSection;
