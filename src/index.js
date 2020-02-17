import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Geofront from './components/Geofront';
import * as serviceWorker from './serviceWorker';
import datasetsDB from './reducers/datasets';
import { Provider } from 'react-redux'
import {  createStore } from 'redux'

const store = createStore(datasetsDB);

ReactDOM.render(<Provider store={store}><Geofront /></Provider>, document.getElementById('app'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
