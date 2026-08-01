export type Project = {
  name: string;
  category: string;
  location: string;
  href: string;
  image: string;
  alt: string;
};

export const projects: Project[] = [
  {
    name: "Pangkas Kala",
    category: "Barbershop",
    location: "Cilandak",
    href: "https://pangkas-kala.getstore.my.id",
    image: "/images/portfolio-pangkas-kala.webp",
    alt: "Interior barbershop",
  },
  {
    name: "Ruang Rona",
    category: "Salon & beauty house",
    location: "Jakarta Selatan",
    href: "https://ruang-rona.getstore.my.id",
    image: "/images/portfolio-ruang-rona.webp",
    alt: "Pratinjau website Ruang Rona",
  },
  {
    name: "Pulang Rapi",
    category: "Laundry",
    location: "Jakarta",
    href: "https://pulang-rapi.getstore.my.id",
    image: "/images/portfolio-pulang-rapi.webp",
    alt: "Pakaian bersih yang dilipat rapi",
  },
  {
    name: "Lungguh",
    category: "Angkringan dalam rumah",
    location: "Yogyakarta",
    href: "https://lungguh.getstore.my.id",
    image: "/images/portfolio-lungguh.webp",
    alt: "Suasana tempat makan yang hangat",
  },
  {
    name: "Nusa Medika",
    category: "Klinik kesehatan",
    location: "Indonesia",
    href: "https://nusa-medika.getstore.my.id",
    image: "/images/portfolio-nusa-medika.webp",
    alt: "Pratinjau website Nusa Medika",
  },
];
