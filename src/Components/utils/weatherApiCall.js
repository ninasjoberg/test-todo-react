require('isomorphic-fetch');


export const checkResponse = (city) => {
    return (json) => {
        if (json.cod === '404' || json.cod === '504') {
            throw Error(`We could not find a city called ${city}`);
        }
        return json;
    };
};

export default function getWeatherInfoByCity(city) {
    return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=86ebed830d86568ba6fe8e800be02b58`)
        .then((response) => {
            return response.json();
        })
        .then(checkResponse(city))
        .catch((error) => {
            return {
                error: error.message,
            };
        });
}

