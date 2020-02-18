export default (datasets, text) => {
  return datasets.filter((dataset) => {
      const textMatch = dataset.name.toLowerCase().includes(dataset.name.toLowerCase());

      return textMatch;
  })
  };
