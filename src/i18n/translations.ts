export type Language = "English" | "Spanish" | "Swedish";

export const languageOptions: Array<{
  value: Language;
  label: string;
  flag: string;
}> = [
  { value: "English", label: "English", flag: "🇬🇧" },
  { value: "Spanish", label: "Spanish", flag: "🇪🇸" },
  { value: "Swedish", label: "Swedish", flag: "🇸🇪" },
];

type LocalizedText = {
  menuHeading: string;
  menuItems: Array<{ label: string; href: string }>;
  contactButton: string;
  hero: {
    welcome: string;
    description: string;
    exploreRooms: string;
  };
  heroInfoItems: string[];
  about: {
    overline: string;
    titleLine1: string;
    titleLine2: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
  };
  rooms: {
    overline: string;
    from: string;
    night: string;
    list: Array<{
      title: string;
      description: string;
      guests: string;
      bed: string;
      size: string;
      price: string;
    }>;
  };
  area: {
    overline: string;
    title: string;
    paragraph1: string;
    paragraph2: string;
    cards: Array<{ title: string; description: string }>;
  };
  services: {
    overline: string;
    list: Array<{
      title: string;
      description: string;
      emphasized?: boolean;
    }>;
  };
  preFooter: {
    extrasTitle: string;
    extrasParagraph1: string;
    extrasParagraph2: string;
    extrasParagraph3: string;
    hostsTitle: string;
    hostsParagraph1: string;
    hostsParagraph2: string;
    hostsParagraph3: string;
    hostsSignature: string;
  };
  footer: {
    reservationTitle: string;
    reservationText: string;
    followUs: string;
    mapTitle: string;
  };
};

