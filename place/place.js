const axios = require('axios');

const getPlace = async(direccion) => {
    const encodedUrl = encodeURI(direccion);

    const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodedUrl}&appid=587db369fbd49c403d7630b2153626d2`
    );

    if (res.data.length === 0) {
        throw new Error(`No hay resultados para ${direccion}`);
    }

    const data = res.data;
    const dir = data.name;
    const lat = data.coord.lat;
    const long = data.coord.lon;

    return {
        dir,
        lat,
        long,
    };
};

module.exports = {
    getPlace,
};