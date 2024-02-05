import tourImg01 from "../images/tour-img01.jpg";
import tourImg02 from "../images/tour-img02.jpg";
import tourImg03 from "../images/tour-img03.jpg";
import tourImg04 from "../images/tour-img04.jpg";
import tourImg05 from "../images/tour-img05.jpg";
import tourImg06 from "../images/tour-img06.jpg";
import tourImg07 from "../images/tour-img07.jpg";

const tours = [
  {
    id: "01",
    title: "Westminister Bridge",
    city: "London",
    address: "Somewhere",
    distance: 300,
    price: 99,
    maxGroupSize: 10,
    desc: "It is the largest metropolis in the United Kingdom, and it is also the country's economic, transportation, and cultural centre. In addition to its history, art, and politics, London is a popular tourist destination for its wide variety of museums, shops, restaurants, and sports teams.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Bali, Indonesia",
    city: "Indonesia",
    address: "Somewhere",
    distance: 400,
    price: 99,
    maxGroupSize: 8,
    desc: "Known as the Island of the Gods, Bali is an island paradise that has much to offer its visitors. Lush rice fields, ancient temples, magical sunsets, traditional villages, idyllic beaches and the best hotels in the world are some of the island's most remarkable attractions.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Snowy Mountains, Thailand",
    city: "Thailand",
    address: "Somewhere",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "The Snowy Mountains are a mountain range in the Australian Alps.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: "Beautiful Sunrise, Thailand",
    city: "Thailand",
    address: "Somewhere",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "The sun blooms on the horizon, golden petals stretching ever outwards into the rich blue",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Nusa Pendia Bali, Indonesia",
    city: "Indonesia",
    address: "Somewhere",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: " Home to beautiful rock formations, clear blue waters, a huge array of marine life (read: dolphins) and chill vibes all around",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Cherry Blossoms Spring",
    city: "Japan",
    address: "Somewhere",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "Cherry Blossom Trees bring billowy pink and white blooms in the spring",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "Holmen Lofoten",
    city: "France",
    address: "Somewhere",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "Holmen Lofoten is a small, family run hotel and seasonal restaurant set above the Arctic Circle,",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg07,
    featured: false,
  },
  {
    id: "08",
    title: "Snowy Mountains, Thailand",
    city: "Thailand",
    address: "Somewhere",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "The Snowy Mountains are a mountain range in the Australian Alps",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg03,
    featured: false,
  },
];

export default tours;
