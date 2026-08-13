import * as React from "react";
import AcUnitOutlinedIcon from "@mui/icons-material/AcUnitOutlined";
import CoffeeOutlinedIcon from "@mui/icons-material/CoffeeOutlined";
import CountertopsOutlinedIcon from "@mui/icons-material/CountertopsOutlined";
import FamilyRestroomOutlinedIcon from "@mui/icons-material/FamilyRestroomOutlined";
import LocalLaundryServiceOutlinedIcon from "@mui/icons-material/LocalLaundryServiceOutlined";
import PhoneDisabledOutlinedIcon from "@mui/icons-material/PhoneDisabledOutlined";
import WifiIcon from "@mui/icons-material/Wifi";
import WeekendOutlinedIcon from "@mui/icons-material/WeekendOutlined";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

type ServiceItem = {
  title: string;
  description: string;
  icon: React.ReactNode;
  emphasized?: boolean;
};

const services: ServiceItem[] = [
  {
    title: "Four Rooms",
    description:
      "Four rooms during spring and summer. Three rooms during autumn and winter. See each room for number of beds.",
    icon: <WeekendOutlinedIcon sx={{ fontSize: 24, color: "#2F2F2F" }} />,
  },
  {
    title: "TV & Telephone",
    description: "No TV or telephone in the rooms. Enjoy each other :-)",
    icon: <PhoneDisabledOutlinedIcon sx={{ fontSize: 24, color: "#2F2F2F" }} />,
  },
  {
    title: "Air Conditioning",
    description:
      "All rooms have AC for warm summer days and heating for cool winter days.",
    icon: <AcUnitOutlinedIcon sx={{ fontSize: 24, color: "#2F2F2F" }} />,
  },
  {
    title: "Beach Towels",
    description:
      "We also offer beach towels for your relaxing days at the beach or lakes.",
    icon: (
      <LocalLaundryServiceOutlinedIcon
        sx={{ fontSize: 24, color: "#2F2F2F" }}
      />
    ),
  },
  {
    title: "Tea & Coffee",
    description:
      "Tea and coffee are available whenever you wish in the shared kitchen.",
    icon: <CoffeeOutlinedIcon sx={{ fontSize: 24, color: "#2F2F2F" }} />,
  },
  {
    title: "Family Room",
    description:
      "One of the rooms is a family room with space for four people.",
    icon: (
      <FamilyRestroomOutlinedIcon sx={{ fontSize: 24, color: "#2F2F2F" }} />
    ),
  },
  {
    title: "Free Wi-Fi",
    description:
      "Free access to WiFi in the whole area of the Bed & Breakfast.",
    icon: <WifiIcon sx={{ fontSize: 24, color: "#2F2F2F" }} />,
  },
  {
    title: "Bathroom Essentials",
    description:
      "Hair-dryer, shampoo, shower gel, towels, robe and slippers in all rooms.",
    icon: <CountertopsOutlinedIcon sx={{ fontSize: 24, color: "#2F2F2F" }} />,
    emphasized: true,
  },
  {
    title: "Shared Kitchen",
    description:
      "Fully equipped kitchen for you to prepare your own lunch and/or dinner.",
    icon: <CountertopsOutlinedIcon sx={{ fontSize: 24, color: "#2F2F2F" }} />,
  },
];

function ServicesSection() {
  return (
    <Box
      component="section"
      id="services"
      sx={{
        backgroundColor: "#FCF9F5",
        py: { xs: 6, md: 7 },
      }}
    >
      <Container maxWidth="xl">
        <Typography
          sx={{
            textAlign: "center",
            color: "#2F2C2A",
            fontSize: "0.9rem",
            letterSpacing: "0.09em",
            mb: { xs: 3, md: 2.5 },
            fontWeight: 600,
          }}
        >
          OUR SERVICES
        </Typography>

        <Box
          sx={{
            display: { xs: "flex", sm: "grid", lg: "flex" },
            gridTemplateColumns: {
              sm: "repeat(2, minmax(0, 1fr))",
            },
            gap: { xs: 2, md: 2 },
            flexWrap: { lg: "wrap" },
            justifyContent: { lg: "center" },
            overflowX: { xs: "auto", sm: "visible" },
            scrollSnapType: { xs: "x mandatory", sm: "none" },
            px: { xs: 0.2, sm: 0 },
            pb: { xs: 1, sm: 0 },
            scrollbarWidth: { xs: "none", sm: "auto" },
            msOverflowStyle: { xs: "none", sm: "auto" },
            "&::-webkit-scrollbar": {
              display: { xs: "none", sm: "initial" },
            },
          }}
        >
          {services.map((service) => (
            <Box
              key={service.title}
              sx={{
                flex: {
                  xs: "0 0 84%",
                  sm: "none",
                  lg: "0 0 calc((100% - 64px) / 5)",
                },
                scrollSnapAlign: { xs: "start", sm: "none" },
                minHeight: { xs: 158, md: 186 },
                px: { xs: 1.2, md: 2.25 },
                py: { xs: 1.4, md: 2.4 },
                backgroundColor: service.emphasized ? "#FBF8F5" : "#FCF9F5",
                border: { xs: "1px solid #EFE8DF", md: "1px solid #F4EEE7" },
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                maxWidth: { lg: "calc((100% - 64px) / 5)" },
              }}
            >
              <Box
                sx={{
                  height: { xs: 25, md: 28 },
                  display: "flex",
                  alignItems: "center",
                  mb: { xs: 0.7, md: 1.25 },
                }}
              >
                {service.icon}
              </Box>

              <Typography
                sx={{
                  color: "#2F2C2A",
                  fontSize: { xs: "0.92rem", md: "1.08rem" },
                  lineHeight: 1.2,
                  mb: { xs: 0.45, md: 1 },
                  fontWeight: 500,
                  minHeight: { xs: 36, md: 42 },
                  display: "flex",
                  alignItems: "flex-end",
                }}
              >
                {service.title}
              </Typography>

              <Typography
                sx={{
                  color: "#403F3C",
                  fontSize: { xs: "0.76rem", md: "0.86rem" },
                  lineHeight: { xs: 1.45, md: 1.55 },
                  maxWidth: { xs: 142, md: 170 },
                  minHeight: { xs: 68, md: 80 },
                }}
              >
                {service.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default ServicesSection;
