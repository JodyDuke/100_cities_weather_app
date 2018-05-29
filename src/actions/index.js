export const SEARCH_LOCATION = 'SEARCH_LOCATION';
export const REQUEST_WEATHER = 'REQUEST_WEATHER';
export const RECEIVE_WEATHER = 'RECEIVE_WEATHER';
import { cities } from '../utils/cities';
import { api_call } from '../api/api_calls';
import { api_key } from '../api/api_key';

export function searchLocation(searchLocation) {
    return {
        type: 'SEARCH_LOCATION',
        searchLocation
    }
}

export function requestWeather(cities) {
    return {
        type: 'REQUEST_WEATHER',
        cities
    }
}

export function receiveWeather(cities, json) {
    return {
        type: 'RECEIVE_WEATHER',
        cities,
        response: json.data.children.map(e => e.data),
        received: Date.now()
    }
}

export function fetchWeather (cities) {
    return function (dispatch) {

        dispatch(requestWeather(cities))

        return fetch(api_call.current + api_key.key + api_call.query + cities)  
        .then(response => response.json())
        .then(json => console.log(json))
    }

}
