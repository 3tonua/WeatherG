import {combineReducers} from 'redux';
import current from './WeatherCurrentReducer';
import forecast from './WeatherForecastReducer';


export default combineReducers({
    current,
    forecast
});