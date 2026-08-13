import * as React from "react";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import Box from "@mui/material/Box";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Typography from "@mui/material/Typography";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

const itemTemplates = [
  {
    icon: (
      <BedOutlinedIcon
        sx={{ fontSize: { xs: 26, md: 20 }, color: { xs: "#333", md: "#fff" } }}
      />
    ),
  },
  {
    icon: (
      <WbSunnyOutlinedIcon
        sx={{ fontSize: { xs: 26, md: 20 }, color: { xs: "#333", md: "#fff" } }}
      />
    ),
  },
  {
    icon: (
      <LocationOnOutlinedIcon
        sx={{ fontSize: { xs: 26, md: 20 }, color: { xs: "#333", md: "#fff" } }}
      />
    ),
  },
];

function HeroInfoRow() {
  const { language } = useLanguage();
  const t = translations[language];
  const items = itemTemplates.map((item, index) => ({
    ...item,
    label: t.heroInfoItems[index],
  }));

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: { xs: "nowrap", md: "wrap" },
        gap: { xs: 0, md: 3 },
        mt: { xs: 2.4, md: "48px" },
        backgroundColor: { xs: "#FBF8F5", md: "transparent" },
        color: { xs: "#2F2C2A", md: "#fff" },
        borderRadius: { xs: "16px 16px 0 0", md: 0 },
        overflow: "hidden",
        border: { xs: "1px solid #ECE6DD", md: "none" },
      }}
    >
      {items.map((item) => (
        <Box
          key={item.label}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { xs: 0.8, md: 1.5 },
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
            textAlign: "center",
            px: { xs: 1.2, md: 0 },
            py: { xs: 1.35, md: 0 },
            flex: { xs: "1 1 0", md: "0 0 auto" },
            borderRight: { xs: "1px solid #EFE9DF", md: "none" },
            "&:last-of-type": {
              borderRight: "none",
            },
          }}
        >
          <Box
            sx={{
              width: { xs: 30, md: 40 },
              height: { xs: 30, md: 40 },
              borderRadius: { xs: 0, md: "50%" },
              border: { xs: "none", md: "1px solid rgba(255,255,255,0.8)" },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {item.icon}
          </Box>
          <Typography
            sx={{
              color: { xs: "#4A4742", md: "#fff" },
              fontWeight: { xs: 500, md: 500 },
              fontSize: { xs: "0.72rem", md: "0.98rem" },
              lineHeight: 1.25,
              maxWidth: { xs: 88, md: "none" },
            }}
          >
            {item.label}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}

export default HeroInfoRow;
