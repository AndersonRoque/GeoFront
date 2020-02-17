import { VisibilityFilters } from '../actions/datasets'
import { combineReducers } from 'redux'


const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
    switch (action.type) {
      case 'SET_VISIBILITY_FILTER':
        return action.filter
      default:
        return state
    }
  }
  

const datasets = (state = [], action) => {
    switch (action.type) {
        case 'ADD_DATASET':
          return [
            ...state,
            {
              id: action.id,
              name: action.name,
              x: action.x,
              y: action.y,
              headers: action.headers,
              mainProcessingLine: action.mainProcessingLine,
              filePointer: action.filePointer,
              completed: false
            }
          ]
        case 'TOGGLE_TODO':
          return state.map(dataset =>
            dataset.id === action.id ? { ...dataset, completed: !dataset.completed } : dataset
          )
        default:
            return state
        }
}    

const datasetsDB = combineReducers({datasets, visibilityFilter})

export default datasetsDB


/*const datasetsReducerDefaultState = [];

const datasetsReducer = (state = datasetsReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_DATASET':
            return [...state, action.dataset];
        case 'REMOVE_DATASET':
            return state.filter(({ id }) => id !== action.id);
        default:
            return state;
        
    }
};

export default datasetsReducer;*/