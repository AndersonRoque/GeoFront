let DatasetId = 0;

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