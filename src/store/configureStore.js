import { createStore, combineReducers } from 'redux';
import datasetsReducer from '../reducers/datasets';
import filtersReducer from '../reducers/filters'

export default () => {
    const store = createStore(
        combineReducers({
        datasets: datasetsReducer,
        filters: filtersReducer
        })
    );

    return store;
};