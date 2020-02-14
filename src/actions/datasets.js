import uuid from 'uuid';

export const addDataset = ({ x = 0, y = 0, name = '', mainProcessingLine = ''} = {}) => ({
    type: 'ADD_DATASET',
    dataset: {
        id: uuid(),
        name,
        x,
        y,
        //headers,
        mainProcessingLine
    }
});

export const removeDataset = ({ id } = {}) => ({
    type: 'REMOVE_DATASET',
    id
});