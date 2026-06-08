const axios = require("axios");
const weatherClient = axios.create({
    baseURL: "https://api.weatherapi.com/v1",
    timeout: 5000,
});module.exports = weatherClient;