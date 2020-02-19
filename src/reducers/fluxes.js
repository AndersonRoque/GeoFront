const fluxesReducerDefaultState = [];

const fluxesReducer = (state = fluxesReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_FLUX':
            return [...state, action.flux];
        default:
            return state;
        
    }
};

export default fluxesReducer;