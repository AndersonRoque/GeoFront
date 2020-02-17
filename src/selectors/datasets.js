import { VISIBILITY_FILTERS } from "../constants";

export const getDatasetsState = store => store.todos;

export const getDatasetList = store =>
  getDatasetsState(store) ? getDatasetsState(store).allIds : [];

export const getDatasetById = (store, id) =>
  getDatasetsState(store) ? { ...getDatasetsState(store).byIds[id], id } : {};

/**
 * example of a slightly more complex selector
 * select from store combining information from multiple reducers
 */
export const getDatasets = store =>
  getDatasetList(store).map(id => getDatasetById(store, id));

export const getDatasetsByVisibilityFilter = (store, visibilityFilter) => {
  const allDatasets = getDatasets(store);
  switch (visibilityFilter) {
    case VISIBILITY_FILTERS.COMPLETED:
      return allDatasets.filter(dataset => dataset.completed);
    case VISIBILITY_FILTERS.INCOMPLETE:
      return allDatasets.filter(dataset => !dataset.completed);
    case VISIBILITY_FILTERS.ALL:
      return allDatasets;
    default:
      return allDatasets;
  }
};