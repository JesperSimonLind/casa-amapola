import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import MotionReveal, { MotionStagger, MotionStaggerItem } from "./MotionReveal";
import aegean1 from "../assets/rooms/aegean-1.jpg";
import aegean2 from "../assets/rooms/aegean-2.jpeg";
import aegean3 from "../assets/rooms/aegean-3.jpeg";
import andalucia1 from "../assets/rooms/andalucia-1.jpg";
import andalucia2 from "../assets/rooms/andalucia-2.jpeg";
import andalucia3 from "../assets/rooms/andalucia-3.jpeg";
import hanoi1 from "../assets/rooms/hanoi-1.jpg";
import hanoi2 from "../assets/rooms/hanoi-2.jpeg";
import hanoi3 from "../assets/rooms/hanoi-3.jpeg";
import pequena1 from "../assets/rooms/pequena-1.jpg";
import pequena2 from "../assets/rooms/pequena-2.jpeg";
import RoomCard from "./RoomCard";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

const roomImageSets = [
  [hanoi1, hanoi2, hanoi3],
  [aegean1, aegean2, aegean3],
  [andalucia1, andalucia2, andalucia3],
  [pequena1, pequena2],
];
const roomBackgroundColors = [
  "rgb(250, 204, 107)",
  "rgb(105, 162, 176)",
  "rgb(101, 145, 87)",
  "rgb(255, 202, 177)",
];

function RoomsSection() {
  const { language } = useLanguage();
  const t = translations[language];
  const rooms = t.rooms.list.map((room, index) => ({
    ...room,
    images: roomImageSets[index],
    backgroundColor: roomBackgroundColors[index],
  }));

  return (
    <Box
      component="section"
      id="rooms"
      sx={{ backgroundColor: "#FCF9F5", py: { xs: 6, md: 8 } }}
    >
      <Container maxWidth="lg">
        <MotionReveal>
          <Typography
            variant="overline"
            sx={{
              display: "block",
              textAlign: "center",
              color: "#2F2C2A",
              fontWeight: 600,
              letterSpacing: "0.1em",
              fontSize: "0.8rem",
              mb: { xs: 3, md: 4 },
            }}
          >
            {t.rooms.overline}
          </Typography>
        </MotionReveal>

        <MotionStagger delayChildren={0.08} staggerChildren={0.1}>
          <Box
            sx={{
              display: { xs: "flex", sm: "grid" },
              gridTemplateColumns: {
                sm: "repeat(2, minmax(0, 1fr))",
                lg: "repeat(4, minmax(0, 1fr))",
              },
              gap: { xs: 2, md: 4 },
              overflowX: { xs: "auto", sm: "visible" },
              scrollSnapType: { xs: "x mandatory", sm: "none" },
              scrollbarWidth: { xs: "none", sm: "auto" },
              msOverflowStyle: { xs: "none", sm: "auto" },
              px: { xs: 0.2, sm: 0 },
              pb: { xs: 1, sm: 0 },
              "&::-webkit-scrollbar": {
                display: { xs: "none", sm: "initial" },
              },
              "& > *": {
                scrollSnapAlign: { xs: "start", sm: "none" },
                flex: { xs: "0 0 82%", sm: "none" },
              },
            }}
          >
            {rooms.map((room) => (
              <MotionStaggerItem key={room.title}>
                <RoomCard
                  {...room}
                  fromLabel={t.rooms.from}
                  nightLabel={t.rooms.night}
                />
              </MotionStaggerItem>
            ))}
          </Box>
        </MotionStagger>
      </Container>
    </Box>
  );
}

export default RoomsSection;