export const translations: Record<Language, LocalizedText> = {
  English: {
    menuHeading: "MENU",
    menuItems: [
      { label: "Home", href: "#home" },
      { label: "About us", href: "#about-us" },
      { label: "Rooms", href: "#rooms" },
      { label: "Services", href: "#services" },
      { label: "Area", href: "#area" },
      { label: "Contact", href: "#contact" },
    ],
    contactButton: "Contact us",
    hero: {
      welcome: "Welcome to",
      description:
        "A charming Bed & Breakfast in the heart of Alhaurín el Grande, Andalusia, Spain.",
      exploreRooms: "Explore our rooms",
    },
    heroInfoItems: ["4 unique rooms", "Rooftop terrace", "30 min from Málaga"],
    about: {
      overline: "ABOUT US",
      titleLine1: "Living life on the",
      titleLine2: "sunshine side",
      paragraph1:
        "Casa Amapola is a charming boutique Bed & Breakfast in the heart of Alhaurín el Grande. Stay in one of our four thoughtfully designed rooms and experience authentic Andalusian hospitality.",
      paragraph2:
        "Relax on our rooftop terrace overlooking the beautiful Guadalhorce Valley, just moments from cafés, tapas bars, and the local atmosphere.",
      paragraph3:
        "A peaceful retreat where traditional Spanish charm meets modern comfort, offering a warm and memorable stay in the heart of Andalusia.",
    },
    rooms: {
      overline: "OUR ROOMS",
      from: "From",
      night: "/night",
      list: [
        {
          title: "Hanoi",
          description:
            "Our cosy room with a calm atmosphere and carefully selected details.",
          guests: "2 guests",
          bed: "1 bed (double bed, 160 x 200 cm)",
          size: "11 m²",
          price: "€75–€85",
        },
        {
          title: "Aegean Sea",
          description:
            "A bright room inspired by coastal tones and relaxed Mediterranean living.",
          guests: "2 guests",
          bed: "1 bed (double bed, 160 x 200 cm)",
          size: "12 m²",
          price: "€80–€90",
        },
        {
          title: "Andalucía",
          description:
            "Warm natural textures and an inviting setting inspired by southern Spain.",
          guests: "2 guests",
          bed: "1 bed (double bed, 160 x 200 cm)",
          size: "13 m²",
          price: "€85–€95",
        },
        {
          title: "Pequeña Escandinavia",
          description:
            "A refined stay with natural materials, soft light, and a relaxed countryside feel.",
          guests: "2 guests",
          bed: "1 bed (double bed, 160 x 200 cm)",
          size: "14 m²",
          price: "€90–€110",
        },
      ],
    },
    area: {
      overline: "EXPLORE THE AREA",
      title: "Alhaurín el Grande & Andalusia",
      paragraph1:
        "A charming Spanish town at the foot of the Mijas Mountains, surrounded by nature, history, and culture.",
      paragraph2:
        "From beautiful beaches and mountain hikes to traditional villages, local markets, and restaurants, everything is within easy reach.",
      cards: [
        {
          title: "Nature & Hiking",
          description: "Mountains, trails, and breathtaking views",
        },
        {
          title: "Beaches",
          description: "Sunny beaches close by",
        },
        {
          title: "Food & Wine",
          description: "Tapas, restaurants, and local vineyards",
        },
        {
          title: "Day Trips",
          description: "Museums and beautiful villages",
        },
      ],
    },
    services: {
      overline: "OUR SERVICES",
      list: [
        {
          title: "Four Rooms",
          description:
            "Four rooms are available during spring and summer, and three rooms during autumn and winter. See each room for details about the available beds.",
        },
        {
          title: "TV & Telephone",
          description:
            "There is no TV or telephone in the rooms. Enjoy each other's company :-)",
        },
        {
          title: "Air Conditioning",
          description:
            "All rooms have air conditioning for warm summer days and heating for cooler winter days.",
        },
        {
          title: "Beach Towels",
          description:
            "We also provide beach towels for relaxing days at the beach or by the lake.",
        },
        {
          title: "Tea & Coffee",
          description:
            "Tea and coffee are available whenever you wish in the shared kitchen.",
        },
        {
          title: "Family Room",
          description:
            "One of our rooms is a family room with space for up to four people.",
        },
        {
          title: "Free Wi-Fi",
          description: "Enjoy free Wi-Fi throughout the Bed & Breakfast.",
        },
        {
          title: "Bathroom Essentials",
          description:
            "Hairdryer, shampoo, shower gel, towels, bathrobe, and slippers are provided in all rooms.",
          emphasized: true,
        },
        {
          title: "Shared Kitchen",
          description:
            "A fully equipped kitchen is available for you to prepare your own lunch and/or dinner.",
        },
      ],
    },
    preFooter: {
      extrasTitle: "EXTRAS",
      extrasParagraph1:
        "For more specific requests, such as planning your stay and activities or accommodating additional guests in your room, please contact us.",
      extrasParagraph2:
        "We are happy to make your stay at Casa Amapola and in Alhaurín el Grande as enjoyable as possible. We can also help with reservations at local restaurants, bodegas, and tours.",
      extrasParagraph3:
        "We can also recommend our preferred car rental service and help arrange airport transfers.",
      hostsTitle: "ABOUT YOUR HOSTS",
      hostsParagraph1: "We are Richard and BLANK, your hosts at Casa Amapola.",
      hostsParagraph2:
        "Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum lorem ipsum.",
      hostsParagraph3:
        "We are happy to help with tips and recommendations to make your stay unforgettable.",
      hostsSignature: "/ Richard & BLANK",
    },
    footer: {
      reservationTitle: "MAKE A RESERVATION",
      reservationText: "Book your stay easily through",
      followUs: "FOLLOW US",
      mapTitle: "Casa Amapola on Google Maps",
    },
  },

  Spanish: {
    menuHeading: "MENÚ",
    menuItems: [
      { label: "Inicio", href: "#home" },
      { label: "Sobre nosotros", href: "#about-us" },
      { label: "Habitaciones", href: "#rooms" },
      { label: "Servicios", href: "#services" },
      { label: "Zona", href: "#area" },
      { label: "Contacto", href: "#contact" },
    ],
    contactButton: "Contáctanos",
    hero: {
      welcome: "Bienvenidos a",
      description:
        "Un encantador Bed & Breakfast en el corazón de Alhaurín el Grande, Andalucía, España.",
      exploreRooms: "Descubre nuestras habitaciones",
    },
    heroInfoItems: [
      "4 habitaciones únicas",
      "Terraza en la azotea",
      "A 30 min de Málaga",
    ],
    about: {
      overline: "SOBRE NOSOTROS",
      titleLine1: "Vive la vida en el",
      titleLine2: "lado soleado",
      paragraph1:
        "Casa Amapola es un encantador Bed & Breakfast boutique en el corazón de Alhaurín el Grande. Alójate en una de nuestras cuatro habitaciones cuidadosamente diseñadas y disfruta de la auténtica hospitalidad andaluza.",
      paragraph2:
        "Relájate en nuestra terraza en la azotea con vistas al hermoso Valle del Guadalhorce, a pocos pasos de cafeterías, bares de tapas y del ambiente local.",
      paragraph3:
        "Un refugio tranquilo donde el encanto tradicional español se une a la comodidad moderna, ofreciendo una estancia cálida e inolvidable en el corazón de Andalucía.",
    },
    rooms: {
      overline: "NUESTRAS HABITACIONES",
      from: "Desde",
      night: "/noche",
      list: [
        {
          title: "Hanoi",
          description:
            "Nuestra acogedora habitación, con un ambiente tranquilo y detalles cuidadosamente seleccionados.",
          guests: "2 huéspedes",
          bed: "1 cama (cama doble, 160 x 200 cm)",
          size: "11 m²",
          price: "€75–€85",
        },
        {
          title: "Aegean Sea",
          description:
            "Una habitación luminosa inspirada en los tonos de la costa y en el relajado estilo de vida mediterráneo.",
          guests: "2 huéspedes",
          bed: "1 cama (cama doble, 160 x 200 cm)",
          size: "12 m²",
          price: "€80–€90",
        },
        {
          title: "Andalucía",
          description:
            "Texturas naturales y un ambiente acogedor inspirado en el sur de España.",
          guests: "2 huéspedes",
          bed: "1 cama (cama doble, 160 x 200 cm)",
          size: "13 m²",
          price: "€85–€95",
        },
        {
          title: "Pequeña Escandinavia",
          description:
            "Una estancia elegante con materiales naturales, luz suave y un relajado ambiente rural.",
          guests: "2 huéspedes",
          bed: "1 cama (cama doble, 160 x 200 cm)",
          size: "14 m²",
          price: "€90–€110",
        },
      ],
    },
    area: {
      overline: "DESCUBRE LA ZONA",
      title: "Alhaurín el Grande y Andalucía",
      paragraph1:
        "Un encantador pueblo español a los pies de las montañas de Mijas, rodeado de naturaleza, historia y cultura.",
      paragraph2:
        "Desde hermosas playas y rutas de senderismo hasta pueblos tradicionales, mercados locales y restaurantes, todo está al alcance.",
      cards: [
        {
          title: "Naturaleza y senderismo",
          description: "Montañas, senderos y vistas impresionantes",
        },
        {
          title: "Playas",
          description: "Playas soleadas muy cerca",
        },
        {
          title: "Gastronomía y vino",
          description: "Tapas, restaurantes y bodegas locales",
        },
        {
          title: "Excursiones",
          description: "Museos y pueblos con encanto",
        },
      ],
    },
    services: {
      overline: "NUESTROS SERVICIOS",
      list: [
        {
          title: "Cuatro habitaciones",
          description:
            "Cuatro habitaciones disponibles durante la primavera y el verano, y tres durante el otoño y el invierno. Consulta cada habitación para conocer las camas disponibles.",
        },
        {
          title: "TV y teléfono",
          description:
            "No hay TV ni teléfono en las habitaciones. Disfruta de la compañía del otro :-)",
        },
        {
          title: "Aire acondicionado",
          description:
            "Todas las habitaciones disponen de aire acondicionado para los días calurosos de verano y calefacción para los días más frescos de invierno.",
        },
        {
          title: "Toallas de playa",
          description:
            "También ofrecemos toallas de playa para disfrutar de unos días de relax junto al mar o al lago.",
        },
        {
          title: "Té y café",
          description:
            "Hay té y café disponibles cuando quieras en la cocina compartida.",
        },
        {
          title: "Habitación familiar",
          description:
            "Una de nuestras habitaciones es familiar y tiene capacidad para hasta cuatro personas.",
        },
        {
          title: "Wi-Fi gratuito",
          description: "Disfruta de Wi-Fi gratuito en todo el Bed & Breakfast.",
        },
        {
          title: "Productos de baño",
          description:
            "Secador de pelo, champú, gel de ducha, toallas, albornoz y zapatillas en todas las habitaciones.",
          emphasized: true,
        },
        {
          title: "Cocina compartida",
          description:
            "Cocina totalmente equipada para que puedas preparar tu propio almuerzo y/o cena.",
        },
      ],
    },
    preFooter: {
      extrasTitle: "EXTRAS",
      extrasParagraph1:
        "Para solicitudes más específicas, como la planificación de tu estancia y actividades o la incorporación de huéspedes adicionales en la habitación, ponte en contacto con nosotros.",
      extrasParagraph2:
        "Estaremos encantados de hacer que tu estancia en Casa Amapola y en Alhaurín el Grande sea lo más agradable posible. También podemos ayudarte con reservas en restaurantes locales, bodegas y excursiones.",
      extrasParagraph3:
        "También podemos recomendarte nuestro servicio de alquiler de coches de confianza y ayudarte a organizar el traslado desde o hasta el aeropuerto.",
      hostsTitle: "SOBRE TUS ANFITRIONES",
      hostsParagraph1:
        "Somos Richard y BLANK, tus anfitriones en Casa Amapola.",
      hostsParagraph2:
        "Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum lorem ipsum.",
      hostsParagraph3:
        "Estaremos encantados de ayudarte con consejos y recomendaciones para que tu estancia sea inolvidable.",
      hostsSignature: "/ Richard y BLANK",
    },
    footer: {
      reservationTitle: "HAZ UNA RESERVA",
      reservationText: "Reserva tu estancia fácilmente a través de",
      followUs: "SÍGUENOS",
      mapTitle: "Casa Amapola en Google Maps",
    },
  },

  Swedish: {
    menuHeading: "MENY",
    menuItems: [
      { label: "Hem", href: "#home" },
      { label: "Om oss", href: "#about-us" },
      { label: "Rum", href: "#rooms" },
      { label: "Tjänster", href: "#services" },
      { label: "Om området", href: "#area" },
      { label: "Kontakt", href: "#contact" },
    ],
    contactButton: "Kontakta oss",
    hero: {
      welcome: "Välkommen till",
      description:
        "Ett charmigt Bed & Breakfast i hjärtat av Alhaurín el Grande, Andalusien, Spanien.",
      exploreRooms: "Utforska våra rum",
    },
    heroInfoItems: ["4 unika rum", "Takterrass", "30 min från Málaga"],
    about: {
      overline: "OM OSS",
      titleLine1: "Lev livet på",
      titleLine2: "solsidan",
      paragraph1:
        "Casa Amapola är ett charmigt boutique-Bed & Breakfast i hjärtat av Alhaurín el Grande. Bo i ett av våra fyra omsorgsfullt inredda rum och upplev genuin andalusisk gästfrihet.",
      paragraph2:
        "Koppla av på vår takterrass med utsikt över den vackra Guadalhorce-dalen, bara ett stenkast från kaféer, tapasbarer och det lokala folklivet.",
      paragraph3:
        "En rofylld tillflyktsort där traditionell spansk charm möter modern komfort och skapar en varm och minnesvärd vistelse i hjärtat av Andalusien.",
    },
    rooms: {
      overline: "VÅRA RUM",
      from: "Från",
      night: "/natt",
      list: [
        {
          title: "Hanoi",
          description:
            "Vårt mysiga rum med en lugn atmosfär och omsorgsfullt utvalda detaljer.",
          guests: "2 gäster",
          bed: "1 säng (dubbelsäng, 160 x 200 cm)",
          size: "11 m²",
          price: "€75–€85",
        },
        {
          title: "Aegean Sea",
          description:
            "Ett ljust rum inspirerat av kustnära toner och ett avslappnat medelhavsliv.",
          guests: "2 gäster",
          bed: "1 säng (dubbelsäng, 160 x 200 cm)",
          size: "12 m²",
          price: "€80–€90",
        },
        {
          title: "Andalucía",
          description:
            "Naturliga material och en inbjudande atmosfär inspirerad av södra Spanien.",
          guests: "2 gäster",
          bed: "1 säng (dubbelsäng, 160 x 200 cm)",
          size: "13 m²",
          price: "€85–€95",
        },
        {
          title: "Pequeña Escandinavia",
          description:
            "En elegant vistelse med naturmaterial, mjukt ljus och en avslappnad lantlig känsla.",
          guests: "2 gäster",
          bed: "1 säng (dubbelsäng, 160 x 200 cm)",
          size: "14 m²",
          price: "€90–€110",
        },
      ],
    },
    area: {
      overline: "UPPTÄCK OMRÅDET",
      title: "Alhaurín el Grande & Andalusien",
      paragraph1:
        "En charmig spansk stad vid foten av Mijasbergen, omgiven av natur, historia och kultur.",
      paragraph2:
        "Från vackra stränder och bergsvandringar till traditionella byar, lokala marknader och restauranger – allt finns inom bekvämt avstånd.",
      cards: [
        {
          title: "Natur & vandring",
          description: "Berg, vandringsleder och hisnande utsikter",
        },
        {
          title: "Stränder",
          description: "Soliga stränder på nära avstånd",
        },
        {
          title: "Mat & vin",
          description: "Tapas, restauranger och lokala vingårdar",
        },
        {
          title: "Dagsturer",
          description: "Museer och vackra byar",
        },
      ],
    },
    services: {
      overline: "VÅRA TJÄNSTER",
      list: [
        {
          title: "Fyra rum",
          description:
            "Fyra rum under vår och sommar och tre rum under höst och vinter. Se respektive rum för information om tillgängliga sängar.",
        },
        {
          title: "TV & telefon",
          description:
            "Det finns ingen TV eller telefon på rummen. Njut av varandras sällskap :-)",
        },
        {
          title: "Luftkonditionering",
          description:
            "Alla rum har luftkonditionering för varma sommardagar och uppvärmning för svalare vinterdagar.",
        },
        {
          title: "Strandhanddukar",
          description:
            "Vi erbjuder även strandhanddukar för avkopplande dagar på stranden eller vid sjön.",
        },
        {
          title: "Te & kaffe",
          description:
            "Te och kaffe finns tillgängligt när du vill i det gemensamma köket.",
        },
        {
          title: "Familjerum",
          description:
            "Ett av våra rum är ett familjerum med plats för upp till fyra personer.",
        },
        {
          title: "Gratis Wi-Fi",
          description: "Njut av gratis Wi-Fi i hela Bed & Breakfast-boendet.",
        },
        {
          title: "Badrumsprodukter",
          description:
            "Hårtork, schampo, duschgel, handdukar, badrock och tofflor finns i alla rum.",
          emphasized: true,
        },
        {
          title: "Gemensamt kök",
          description:
            "Ett fullt utrustat kök finns tillgängligt där du kan laga din egen lunch och/eller middag.",
        },
      ],
    },
    preFooter: {
      extrasTitle: "EXTRA",
      extrasParagraph1:
        "För mer specifika önskemål, som planering av din vistelse och aktiviteter eller extra gäster på rummet, är du varmt välkommen att kontakta oss.",
      extrasParagraph2:
        "Vi hjälper gärna till för att göra din vistelse på Casa Amapola och i Alhaurín el Grande så trevlig som möjligt. Vi kan även hjälpa till med bokningar på lokala restauranger, bodegor och utflykter.",
      extrasParagraph3:
        "Vi kan också rekommendera vår föredragna biluthyrning och hjälpa till med transfer till och från flygplatsen.",
      hostsTitle: "OM DINA VÄRDAR",
      hostsParagraph1: "Vi är Richard och BLANK, dina värdar på Casa Amapola.",
      hostsParagraph2:
        "Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum lorem ipsum.",
      hostsParagraph3:
        "Vi hjälper dig gärna med tips och rekommendationer för att göra din vistelse oförglömlig.",
      hostsSignature: "/ Richard & BLANK",
    },
    footer: {
      reservationTitle: "BOKA DIN VISTELSE",
      reservationText: "Boka din vistelse enkelt via",
      followUs: "FÖLJ OSS",
      mapTitle: "Casa Amapola på Google Maps",
    },
  },
};
