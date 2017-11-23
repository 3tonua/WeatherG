export default (store = {
    weather_forecast: [],
    loading: false
}, action) => {

    switch (action.type) {
        case 'GET_FORECAST_WEATHER': {
            return {
                ...store,
                loading: true
            }
        }
        case 'GET_FORECAST_WEATHER_DONE': {
            return {
                ...store,
                weather_forecast: action.forecast,
                loading: false
            }
        }
    }

    return store

}