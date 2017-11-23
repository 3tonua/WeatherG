import axios from 'axios';

const appid = '9ef757cb577b08f60d21a4446c0a2c94';

let API = {
    getWeather: function () {
        return new Promise(function (resolve, reject) {
            navigator.geolocation.getCurrentPosition(
                function(position) {

                    let lat = position.coords.latitude.toFixed(2);
                    let lon = position.coords.longitude.toFixed(2);

                    console.log(lat, lon);

                    axios.get('http://api.openweathermap.org/data/2.5/weather', {
                        params: {
                            part: "snippet",
                            appid,
                            lat,
                            lon,
                            units: 'metric',
                            lang: 'ru'
                        }
                    }).then(function (data) {
                        console.log(data.data);
                        resolve(data.data);
                    })

                }
            );
        })
    },
    getForecast: function () {
        return new Promise(function (resolve, reject) {
            navigator.geolocation.getCurrentPosition(
                function(position) {

                    let lat = position.coords.latitude.toFixed(2);
                    let lon = position.coords.longitude.toFixed(2);

                    console.log(lat, lon);

                    axios.get('http://api.openweathermap.org/data/2.5/forecast/daily', {
                        params: {
                            part: "snippet",
                            appid,
                            lat,
                            lon,
                            cnt: 4,
                            units: 'metric',
                            lang: 'ru'
                        }
                    }).then(function (data) {
                        console.log(data.data.list);
                        resolve(data.data.list);
                    })
                }
            );
        })
    }
};

export default API;