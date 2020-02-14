const datasetsReducerDefaultState = [];

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

export default datasetsReducer;