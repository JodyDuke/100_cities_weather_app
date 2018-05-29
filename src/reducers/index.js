import { combineReducers } from 'redux';
import {
    SEARCH_LOCATION,
    REQUEST_WEATHER,
    RECEIVE_WEATHER
} from '../actions'
import { cities } from '../utils/cities'

function searchLocation(state = { cities }, action) {
    switch(action.type) {
        case 'SEARCH_LOCATION': 
            return action.searchLocation;
        default:
            return state;

    }
}

const weather = (state = {isFetching: false, didInvalidate: false, items: []}, action) => {
    switch(action.type){
        case REQUEST_WEATHER:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            })
        
        case RECEIVE_WEATHER:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                items: action.response,
                lastUpdated: action.received
            })
        
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    weather
})

export default rootReducer