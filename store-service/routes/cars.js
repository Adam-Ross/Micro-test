const express = require("express");
const router = express.Router();
const Car = require("../models/Car");

router.get("/", async (req, res) => {
  try {
    const cars = await Car.find({});
    res.status(200).json(cars);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "Server error..." });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);
    res.status(200).json(car);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "Server error..." });
  }
});

router.post("/", async (req, res) => {
  const {
    make,
    model,
    package,
    color,
    year,
    category,
    mileage,
    price,
  } = req.body;
  try {
    const newCar = new Car({
      make,
      model,
      package,
      color,
      year,
      category,
      mileage,
      price,
    });

    const car = await newCar.save();
    res.json(car);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "Server error..." });
  }
});

module.exports = router;
