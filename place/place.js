const axios = require('axios');
const apiUrl = 'https://geocode.xyz';
const auth_key = 'MY_AUTH_KEY';

const getPlaceLatLng = async (direction) => {
    const params = {
        auth: auth_key,
        locate: direction,
        json: '1'
    };

    const resp = await axios.get(apiUrl, { params });

    if (resp.data.error) {
        throw new Error(`No results for ${direction}`);
    }

    const data = resp.data;
    const city = data.standard.city;
    const lat = data.latt;
    const lng = data.longt;

    return {
        city, 
        lat, 
        lng
    };
};

module.exports = {
    getPlaceLatLng
};