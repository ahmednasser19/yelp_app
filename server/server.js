require("dotenv").config();
const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));
/// get all the restaurants
app.get("/api/v1/restaurants", (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      restuarant: ["macdonds", "wensy"],
    },
  });
});

// get a Restaurant
app.get("/api/vi/restaurants/:id", (req, res) => {
  console.log(req);
});

/// create a restuarats
app.post("/api/vi/restaurants/", (req, res) => {
  console.log(req);
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`server is up and listening on port ${port}`);
});
