require("dotenv").config();
const { json } = require("express");
const cors = require("cors");
const express = require("express");
const morgan = require("morgan");
const db = require("./db");
const app = express();

app.use(cors());
app.use(express.json()); /// get the body sotred >>> not only sotored in the body , it takes json that we take from the client and covert it  to stander js object that we can manipulte where we wnat

// get all the restaurants
app.get("/api/v1/restaurants", async (req, res) => {
  try {
    const results = await db.query("select * from restaurants");

    console.log(results);
    res.status(200).json({
      // get back json
      status: "success",
      results: results.rows.length, /// the number of the results
      data: {
        restaurants: results.rows,
      },
    });
  } catch (err) {
    console.log(err);
  }
});

// // get a Restaurant
app.get("/api/v1/restaurants/:id", async (req, res) => {
  console.log(req.params.id);
  try {
    const results = await db.query("select * from restaurants where id = $1", [
      req.params.id,
    ]);
    // console.log(results.rows[0]);
    res.status(200).json({
      status: "success",
      data: {
        restaurants: results.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
});

/// create a restuarats
app.post("/api/v1/restaurants/", async (req, res) => {
  console.log(req.body);
  try {
    const results = await db.query(
      "INSERT INTO restaurants (name, location , price_range) VALUES ($1 , $2 ,$3) returning * ",
      [req.body.name, req.body.location, req.body.price_range]
    );
    console.log(results);
    res.status(201).json({
      status: "success",
      data: {
        restaurants: results.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
});

// update the resturant
app.put("/api/v1/restaurants/:id", async (req, res) => {
  try {
    const resutls = await db.query(
      "UPDATE restaurants SET name = $1 , location = $2 , price_range= $3 where id= $4  returning * ",
      [req.body.name, req.body.location, req.body.price_range, req.params.id]
    );

    res.status(200).json({
      status: "success",
      data: {
        restaurants: resutls.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
});

// /// delete the resturant
app.delete("/api/v1/restaurants/:id", async (req, res) => {
  try {
    const results = db.query("DELETE FROM  restaurants where id = $1", [
      req.params.id,
    ]);
    res.status(204).json({
      status: "success",
    });
  } catch (err) {
    console.log(err);
  }
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`server is up and listening on port ${port}`);
});
