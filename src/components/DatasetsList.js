import React from "react";
import { connect } from "react-redux";
import DatasetsListItem from "./DatasetsListItem";
// import { getTodos } from "../redux/selectors";
import { getDatasetsByVisibilityFilter } from "../selectors/datasets";
import { VISIBILITY_FILTERS } from "../constants";
import { addDataset } from '../actions/datasets'


const DatasetsList = (props) => (
  <div>
      <h1>Datasets</h1>
      {props.datasets.map((dataset) => {
          return <DatasetsListItem key={dataset.id} {...dataset} />
      })}
  </div>
);

const mapStateToProps = state => {
  const { visibilityFilter } = state;
  const datasets = getDatasetsByVisibilityFilter(state, visibilityFilter);
  return { datasets };
};

export default connect(mapStateToProps)(DatasetsList);
