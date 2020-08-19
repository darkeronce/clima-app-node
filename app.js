const place = require('./place/place');
const weather = require('./weather/weather');
const { getClima } = require('./weather/weather');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Descripcion de la ciudad para obtener el clima',
        demand: true,
    },
}).argv;

// place.getPlace(argv.direccion).then((res) => console.log(res));

// weather
//     .getClima(-30, -71)
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));

const getInfo = async(direccion) => {
    try {
        let lugar = await place.getPlace(direccion);
        let clima = await weather.getClima(lugar.lat, lugar.long);

        return `El clima de ${lugar.dir} es de ${clima} grados celcius`;
    } catch (e) {
        return `no se pudo determinar el clima del ${direccion}`;
    }
};

getInfo(argv.direccion).then(console.log).catch(console.log);