import uuid from 'uuid';

export const addDataset = ({ x = 0, y = 0, name = '', headers = [], mainProcessingLine = '', filePointer = []} = {}) => ({
    type: 'ADD_DATASET',
    dataset: {
        id: uuid(),
        x,
        y,
        name,
        headers,
        mainProcessingLine,
        filePointer
    }
});