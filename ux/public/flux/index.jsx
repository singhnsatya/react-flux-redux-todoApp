import React from 'react';
import { BrowserRouter, HashRouter, Route, Link, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import Routes from './routes.jsx';
import Ab from './components/ab.jsx';

main();

function main() {
	var app = document.createElement('div');
	document.body.appendChild(app);

	ReactDOM.render(<App />, app);
};