let FluxId = 0;

export const addFlux = ({ name = '', input = [], output = '', processing = []} = {}) => ({
    type: 'ADD_FLUX',
    flux: {
        id: ++FluxId,
        name,
        input,
        output,
        processing,
    }
});