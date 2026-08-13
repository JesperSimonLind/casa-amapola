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

const menuItems = [
  { label: "Home", href: "#home" },
  { label: "About us", href: "#about-us" },
  { label: "Rooms", href: "#rooms" },
  { label: "Services", href: "#services" },
  { label: "Area", href: "#area" },
  { label: "Contact", href: "#contact" },
];

const languageOptions = [
  { value: "English", label: "English", flag: "🇬🇧" },
  { value: "Spanish", label: "Spanish", flag: "🇪🇸" },
  { value: "Swedish", label: "Swedish", flag: "🇸🇪" },
];

function Menu() {
  const [language, setLanguage] = React.useState("English");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const handleLanguageChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value);
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
        pl: { xs: 0.5, md: 0 },
        pr: { xs: 2, md: "0px" },
      }}
    >
      <Button
        href="#home"
        disableRipple
        aria-label="Casa Amapola home"
        sx={{
          color: "#fff",
          fontWeight: 700,
          letterSpacing: "0.1em",
          textTransform: "none",
          p: 0,
          ml: { xs: -0.2, md: -45 },
          minWidth: "auto",
          fontSize: { xs: "0.95rem", md: "1.55rem" },
          display: "inline-flex",
          alignItems: "center",
          gap: { xs: 0.55, md: 1 },
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
        <Box component="span">CASA AMAPOLA</Box>
      </Button>

      <IconButton
        aria-label="Open menu"
        onClick={openMobileMenu}
        sx={{
          display: { xs: "inline-flex", md: "none" },
          color: "#fff",
          p: 0.4,
        }}
      >
        <MenuIcon sx={{ fontSize: 31 }} />
      </IconButton>

      <List
        disablePadding
        sx={{
          display: { xs: "none", md: "flex" },
          alignItems: "center",
          columnGap: "64px",
          listStyle: "none",
        }}
      >
        {menuItems.map((item) => (
          <ListItem key={item.href} disablePadding sx={{ width: "auto" }}>
            <Link
              href={item.href}
              underline="none"
              sx={{ color: "#fff", fontWeight: 500, fontSize: "1.1rem" }}
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
            MENU
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
          {menuItems.map((item) => (
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
              minWidth: 150,
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
