import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import Weather from './app/reducers';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Main from './app/Main';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

let store = createStore(Weather, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <Main/>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('app')
);