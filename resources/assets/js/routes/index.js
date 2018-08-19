import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import routes from './routes';
import PrivateRoute from './private';
import PublicRoute from './public';


const Routes = (props) => (
	<BrowserRouter>
	    <Switch>
	        {routes.map((route, i) => {
	            if (route.auth) {
	                return <PrivateRoute locale={props.locale} key={i} {...route}/>
	            } else {
	                return <PublicRoute locale={props.locale} key={i} {...route}/>
	            }
	        })}
	    </Switch>
	</BrowserRouter>
);

export default Routes;