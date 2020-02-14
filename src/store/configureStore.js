import { createStore } from 'redux';
import datasetsReducer from '../reducers/datasets';

export default () => {
    const store = createStore(datasetsReducer);
    return store;
};