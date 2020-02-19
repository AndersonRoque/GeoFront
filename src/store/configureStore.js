import { createStore, combineReducers } from 'redux';
import datasetsReducer from '../reducers/datasets';
import filtersReducer from '../reducers/filters'
import fluxesReducer from '../reducers/fluxes'

export default () => {
    const store = createStore(
        combineReducers({
        datasets: datasetsReducer,
        filters: filtersReducer,
        fluxes: fluxesReducer
        })
    );

    return store;
};