import axios from 'axios';

const API_KEY = '7453bb825dba63a6874aa50b7412cc5e';

export const FETCH_WEATHER = 'FETCH_WEATHER'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export function fetchWeather(city) {

    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    console.log('Request:', request);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}