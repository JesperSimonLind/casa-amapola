import * as React from "react";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import Box from "@mui/material/Box";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Typography from "@mui/material/Typography";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";

const items = [
  {
    icon: <BedOutlinedIcon sx={{ fontSize: 20, color: "#fff" }} />,
    label: "4 Unique rooms",
  },
  {
    icon: <WbSunnyOutlinedIcon sx={{ fontSize: 20, color: "#fff" }} />,
    label: "Rooftop terrace",
  },
  {
    icon: <LocationOnOutlinedIcon sx={{ fontSize: 20, color: "#fff" }} />,
    label: "30 min from Malaga",
  },
];

function HeroInfoRow() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 3,
        mt: "48px",
      }}
    >
      {items.map((item) => (
        <Box
          key={item.label}
          sx={{ display: "flex", alignItems: "center", gap: 1.5 }}
        >
          <Box
            sx={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.8)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {item.icon}
          </Box>
          <Typography
            sx={{ color: "#fff", fontWeight: 500, fontSize: "0.98rem" }}
          >
            {item.label}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}

export default HeroInfoRow;
