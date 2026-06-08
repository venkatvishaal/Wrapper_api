require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());
const weatherroute = require("./routes/weatherroute");
app.use("/api/weather", weatherroute);
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
