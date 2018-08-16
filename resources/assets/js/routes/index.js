import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import routes from './routes';
import PrivateRoute from './private';
import PublicRoute from './public';


const Routes = () => (
	<BrowserRouter>
	    <Switch>
	        {routes.map((route, i) => {
	            if(route.auth){
	                return <PrivateRoute key={i} {...route}/>
	            }else{
	                return <PublicRoute key={i} {...route}/>
	            }
	        })}
	    </Switch>
	</BrowserRouter>
);

export default Routes;