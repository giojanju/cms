import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import axios from './axios';

import Routes from './routes';
import authReducer from './store/reducers/Auth';
import thunk from 'redux-thunk';
import * as actions from './store/actions/auth';
import * as helper from './helpers/generalHelper';
import './App.css';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            locale: 'ka',
        }
    }

    componentDidMount() {
        axios.post('locale').then(re => {
            this.setState({
                locale: re.data.locale,
            })
        })
    }

    render() {

    	const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

		const store = createStore(authReducer, composeEnhancers(applyMiddleware(thunk)));

        return (
			<Provider store={store}>
			    <Routes locale={this.state.locale} />
			</Provider>
        );
    }
}


if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}