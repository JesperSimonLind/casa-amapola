import * as React from "react";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import SquareFootOutlinedIcon from "@mui/icons-material/SquareFootOutlined";
import Typography from "@mui/material/Typography";

export type RoomCardProps = {
  image: string;
  title: string;
  description: string;
  guests: string;
  bed: string;
  size: string;
  price: string;
};

function RoomCard({
  image,
  title,
  description,
  guests,
  bed,
  size,
  price,
}: RoomCardProps) {
  return (
    <Card
      sx={{
        width: { xs: "100%", sm: 260 },
        borderRadius: 0,
        overflow: "hidden",
        backgroundColor: "#F7F4F1",
        boxShadow: "none",
        border: "1px solid rgba(53, 53, 53, 0.08)",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <CardMedia
        component="img"
        image={image}
        alt={title}
        sx={{
          height: 180,
          width: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />

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
          sx={{
            fontSize: "1.45rem",
            fontWeight: 500,
            color: "#1D1B19",
            lineHeight: 1.2,
            mb: 1,
            minHeight: { xs: 28, sm: 56 },
            display: "flex",
            alignItems: "flex-end",
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            color: "#2F2C2A",
            fontSize: "0.92rem",
            lineHeight: 1.6,
            minHeight: { xs: 44, sm: 88 },
          }}
        >
          {description}
        </Typography>

        <Box
          sx={{ mt: 2, pt: 1.5, borderTop: "1px solid rgba(53,53,53,0.12)" }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 0.8 }}>
            <PeopleAltOutlinedIcon sx={{ fontSize: 17, color: "#1D1B19" }} />
            <Typography sx={{ fontSize: "0.9rem", color: "#1D1B19" }}>
              {guests}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 0.8 }}>
            <BedOutlinedIcon sx={{ fontSize: 17, color: "#1D1B19" }} />
            <Typography sx={{ fontSize: "0.9rem", color: "#1D1B19" }}>
              {bed}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <SquareFootOutlinedIcon sx={{ fontSize: 17, color: "#1D1B19" }} />
            <Typography sx={{ fontSize: "0.9rem", color: "#1D1B19" }}>
              {size}
            </Typography>
          </Box>
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
          <Typography sx={{ fontSize: "0.84rem", color: "#2F2C2A" }}>
            From
          </Typography>
          <Typography
            sx={{ fontSize: "1.4rem", color: "#1D1B19", fontWeight: 600 }}
          >
            {price}
          </Typography>
          <Typography sx={{ fontSize: "0.84rem", color: "#2F2C2A" }}>
            /night
          </Typography>
        </Box>
      </Box>
    </Card>
  );
}

export default RoomCard;
