import uuid from 'uuid';

export const addDataset = ({ x = 0, y = 0, headers = '', mainProcessingLine = ''} = {}) => ({
    type: 'ADD_DATASET',
    expense: {
        id: uuid(),
        x,
        y,
        headers,
        mainProcessingLine
    }
});

export const removeDataset = ({ id } = {}) => ({
    type: 'REMOVE_DATASET',
    id
});