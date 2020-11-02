const express = require("express");
const app = express();
const axios = require("axios");

const PORT = 4000;
app.use(express.json({ extended: false }));
app.use("/cars", require("./routes/cars"));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
