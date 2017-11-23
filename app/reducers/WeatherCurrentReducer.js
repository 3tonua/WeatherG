export default (store = {
    weather_current: [],
    loading: false
}, action) => {

    switch (action.type) {
        case 'GET_CURRENT_WEATHER': {
            return {
                ...store,
                loading: true
            }
        }
        case 'GET_CURRENT_WEATHER_DONE': {
            return {
                ...store,
                weather_current: action.current,
                loading: false
            }
        }
    }

    return store

}