import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

import logoImage from "../assets/logo.png";
import { useLanguage } from "../context/LanguageContext";
import { languageOptions, translations } from "../i18n/translations";

function Menu() {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const handleLanguageChange = (event: SelectChangeEvent) => {
    setLanguage(
      event.target.value as (typeof languageOptions)[number]["value"],
    );
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const openMobileMenu = () => {
    setIsMobileMenuOpen(true);
  };

  return (
    <Box
      component="nav"
      aria-label="Main navigation"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        minWidth: 0,
        pl: { xs: 0.5, md: 0 },
        pr: { xs: 2, md: "0px" },
      }}
    >
      <Button
        href="#home"
        disableRipple
        aria-label="Casa Amapola home"
        sx={{
          color: "#000",
          fontWeight: 700,
          letterSpacing: "0.1em",
          textTransform: "none",
          p: 0,
          ml: 0,
          minWidth: "auto",
          fontSize: { xs: "0.95rem", md: "1.55rem" },
          display: "inline-flex",
          alignItems: "center",
          gap: { xs: 0.55, md: 1 },
          flexShrink: 0,
          maxWidth: { xs: "calc(100% - 52px)", lg: "none" },
          overflow: "hidden",
          whiteSpace: "nowrap",
        }}
      >
        <Box
          component="img"
          src={logoImage}
          alt="Casa Amapola logo"
          sx={{
            width: { xs: 24, md: 36 },
            height: "auto",
            display: "block",
          }}
        />
        <Box
          component="span"
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          CASA AMAPOLA
        </Box>
      </Button>

      <IconButton
        aria-label="Open menu"
        onClick={openMobileMenu}
        sx={{
          display: { xs: "inline-flex", lg: "none" },
          color: "#000",
          p: 0.4,
          flexShrink: 0,
        }}
      >
        <MenuIcon sx={{ fontSize: 31 }} />
      </IconButton>

      <List
        disablePadding
        sx={{
          display: { xs: "none", lg: "flex" },
          alignItems: "center",
          columnGap: { lg: "28px", xl: "64px" },
          listStyle: "none",
          flexShrink: 1,
          minWidth: 0,
        }}
      >
        {t.menuItems.map((item) => (
          <ListItem key={item.href} disablePadding sx={{ width: "auto" }}>
            <Link
              href={item.href}
              underline="none"
              sx={{
                position: "relative",
                color: "#000",
                fontWeight: 500,
                fontSize: "1.1rem",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  left: 0,
                  right: 0,
                  bottom: -5,
                  height: 1,
                  backgroundColor: "#000",
                  transform: "scaleX(0)",
                  transformOrigin: "left",
                  transition: "transform 180ms ease-out",
                },
                "&:hover::after": {
                  transform: "scaleX(1)",
                },
              }}
            >
              {item.label}
            </Link>
          </ListItem>
        ))}
        <ListItem disablePadding sx={{ width: "auto" }}>
          <FormControl
            size="small"
            sx={{
              minWidth: 128,
              "& .MuiInputBase-root": {
                color: "#fff",
                fontSize: "0.95rem",
                backgroundColor: "rgba(24, 24, 24, 0.52)",
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(255, 255, 255, 0.82)",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#fff",
              },
              "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#fff",
              },
              "& .MuiSvgIcon-root": {
                color: "#fff",
              },
            }}
          >
            <Select
              value={language}
              onChange={handleLanguageChange}
              aria-label="Select language"
              MenuProps={{ disableScrollLock: true }}
              renderValue={(selected) => {
                const selectedLanguage = languageOptions.find(
                  (option) => option.value === selected,
                );

                return selectedLanguage
                  ? `${selectedLanguage.flag} ${selectedLanguage.label}`
                  : selected;
              }}
            >
              {languageOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.flag} {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </ListItem>
      </List>

      <Drawer
        anchor="top"
        open={isMobileMenuOpen}
        onClose={closeMobileMenu}
        slotProps={{
          paper: {
            sx: {
              width: "100%",
              maxWidth: "100%",
              boxSizing: "border-box",
              backgroundColor: "rgba(63, 70, 50, 0.98)",
              color: "#F1EEDC",
              borderBottomLeftRadius: 18,
              borderBottomRightRadius: 18,
              pl: "max(16px, env(safe-area-inset-left))",
              pr: "max(16px, env(safe-area-inset-right))",
              pt: "calc(env(safe-area-inset-top) + 10px)",
              pb: 2.3,
              boxShadow: "0 12px 30px rgba(0,0,0,0.35)",
            },
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 1.1,
          }}
        >
          <Box
            sx={{
              fontSize: "0.86rem",
              letterSpacing: "0.08em",
              fontWeight: 600,
            }}
          >
            {t.menuHeading}
          </Box>
          <IconButton
            aria-label="Close menu"
            onClick={closeMobileMenu}
            sx={{ color: "#F1EEDC", p: 0.4 }}
          >
            <CloseIcon sx={{ fontSize: 24 }} />
          </IconButton>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 0.25 }}>
          {t.menuItems.map((item) => (
            <Button
              key={item.href}
              href={item.href}
              onClick={closeMobileMenu}
              sx={{
                justifyContent: "flex-start",
                color: "#F1EEDC",
                fontSize: "1.06rem",
                fontWeight: 600,
                textTransform: "none",
                py: 0.9,
                px: 0,
                borderBottom: "1px solid rgba(241, 238, 220, 0.16)",
                borderRadius: 0,
              }}
            >
              {item.label}
            </Button>
          ))}

          <FormControl
            size="small"
            sx={{
              mt: 1.4,
              width: "100%",
              maxWidth: 190,
              "& .MuiInputBase-root": {
                color: "#F1EEDC",
                fontSize: "0.95rem",
                backgroundColor: "rgba(0, 0, 0, 0.22)",
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(241, 238, 220, 0.35)",
              },
              "& .MuiSvgIcon-root": {
                color: "#F1EEDC",
              },
            }}
          >
            <Select
              value={language}
              onChange={handleLanguageChange}
              aria-label="Select language"
              MenuProps={{
                disableScrollLock: true,
                slotProps: {
                  paper: {
                    sx: {
                      maxWidth: "calc(100vw - 32px)",
                    },
                  },
                },
              }}
              renderValue={(selected) => {
                const selectedLanguage = languageOptions.find(
                  (option) => option.value === selected,
                );

                return selectedLanguage
                  ? `${selectedLanguage.flag} ${selectedLanguage.label}`
                  : selected;
              }}
            >
              {languageOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.flag} {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Drawer>
    </Box>
  );
}

export default Menu;
