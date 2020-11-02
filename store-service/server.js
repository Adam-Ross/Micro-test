const express = require("express");
const app = express();
const axios = require("axios");

const connect = require("./config/db");

// Connect to db
connect();

app.use(express.json({ extended: false }));
app.use("/cars", require("./routes/cars"));

// app.get("/cars", async (req, res) => {
//   try {
//     const res = await axios.get("http://localhost:4001");
//     console.log(res);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).json({ msg: "Server error..." });
//   }
// });

// app.get("/cars/:id", async (req, res) => {
//   try {
//     const res = await axios.get(`http://localhost:4001/cars/${req.params.id}`);
//     console.log(res.data);
//   } catch (error) {
//     res.status(500).json({ msg: "Server error..." });
//   }
// });

const PORT = 4001;
app.listen(PORT, () => {
  console.log(`STORE SERVICE Server running on port ${PORT}`);
});
