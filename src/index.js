import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Geofront from './components/Geofront';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import configureStore from './store/configureStore.js';

import { addDataset } from './actions/datasets';
import { setTextFilter } from './actions/filters';
import { getVisibleExpenses } from './selectors/datasets';


const store = configureStore();

/*store.dispatch(addDataset({ name: 'allalalala', x: 0, y: 0 }));
store.dispatch(addDataset({ name: 'hihihi', x: 10, y: 10 }));
store.dispatch(addDataset({ name: 'heyheyhey', x: 10, y: 10 }));
store.dispatch(addDataset({ name: 'hahahaha', x: 10, y: 10 }));*/

//const state = store.getState();
//console.log(state);


ReactDOM.render(<Provider store={store}><Geofront /></Provider>, document.getElementById('app'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
