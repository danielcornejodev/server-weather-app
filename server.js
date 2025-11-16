// server.js
const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = 5001;

app.use(cors());

app.get("/weather/:city", async (req, res) => {
  const { city } = req.params;
  const API_key = process.env.OPENWEATHER_API_KEY;
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`
    );
    // Transform to simple schema
    res.json({
      city: response.data.name,
      temperatureC: (response.data.main.temp - 273.15).toFixed(1),
      description: response.data.weather[0].description,
    });
  } catch (err) {
    console.error("Weather API error:", err.response?.status, err.response?.data || err.message);
    res.status(err.response?.status || 500).json({ 
      error: "Unable to fetch weather", 
      details: err.response?.data || err.message 
    });
  }
});

app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
