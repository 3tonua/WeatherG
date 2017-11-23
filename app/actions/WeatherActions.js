import API from '../API'


export function getCurrent() {
    return (dispatch) => {
        dispatch({
            type: 'GET_CURRENT_WEATHER'
        });
        API.getWeather().then((data) => {
            dispatch({
                type: 'GET_CURRENT_WEATHER_DONE',
                current: data
            });
        });
    }
}

export function getForecast() {
    return (dispatch) => {
        dispatch({
            type: 'GET_FORECAST_WEATHER'
        });
        API.getForecast().then((data) => {
            dispatch({
                type: 'GET_FORECAST_WEATHER_DONE',
                forecast: data
            })
        })
    }
}