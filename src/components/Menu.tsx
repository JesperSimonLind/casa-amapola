import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";

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

  const handleLanguageChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value);
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
          ml: { xs: -0.5, md: -45 },
          minWidth: "auto",
          fontSize: { xs: "1.08rem", md: "1.55rem" },
          display: "inline-flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Box
          component="img"
          src={logoImage}
          alt="Casa Amapola logo"
          sx={{
            width: { xs: 28, md: 36 },
            height: "auto",
            display: "block",
          }}
        />
        <Box component="span">CASA AMAPOLA</Box>
      </Button>
      <List
        disablePadding
        sx={{
          display: "flex",
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
    </Box>
  );
}

export default Menu;
