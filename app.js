// A nodejs express server that listen on port 3000 on routes /api/foodtrucks and /api/reservations and send back mock lists of foodtrucks and reservations.

import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import {
  foodTrucks as ressourcesFoodTruck,
  reservations as ressourcesReservation,
} from "./ressources.js";

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

let foodTrucks = ressourcesFoodTruck;
let reservations = ressourcesReservation;

/**
 * function that returns a random number between 0.1 and 5.0 with a precision of 0.1
 */
const getRandomRatingNumber = () => {
  return Math.floor(Math.random() * 50 + 1) / 10;
};

app.get("/api/foodtrucks", (_req, res) => {
  console.log("FOODTRUCK -- get All foodtrucks: ", foodTrucks);
  res.send(foodTrucks);
});
app.get("/api/reservations", (_req, res) => {
  console.log("RESERVATION -- get All reservations: ", reservations);
  res.send(reservations);
});

app.post("/api/reservations", (req, res) => {
  const reservation = { ...req.body, id: reservations.length + 1 };
  reservations.push(reservation);
  console.log("RESERVATION -- Adding reservation: ", reservation);
  res.send(reservation);
});

app.post("/api/foodtrucks", (req, res) => {
  const foodTruck = {
    ...req.body,
    id: foodTrucks.length + 1,
    rating: getRandomRatingNumber(),
  };
  foodTrucks.push(foodTruck);
  console.log("FOODTRUCK -- Adding foodtruck: ", foodTruck);
  res.send(foodTruck);
});

app.listen(port, () => {
  console.log(`Hooly backend listening at http://localhost:${port}`);
});
