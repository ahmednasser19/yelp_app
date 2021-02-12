require("dotenv").config();
const { json } = require("express");
const express = require("express");
const morgan = require("morgan");
const db = require("./db");
const app = express();
app.use(express.json()); /// get the body sotred >>> not only sotored in the body , it takes json that we take from the client and covert it  to stander js object that we can manipulte where we wnat

// get all the restaurants
app.get("/api/v1/restaurants", async (req, res) => {
  const results = await db.query("select * from restaurants");

  console.log(results);
  res.status(200).json({
    // get back json
    status: "success",
    data: {
      restuarant: ["macdonds", "wensy", "hardees"],
    },
  });
});

// // get a Restaurant
app.get("/api/v1/restaurants/:id", (req, res) => {
  console.log(req.params);

  res.status(200).json({
    status: "success",
    data: {
      restaurant: "mac",
    },
  });
});

/// create a restuarats
app.post("/api/v1/restaurants/", (req, res) => {
  console.log(req.body);

  res.status(201).json({
    status: "success",
    data: {
      restaurant: "mac",
    },
  });
});

// update the resturant
app.put("/api/v1/restaurants/:id", (req, res) => {
  console.log(req.params.id);
  console.log(req.body);

  res.status(200).json({
    status: "success",
    data: {
      restaurant: "mac",
    },
  });
});

// /// delete the resturant
app.delete("/api/v1/restaurants/:id", (req, res) => {
  res.status(204).json({
    status: "success",
  });
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`server is up and listening on port ${port}`);
});
