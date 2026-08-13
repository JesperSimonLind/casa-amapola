import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import room1 from "../assets/rooms/room-1.jpg";
import room2 from "../assets/rooms/room-2.jpg";
import room3 from "../assets/rooms/room-3.jpg";
import room4 from "../assets/rooms/room-4.jpg";
import RoomCard from "./RoomCard";

const rooms = [
  {
    image: room1,
    title: "Hanoi",
    description:
      "Our family suite inspired by the Aegean Sea with space for the whole family",
    guests: "2 Guests",
    bed: "1 Bed (1 double 160 x 200 cm)",
    size: "11 m²",
    price: "€75-€85",
  },
  {
    image: room2,
    title: "Aegean Sea",
    description:
      "Our family suite inspired by the Aegean Sea with space for the whole family",
    guests: "2 Guests",
    bed: "1 Bed (1 double 160 x 200 cm)",
    size: "12 m²",
    price: "€80-€90",
  },
  {
    image: room3,
    title: "Andalucia",
    description:
      "Our family suite inspired by the Aegean Sea with space for the whole family",
    guests: "2 Guests",
    bed: "1 Bed (1 double 160 x 200 cm)",
    size: "13 m²",
    price: "€85-€95",
  },
  {
    image: room4,
    title: "Pequeña Escandinavia",
    description:
      "A refined stay with natural materials, soft light, and a countryside feel.",
    guests: "2 Guests",
    bed: "1 Bed (1 double 160 x 200 cm)",
    size: "14 m²",
    price: "€90-€110",
  },
];

function RoomsSection() {
  return (
    <Box
      component="section"
      id="rooms"
      sx={{ backgroundColor: "#FCF9F5", py: { xs: 6, md: 8 } }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, minmax(0, 1fr))",
              lg: "repeat(4, minmax(0, 1fr))",
            },
            gap: { xs: 3, md: 4 },
            justifyItems: { xs: "center", sm: "stretch" },
          }}
        >
          {rooms.map((room) => (
            <RoomCard key={room.title} {...room} />
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default RoomsSection;
