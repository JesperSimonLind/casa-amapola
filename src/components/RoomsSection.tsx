import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import MotionReveal, { MotionStagger, MotionStaggerItem } from "./MotionReveal";
import room1 from "../assets/rooms/room-1.jpg";
import room2 from "../assets/rooms/room-2.jpg";
import room3 from "../assets/rooms/room-3.jpg";
import room4 from "../assets/rooms/room-4.jpg";
import RoomCard from "./RoomCard";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

const roomImages = [room1, room2, room3, room4];

function RoomsSection() {
  const { language } = useLanguage();
  const t = translations[language];
  const rooms = t.rooms.list.map((room, index) => ({
    ...room,
    image: roomImages[index],
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
