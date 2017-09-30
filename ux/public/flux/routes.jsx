import { Router, BrowserRouter, HashRouter, Route, Link, Switch } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import Ab from './components/ab.jsx';

var routes = () => {
	return (
		<HashRouter>
			<Route path='/' component={App}>
			</Route>
			</HashRouter>
		)
}

exports.routes = routes;
