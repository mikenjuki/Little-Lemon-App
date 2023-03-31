import {
  people01,
  people02,
  people03,
  bruchetta,
  lemonDessert,
  greekSalad,
  facebook,
  instagram,
  linkedin,
  twitter,
  deliveryBike,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
    linkRoute: "/",
  },
  {
    id: "about",
    title: "About Us",
    linkRoute: "/about",
  },
  {
    id: "menu",
    title: "Menu",
    linkRoute: "/menu",
  },
  {
    id: "reservations",
    title: "Reservations",
    linkRoute: "/reservations",
  },
  {
    id: "order online",
    title: "Order Online",
    linkRoute: "/order-online",
  },
  {
    id: "login",
    title: "Login",
    linkRoute: "/login",
  },
];

export const specialMeals = [
  {
    id: "meal-1",
    image: greekSalad,
    title: "Greek Salad",
    price: 12.99,
    content:
      "The famous Greek Salad of crispy lettuce, peppers, olives and our Chicago style feta cheese garnished with crunchy garlic and rosemary croutons.",
    orderTag: "Order a delivery",
    icon: deliveryBike,
  },
  {
    id: "meal-2",
    image: bruchetta,
    title: "Bruchetta",
    price: 5.59,
    content:
      "Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    orderTag: "Order a delivery",
    icon: deliveryBike,
  },
  {
    id: "meal-3",
    image: lemonDessert,
    title: "Lemon Dessert",
    price: 6.59,
    content:
      "This comes straight from grandma's recipe book every last ingredient has been sourced and is as authentic as can be imagined.",
    orderTag: "Order a delivery",
    icon: deliveryBike,
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Little Lemon is more than just a restaurant. It's a destination for your taste buds. The food is delicious, fresh and satisfying. You can choose your own adventure with their diverse menu and friendly staff.",
    name: "Danny Jones",
    img: people02,
  },
  {
    id: "feedback-2",
    content:
      "The food at Little Lemon is amazing. It's not just about the money, it's about the quality and the experience. You can feel the passion and the care that goes into every dish. Little Lemon is a place where you can enjoy yourself and your company.",
    name: "Jessica Yu",
    img: people01,
  },
  {
    id: "feedback-3",
    content:
      "If you're looking for a great meal, look no further than Little Lemon. The food is mouthwatering, the service is impeccable and the atmosphere is cozy. Little Lemon is a tool for happiness. It will take you where you want to go, but you have to be the driver.",
    name: "Tristan Grey",
    img: people03,
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Home",
        linkRoute: "/",
      },
      {
        name: "About Us",
        linkRoute: "/about",
      },
      {
        name: "Menu",
        linkRoute: "/menu",
      },
      {
        name: "Reservations",
        linkRoute: "/reservations",
      },
      {
        name: "Order Online",
        linkRoute: "/order-online",
      },
      {
        name: "Login",
        linkRoute: "/login",
      },
    ],
  },
  {
    title: "Contact Us",
    links: [
      {
        name: "+1800 125 4500",
      },
      {
        name: "45 Greek Street, Chicago, IL",
      },
      {
        name: "contact@littlelemon.eat",
      },
    ],
  },
  {
    title: "Coming Soon",
    links: [
      {
        name: "Little Lemon Quebec",
        link: "https://www.thelittlelemon.eat/",
      },
      {
        name: "Little Lemon Mexico City",
        link: "https://www.thelittlelemon.eat/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];
