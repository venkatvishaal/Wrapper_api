const weatherClient = require("../config/axios");
exports.getWeather = async (req, res) => {
  try {
    const city = req.params.city;
    const response = await weatherClient.get("/current.json", {
      params: {
        key: process.env.WEATHER_API_KEY,
        q: city,
      },
    });
    const data = response.data;
    const customResponse = {
      city: data.location.name,
      country: data.location.country,
      temperature: data.current.temp_c,
      humidity: data.current.humidity,
      weather: data.current.condition.text,
    };
    res.status(200).json(customResponse);
  } catch (error) {
    console.error("Weather API Error:", error.response?.data || error.message);
    res.status(500).json({
      success: false,
      message: "Failed to fetch weather data",
    });
  }
};
