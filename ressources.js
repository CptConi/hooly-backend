// enum FoodType
const PIZZA = "🍕";
const BURGER = "🍔";
const PASTA = "🍝";
const SALAD = "🥗";
const VEGAN = "🍃";
const SUSHI = "🍣";
const TACOS = "🌮";

export const foodTrucks = [
  {
    id: 1,
    name: "Holy Cow!",
    description:
      "Des burgers délicieux et juteux avec des garnitures à tomber par terre. Vous allez adorer ce que nous avons entre nos pains.",
    image: "https://via.placeholder.com/150",
    rating: 4.7,
    foodType: BURGER,
  },
  {
    id: 2,
    name: "Pasta la Vista",
    description:
      'Nous apportons la cuisine italienne à vous. De délicieuses pâtes cuites à la perfection, accompagnées de sauces savoureuses pour une expérience gustative qui vous fera dire "wow!',
    image: "https://via.placeholder.com/150",
    rating: 4.4,
    foodType: PASTA,
  },
  {
    id: 3,
    name: "Slice, Slice Baby",
    description:
      "Des pizzas délicieuses avec une pâte moelleuse et des garnitures fraîches et de qualité supérieure. Nous sommes sûrs que vous reviendrez pour une autre part.",
    image: "https://via.placeholder.com/150",
    rating: 4.6,
    foodType: PIZZA,
  },
  {
    id: 4,
    name: "Salad Days",
    description:
      "Nous croyons en la fraîcheur, la nourriture saine et des ingrédients de qualité. Venez déguster nos salades délicieuses et copieuses pour vous sentir frais et heureux toute la journée.",
    image: "https://via.placeholder.com/150",
    rating: 4.5,
    foodType: SALAD,
  },
  {
    id: 5,
    name: "\"Rollin' in the Deep",
    description:
      "Du riz moelleux, des ingrédients frais et des sushis préparés avec soin. Plongez dans notre menu pour des sensations gustatives incroyables et des rolls qui vous laisseront bouche bée.",
    image: "https://via.placeholder.com/150",
    rating: 4.9,
    foodType: SUSHI,
  },
];

export const reservations = [
  {
    id: 1,
    date: new Date(),
    location: "134 Nervous Nuggets Road",
    meal: "ALLDAY",
    foodTruckId: 1,
  },
  {
    id: 2,
    date: new Date(),
    location: "12 Crazy Fry lane",
    meal: "LUNCH",
    foodTruckId: 2,
  },
  {
    id: 3,
    date: new Date(),
    location: "14 Sparkling Pizza road",
    meal: "ALLDAY",
    foodTruckId: 3,
  },
  {
    id: 4,
    date: new Date(),
    location: "9 Shaken Salad Way",
    meal: "DINNER",
    foodTruckId: 4,
  },
  {
    id: 5,
    date: new Date(),
    location: "22 Precious Poutine Path",
    meal: "BREAKFAST",
    foodTruckId: 5,
  },
];
