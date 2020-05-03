import React from 'react';
import ReactDOM from 'react-dom';
import './scss/main.scss';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import allReducers from './store/reducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import "./i18n";

declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION__: Function;
	}
}

const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
ReactDOM.render(
	<Router>
		<Provider store={store}>
			<App />
		</Provider>
	</Router>,
	document.getElementById('root')
);
serviceWorker.register();
