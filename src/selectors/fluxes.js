export default (fluxes, text) => {
    return fluxes.filter((flux) => {
        const textMatch = flux.name.toLowerCase().includes(flux.name.toLowerCase());
  
        return textMatch;
    })
};
  