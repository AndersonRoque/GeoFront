const datasetsReducerDefaultState = [];

const datasetsReducer = (state = datasetsReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_DATASET':
            return [...state, action.dataset];
        default:
            return state;
        
    }
};

export default datasetsReducer;