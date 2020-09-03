const place = require('./place/place');
const weather = require('./weather/weather');

const argv = require('yargs').options({
    direction: {
        alias: 'd', 
        desc: 'Address or city name to get the weather', 
        demand: true
    }
}).argv;

const getInfo = async (direction) => {
    try {
        const coords = await place.getPlaceLatLng(direction);
        const temperature = await weather.getWeather(coords.lat, coords.lng);

        return `The weather for ${coords.city} is ${temperature}`;
    } catch (e) {
        return `Could not get the weather for ${direction}: ${e}`;
    }
};

getInfo(argv.direction)
    .then(console.log)
    .catch(console.log);