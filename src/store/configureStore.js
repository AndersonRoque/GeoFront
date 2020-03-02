import { createStore, applyMiddleware, combineReducers } from 'redux';
import datasetsReducer from '../reducers/datasets';
import filtersReducer from '../reducers/filters';
import fluxesReducer from '../reducers/fluxes';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware()

export default () => {
    const store = createStore(
        combineReducers({
        datasets: datasetsReducer,
        filters: filtersReducer,
        fluxes: fluxesReducer
        }, applyMiddleware(sagaMiddleware))
    );

    return store;
    }