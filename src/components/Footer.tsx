import * as React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <Box
      component="footer"
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "minmax(0, 1fr) 800px" },
        minHeight: 96,
        backgroundColor: "#484B37",
      }}
    >
      <Box
        sx={{
          order: { xs: 2, md: 1 },
          backgroundColor: "#484B37",
          borderRight: "1px solid #3E412F",
          px: { xs: 2.5, md: 3.5 },
          py: { xs: 2.2, md: 1.8 },
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr 1fr" },
          gap: { xs: 2.2, sm: 2.6 },
          alignItems: { xs: "center", md: "start" },
        }}
      >
        <Box
          sx={{
            pr: { sm: 2 },
            borderRight: { sm: "1px solid rgba(196, 194, 181, 0.32)" },
          }}
        >
          <Typography sx={{ color: "#E7E4D8", fontSize: "1.2rem", mb: 1 }}>
            CASA AMAPOLA
          </Typography>
          <Typography
            sx={{ color: "#D2CFBF", fontSize: "0.94rem", lineHeight: 1.6 }}
          >
            Casa Amapola
            <br />
            Calle Nueva 75
            <br />
            29120 Alhaurín el Grande
            <br />
            España / Spain
          </Typography>
          <Link
            href="mailto:casa_amapola@hotmail.com"
            underline="always"
            sx={{
              color: "#F1EEDC",
              fontSize: "0.94rem",
              mt: 0.7,
              display: "inline-block",
            }}
          >
            casa_amapola@hotmail.com
          </Link>
        </Box>

        <Box
          sx={{
            px: { sm: 2 },
            borderRight: { sm: "1px solid rgba(196, 194, 181, 0.32)" },
          }}
        >
          <Typography sx={{ color: "#E7E4D8", fontSize: "1.18rem", mb: 0.8 }}>
            {t.footer.reservationTitle}
          </Typography>
          <Typography sx={{ color: "#D6D2C3", fontSize: "0.94rem", mb: 0.2 }}>
            {t.footer.reservationText}
          </Typography>
          <Link
            component={motion.a}
            href="https://www.booking.com/hotel/es/casa-amapola-alhaurin-el-grande.sv.html?aid=304142&checkin=2024-08-09&checkout=2024-08-12&dest_id=-370199&dest_type=city&group_adults=2&group_children=0&label=gen173nr-1BCAEoggI46AdIM1gEaEaIAQKYAQm4ARjIARHYAQHoAQGIAgGoAgS4ArGQ6LQGwAIB0gIkYWEzM2M3NmEtZmRlNC00ZWYzLWE4NTgtMTYyNGRhM2M3ZWY02AIF4AIB-Share-KvyqHx%401721370970&no_rooms=1&req_adults=2&req_children=0&chal_t=1786619631022&force_referer=https%3A%2F%2Fwidershadeofpale.casaamapola.nu%2F"
            target="_blank"
            rel="noopener noreferrer"
            underline="none"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            sx={{
              mt: 0.8,
              width: "fit-content",
              border: "1px solid #928E81",
              px: 1.15,
              py: 0.6,
              backgroundColor: "#454537",
              display: "inline-block",
              transformOrigin: "center",
            }}
          >
            <Typography
              component="span"
              sx={{ color: "#EEEADB", fontSize: "1.2rem", lineHeight: 1 }}
            >
              Booking.
              <Box component="span" sx={{ color: "#6D8ABA" }}>
                com
              </Box>
            </Typography>
          </Link>
        </Box>

        <Box sx={{ pl: { sm: 2 } }}>
          <Typography sx={{ color: "#E7E4D8", fontSize: "1.08rem", mb: 0.9 }}>
            {t.footer.followUs}
          </Typography>
          <Link
            href="https://www.instagram.com/amapolaalhaurin"
            target="_blank"
            rel="noopener noreferrer"
            underline="none"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.8,
              color: "#D6D2C3",
              width: "fit-content",
            }}
          >
            <InstagramIcon sx={{ color: "#E6E4D8", fontSize: 20 }} />
            <Typography sx={{ color: "inherit", fontSize: "0.94rem" }}>
              amapolaalhaurin
            </Typography>
          </Link>
        </Box>
      </Box>

      <Box
        sx={{
          order: { xs: 1, md: 2 },
          height: { xs: 240, md: 200 },
          borderTop: { xs: "1px solid #3E412F", md: "none" },
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Box
          component="iframe"
          title={t.footer.mapTitle}
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7044.482974363632!2d-4.691286!3d36.643718!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72e7004687711f%3A0x1a2bbc501c461810!2sCasa%20Amapola!5e1!3m2!1ssv!2sse!4v1786618772868!5m2!1ssv!2sse"
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          width="600"
          height="450"
          sx={{
            border: 0,
            width: "100%",
            height: "100%",
            display: "block",
            position: "absolute",
            inset: 0,
          }}
        />
      </Box>
    </Box>
  );
}

export default Footer;
