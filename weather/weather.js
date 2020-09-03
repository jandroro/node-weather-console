const axios = require('axios');
const appId = 'MY_API_KEY';
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

const getWeather = async (lat, lng) => {
    const resp = await axios.get(`${baseUrl}?lat=${lat}&lon=${lng}&appid=${appId}&units=metric`);

    return resp.data.main.temp;
};

module.exports = {
    getWeather
};