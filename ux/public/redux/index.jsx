import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import { Provider } from 'react-redux';
import store from './store';

main()

function main() {
	var app = document.createElement('div');
	document.body.appendChild(app);

	ReactDOM.render(<Provider store = {store}>
		<App />
		</Provider>, app);
}