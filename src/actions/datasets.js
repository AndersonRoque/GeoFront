import uuid from 'uuid'

let DatasetId = 0;

export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const SET_FILTER = "SET_FILTER";

export const addDataset = ({ x = 0, y = 0, name = '', headers = [], mainProcessingLine = '', filePointer = []} = {}) => ({
    type: 'ADD_DATASET',
    dataset: {
        id: ++DatasetId,
        x,
        y,
        name,
        headers,
        mainProcessingLine,
        filePointer
    }
});



export const setVisibilityFilter = (filter) => {
    return { type: 'SET_VISIBILITY_FILTER', filter }
}

export const removeDataset = ({ id } = {}) => ({
    type: 'REMOVE_DATASET',
    id
})

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
export const addDataset = ({ x = 0, y = 0, name = '', headers = [], mainProcessingLine = '', filePointer = []} = {}) => ({
    type: 'ADD_DATASET',
    dataset: {
        id: uuid(),
        name,
        x,
        y,
        headers,
        mainProcessingLine,
        filePointer
    }
});

;*/