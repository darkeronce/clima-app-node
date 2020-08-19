const axios = require('axios');

const getClima = async(lat, lon) => {
    const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=d2317e0c96fb8b886aca9dfc27f150be&units=metric`
    );

    return res.data.main.temp;
};

module.exports = {
    getClima,
};