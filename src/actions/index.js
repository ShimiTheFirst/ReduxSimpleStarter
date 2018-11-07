import axios from 'axios';

const WEATHER_API_KEY = '37916a2631c1ea7a79a94652303ff5fb';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${WEATHER_API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},cz`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}