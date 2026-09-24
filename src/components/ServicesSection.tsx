import * as React from "react";
import AcUnitOutlinedIcon from "@mui/icons-material/AcUnitOutlined";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
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
import { motion } from "motion/react";
import MotionReveal from "./MotionReveal";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

type ServiceItem = {
  icon: React.ReactNode;
};

const services: ServiceItem[] = [
  {
    icon: <WeekendOutlinedIcon sx={{ fontSize: 24, color: "#2F2F2F" }} />,
  },
  {
    icon: <BedOutlinedIcon sx={{ fontSize: 24, color: "#2F2F2F" }} />,
  },
  {
    icon: <PhoneDisabledOutlinedIcon sx={{ fontSize: 24, color: "#2F2F2F" }} />,
  },
  {
    icon: <AcUnitOutlinedIcon sx={{ fontSize: 24, color: "#2F2F2F" }} />,
  },
  {
    icon: (
      <LocalLaundryServiceOutlinedIcon
        sx={{ fontSize: 24, color: "#2F2F2F" }}
      />
    ),
  },
  {
    icon: <CoffeeOutlinedIcon sx={{ fontSize: 24, color: "#2F2F2F" }} />,
  },
  {
    icon: (
      <FamilyRestroomOutlinedIcon sx={{ fontSize: 24, color: "#2F2F2F" }} />
    ),
  },
  {
    icon: <WifiIcon sx={{ fontSize: 24, color: "#2F2F2F" }} />,
  },
  {
    icon: <CountertopsOutlinedIcon sx={{ fontSize: 24, color: "#2F2F2F" }} />,
  },
  {
    icon: <CountertopsOutlinedIcon sx={{ fontSize: 24, color: "#2F2F2F" }} />,
  },
];

function ServicesSection() {
  const { language } = useLanguage();
  const t = translations[language];
  const localizedServices = services.map((service, index) => ({
    ...service,
    ...t.services.list[index],
  }));
  const firstColumnServices = localizedServices.slice(0, 5);
  const secondColumnServices = localizedServices.slice(5);

  const renderServiceList = (serviceList: typeof localizedServices) => (
    <Box component="ul" sx={{ listStyle: "none", m: 0, p: 0 }}>
      {serviceList.map((service) => (
        <Box
          key={service.title}
          component={motion.li}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "32px minmax(0, 1fr)",
              sm: "1fr",
              md: "32px minmax(0, 1fr)",
            },
            columnGap: 1.5,
            py: { xs: 1.4, md: 1.7 },
            borderBottom: "1px solid rgba(47, 44, 42, 0.14)",
            "&:first-of-type": { pt: 0 },
            "&:last-child": { pb: 0, borderBottom: 0 },
          }}
        >
          <Box
            sx={{
              pt: 0.25,
              display: "flex",
              justifyContent: "center",
              mb: { sm: 0.5, md: 0 },
            }}
          >
            {service.icon}
          </Box>
          <Box sx={{ textAlign: { sm: "center", md: "left" } }}>
            <Typography
              sx={{
                color: "#2F2C2A",
                fontSize: { xs: "1rem", md: "1.05rem" },
                lineHeight: 1.25,
                mb: 0.45,
                fontWeight: 600,
              }}
            >
              {service.title}
            </Typography>
            <Typography
              sx={{
                color: "#403F3C",
                fontSize: { xs: "0.86rem", md: "0.92rem" },
                lineHeight: 1.55,
              }}
            >
              {service.description}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );

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
        <MotionReveal>
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
            {t.services.overline}
          </Typography>
        </MotionReveal>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1px 1fr" },
            columnGap: { xs: 0, md: 6 },
            rowGap: { xs: 4, md: 0 },
            maxWidth: 980,
            mx: "auto",
          }}
        >
          {renderServiceList(firstColumnServices)}
          <Box
            sx={{
              backgroundColor: "rgba(47, 44, 42, 0.18)",
              width: { xs: "100%", md: 1 },
              height: { xs: 1, md: "100%" },
            }}
          />
          {renderServiceList(secondColumnServices)}
        </Box>
      </Container>
    </Box>
  );
}

export default ServicesSection;
