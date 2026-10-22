import * as React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import SquareFootOutlinedIcon from "@mui/icons-material/SquareFootOutlined";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import { motion } from "motion/react";
import Typography from "@mui/material/Typography";

export type RoomCardProps = {
  images: string[];
  backgroundColor: string;
  title: string;
  description: string;
  bed: string;
  size: string;
  bathroom: string;
  seasonalAvailability?: string;
  price: string;
  fromLabel: string;
  nightLabel: string;
};

function RoomCard({
  images,
  backgroundColor,
  title,
  description,
  bed,
  size,
  bathroom,
  seasonalAvailability,
  price,
  fromLabel,
  nightLabel,
}: RoomCardProps) {
  const [activeImage, setActiveImage] = React.useState(0);
  const hasMultipleImages = images.length > 1;

  const showPreviousImage = () => {
    setActiveImage(
      (currentImage) => (currentImage + images.length - 1) % images.length,
    );
  };

  const showNextImage = () => {
    setActiveImage((currentImage) => (currentImage + 1) % images.length);
  };

  return (
    <Card
      component={motion.article}
      sx={{
        width: "100%",
        borderRadius: 0,
        overflow: "hidden",
        backgroundColor,
        boxShadow: "0 10px 28px rgba(46, 38, 28, 0.06)",
        border: "1px solid rgba(53, 53, 53, 0.08)",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Box
        sx={{
          position: "relative",
          height: { xs: 260, sm: 280 },
          backgroundColor: "#D9D0C5",
        }}
      >
        <CardMedia
          component="img"
          image={images[activeImage]}
          alt={title}
          sx={{
            height: "100%",
            width: "100%",
            objectFit: "fill",
            display: "block",
          }}
        />

        {hasMultipleImages && (
          <>
            <IconButton
              aria-label={`Show previous ${title} image`}
              onClick={showPreviousImage}
              sx={{
                position: "absolute",
                left: 8,
                top: "50%",
                transform: "translateY(-50%)",
                width: 32,
                height: 32,
                color: "#fff",
                backgroundColor: "rgba(0, 0, 0, 0.45)",
                "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.65)" },
              }}
            >
              <ArrowBackIosNewIcon sx={{ fontSize: 15 }} />
            </IconButton>

            <IconButton
              aria-label={`Show next ${title} image`}
              onClick={showNextImage}
              sx={{
                position: "absolute",
                right: 8,
                top: "50%",
                transform: "translateY(-50%)",
                width: 32,
                height: 32,
                color: "#fff",
                backgroundColor: "rgba(0, 0, 0, 0.45)",
                "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.65)" },
              }}
            >
              <ArrowForwardIosIcon sx={{ fontSize: 15 }} />
            </IconButton>

            <Box
              sx={{
                position: "absolute",
                bottom: 10,
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                gap: 0.5,
              }}
            >
              {images.map((image, index) => (
                <IconButton
                  key={image}
                  aria-label={`Show ${title} image ${index + 1}`}
                  aria-pressed={index === activeImage}
                  onClick={() => setActiveImage(index)}
                  sx={{ width: 18, height: 18, p: 0 }}
                >
                  <Box
                    component="span"
                    sx={{
                      width: index === activeImage ? 14 : 6,
                      height: 6,
                      borderRadius: 3,
                      backgroundColor:
                        index === activeImage
                          ? "#fff"
                          : "rgba(255, 255, 255, 0.65)",
                      transition: "width 180ms ease-out",
                    }}
                  />
                </IconButton>
              ))}
            </Box>
          </>
        )}
      </Box>

      <Box
        sx={{
          px: 2.1,
          pb: 2,
          pt: 1.5,
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
        }}
      >
        <Typography
          className="heading-font"
          sx={{
            fontSize: { xs: "1.8rem", sm: "1.45rem" },
            fontWeight: 500,
            color: "#1D1B19",
            lineHeight: 1.2,
            mb: 1,
            minHeight: { xs: 78, sm: 56 },
            display: "flex",
            alignItems: "flex-end",
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            color: "#2F2C2A",
            fontSize: "14px",
            lineHeight: 1.6,
            minHeight: { xs: 44, sm: 88 },
          }}
        >
          {description}
        </Typography>

        <Box
          sx={{
            display: "grid",
            gap: 0.9,
            mt: 1.8,
            color: "#2F2C2A",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              gap: 0.8,
              fontSize: "14px",
            }}
          >
            <BedOutlinedIcon
              aria-hidden="true"
              sx={{ fontSize: "1.35em", mt: "1px", flexShrink: 0 }}
            />
            <Typography sx={{ fontSize: "inherit", lineHeight: 1.6 }}>
              {bed}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.8,
              fontSize: "14px",
            }}
          >
            <SquareFootOutlinedIcon
              aria-hidden="true"
              sx={{ fontSize: "1.35em", flexShrink: 0 }}
            />
            <Typography sx={{ fontSize: "inherit", lineHeight: 1.6 }}>
              {size}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              gap: 0.8,
              fontSize: "14px",
            }}
          >
            <BathtubOutlinedIcon
              aria-hidden="true"
              sx={{ fontSize: "1.35em", mt: "1px", flexShrink: 0 }}
            />
            <Typography sx={{ fontSize: "inherit", lineHeight: 1.6 }}>
              {bathroom}
            </Typography>
          </Box>
          {seasonalAvailability && (
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                gap: 0.8,
                fontSize: "14px",
              }}
            >
              <CalendarMonthOutlinedIcon
                aria-hidden="true"
                sx={{ fontSize: "1.35em", mt: "1px", flexShrink: 0 }}
              />
              <Typography sx={{ fontSize: "inherit", lineHeight: 1.6 }}>
                {seasonalAvailability}
              </Typography>
            </Box>
          )}
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "flex-end",
            gap: 0.6,
            mt: "auto",
            pt: 2,
          }}
        >
          <Typography sx={{ fontSize: "14px", color: "#2F2C2A" }}>
            {fromLabel}
          </Typography>
          <Typography
            sx={{ fontSize: "1.4rem", color: "#1D1B19", fontWeight: 600 }}
          >
            {price}
          </Typography>
          <Typography sx={{ fontSize: "14px", color: "#2F2C2A" }}>
            {nightLabel}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
}

export default RoomCard;
