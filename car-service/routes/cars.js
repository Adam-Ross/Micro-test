const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/", async (req, res) => {
  try {
    const response = await axios.get("http://localhost:4001/cars");
    res.status(200).json(response.data);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "Server error..." });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const response = await axios.get(
      `http://localhost:4001/cars/${req.params.id}`
    );
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ msg: "Server error..." });
  }
});

module.exports = router;
