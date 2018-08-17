import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import Routes from './routes';
import authReducer from './store/reducers/Auth';
import thunk from 'redux-thunk';

export default class App extends Component {
    render() {

    	const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

		const store = createStore(authReducer, composeEnhancers(applyMiddleware(thunk)));

        return (
			<Provider store={store}>
			    <Routes />
			</Provider>
        );
    }
}


if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}