import React from 'react';
import { connect } from 'react-redux';
import DatasetsListItem from './DatasetsListItem'
import selectDatasets from '../selectors/datasets';


const DatasetsList = (props) => (
  <div>
      <h1>Datasets</h1>
      {props.datasets.map((dataset) => {
          return <DatasetsListItem key={dataset.id} {...dataset} />
      })}
  </div>
);


const mapStateToProps = (state) => {
  return {
      datasets: selectDatasets(state.datasets, state.filters)
  };
};

export default connect(mapStateToProps)(DatasetsList);
