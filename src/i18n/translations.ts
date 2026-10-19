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
    paragraphs: string[];
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
    ctaTitle: string;
    ctaDescription: string;
    ctaLink: string;
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
    hostsParagraph: string;
  };
  footer: {
    reservationTitle: string;
    bookingPrompt: string;
    followUs: string;
    mapTitle: string;
    termsLabel: string;
    termsTitle: string;
    terms: string[];
    close: string;
    rightsReserved: string;
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
      paragraphs: [
        "Casa Amapola is a small Bed & Breakfast that has four tastefully decorated rooms, which of three are with ensuite whereas the smaller fourth room has a private bathroom located outside of the room. All our guest has access to the warm and relaxing roof terrace looking over the beautiful Guadalhorce valley.",
        "Nearby Casa Amapola our guest can enjoy the genuine atmosphere of the small town of Alhaurín el Grande. A town which both offer quiet streets and resting cafes as well as vibrant restaurants and tapas bars - all an inspiring everyday life of Alhaurín el Grande.",
        "Our vision and hope with Casa Amapola are that you as guests will not only have a pleasant stay, but also a genuine experience of Spain and the fantastic Andalusía. Casa Amapola therefore reflects both the landscape that surrounds it and is inspired by the many different trips and the background that we, as your hosts, bring with us.",
        "Casa Amapola offers you a bohemian and genuine Spanish accommodation, in an old traditional Spanish whitewashed house but with a touch of flair and all the comforts you need.",
        "Welcome to Casa Amapola.",
      ],
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
      ctaTitle: "Want to discover more?",
      ctaDescription:
        "We'd love to share our favourite places and local recommendations. Feel free to get in touch!",
      ctaLink: "Get in touch →",
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
          title: "Cot",
          description:
            "Possibility to lend a cot in the rooms Aegean Sea and Hanoi.",
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
      hostsParagraph:
        "We as your hosts are a globetrotter couple from Sweden that now have landed in the Guadalhorce valley. We our selves are interested in having an active lifestyle and enjoy everything from hiking in nature to finding small and interesting winerys. Come and enjoy our paradise with us. We are looking forward to meet you and help you create a meaningfull and pleasant stay.",
    },
    footer: {
      reservationTitle: "Call or email us to make a reservation",
      bookingPrompt: "Or book us here",
      followUs: "FOLLOW US",
      mapTitle: "Casa Amapola on Google Maps",
      termsLabel: "Terms & Conditions",
      termsTitle: "Terms & Conditions",
      terms: [
        "This website provides general information about Casa Amapola, its rooms, facilities, location, and indicative rates. Details may change; please confirm current information directly with the hosts.",
        "A booking request is not confirmed until Casa Amapola confirms it. Before completing a reservation, confirm availability, total price, occupancy, arrival and departure details, and the cancellation and payment conditions that apply to your booking.",
        "These terms apply to use of this website only. A confirmed accommodation booking is subject to the specific conditions communicated for that booking. Links to third-party booking, map, and social media services are provided for convenience and are governed by those services' own terms and privacy policies.",
        "Unless otherwise stated, the text, photographs, and branding on this website belong to Casa Amapola. They may not be reproduced or used commercially without prior permission. Website information is provided in good faith but without a guarantee that it is complete or continuously up to date.",
      ],
      close: "Close",
      rightsReserved: "All rights reserved.",
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
      paragraphs: [
        "Casa Amapola es un encantador Bed & Breakfast boutique en el corazón de Alhaurín el Grande. Alójate en una de nuestras cuatro habitaciones cuidadosamente diseñadas y disfruta de la auténtica hospitalidad andaluza.",
        "Relájate en nuestra terraza en la azotea con vistas al hermoso Valle del Guadalhorce, a pocos pasos de cafeterías, bares de tapas y del ambiente local.",
        "Un refugio tranquilo donde el encanto tradicional español se une a la comodidad moderna, ofreciendo una estancia cálida e inolvidable en el corazón de Andalucía.",
      ],
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
      ctaTitle: "¿Quieres descubrir más?",
      ctaDescription:
        "Nos encantará compartir nuestros lugares favoritos y recomendaciones locales. ¡No dudes en contactarnos!",
      ctaLink: "Ponte en contacto →",
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
          title: "Cuna",
          description:
            "Posibilidad de prestar una cuna en las habitaciones Mar Egeo y Hanói.",
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
      hostsParagraph:
        "Somos Richard y BLANK, tus anfitriones en Casa Amapola. Estaremos encantados de ayudarte con consejos y recomendaciones para que tu estancia sea inolvidable.",
    },
    footer: {
      reservationTitle: "Llámanos o escríbenos para hacer una reserva",
      bookingPrompt: "O reserva aquí",
      followUs: "SÍGUENOS",
      mapTitle: "Casa Amapola en Google Maps",
      termsLabel: "Términos y condiciones",
      termsTitle: "Términos y condiciones",
      terms: [
        "Este sitio web ofrece información general sobre Casa Amapola, sus habitaciones, servicios, ubicación y precios orientativos. Los detalles pueden cambiar; confirma la información vigente directamente con los anfitriones.",
        "Una solicitud de reserva no queda confirmada hasta que Casa Amapola la confirme. Antes de completar una reserva, confirma la disponibilidad, el precio total, la ocupación, las fechas de entrada y salida, y las condiciones de cancelación y pago aplicables.",
        "Estas condiciones se aplican únicamente al uso de este sitio web. Una reserva de alojamiento confirmada estará sujeta a las condiciones específicas comunicadas para esa reserva. Los enlaces a servicios externos de reservas, mapas y redes sociales se ofrecen por comodidad y se rigen por sus propias condiciones y políticas de privacidad.",
        "Salvo que se indique lo contrario, los textos, fotografías y elementos de marca de este sitio pertenecen a Casa Amapola. No se permite reproducirlos ni utilizarlos con fines comerciales sin autorización previa. La información se ofrece de buena fe, sin garantizar que esté completa o permanentemente actualizada.",
      ],
      close: "Cerrar",
      rightsReserved: "Todos los derechos reservados.",
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
      paragraphs: [
        "Casa Amapola är ett charmigt boutique-Bed & Breakfast i hjärtat av Alhaurín el Grande. Bo i ett av våra fyra omsorgsfullt inredda rum och upplev genuin andalusisk gästfrihet.",
        "Koppla av på vår takterrass med utsikt över den vackra Guadalhorce-dalen, bara ett stenkast från kaféer, tapasbarer och det lokala folklivet.",
        "En rofylld tillflyktsort där traditionell spansk charm möter modern komfort och skapar en varm och minnesvärd vistelse i hjärtat av Andalusien.",
      ],
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
      ctaTitle: "Vill du upptäcka mer?",
      ctaDescription:
        "Vi delar gärna med oss av våra favoritplatser och lokala tips. Hör gärna av dig!",
      ctaLink: "Kontakta oss →",
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
          title: "Spjälsäng",
          description:
            "Möjlighet att låna spjälsäng i rummen Aegean Sea och Hanoi.",
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
      hostsParagraph:
        "Vi är Richard och BLANK, dina värdar på Casa Amapola. Vi hjälper dig gärna med tips och rekommendationer för att göra din vistelse oförglömlig.",
    },
    footer: {
      reservationTitle: "Ring eller mejla oss för att göra en bokning",
      bookingPrompt: "Eller boka här",
      followUs: "FÖLJ OSS",
      mapTitle: "Casa Amapola på Google Maps",
      termsLabel: "Villkor",
      termsTitle: "Villkor",
      terms: [
        "Den här webbplatsen innehåller allmän information om Casa Amapola, rummen, faciliteterna, läget och ungefärliga priser. Uppgifter kan ändras; be värdarna bekräfta aktuell information.",
        "En bokningsförfrågan är inte bekräftad förrän Casa Amapola har bekräftat den. Kontrollera tillgänglighet, totalpris, antal gäster, ankomst och avresa samt vilka avboknings- och betalningsvillkor som gäller innan du slutför bokningen.",
        "Dessa villkor gäller endast användningen av webbplatsen. En bekräftad boendebokning omfattas av de särskilda villkor som meddelas för bokningen. Länkar till externa boknings-, kart- och sociala medietjänster tillhandahålls som en bekvämlighet och omfattas av respektive tjänsts egna villkor och integritetspolicy.",
        "Om inget annat anges tillhör webbplatsens texter, fotografier och varumärkesmaterial Casa Amapola. Materialet får inte kopieras eller användas kommersiellt utan föregående tillstånd. Informationen lämnas i god tro, men vi garanterar inte att den är fullständig eller alltid aktuell.",
      ],
      close: "Stäng",
      rightsReserved: "Alla rättigheter förbehållna.",
    },
  },
};
