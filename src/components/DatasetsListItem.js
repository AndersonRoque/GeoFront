import React from "react";
import { connect } from "react-redux";
import { addDataset } from '../actions/datasets'

addDataset(0, 0, 'aaaab', '', '', '', true);


const DatasetsListItem = ({ dataset }) => (
  <li>
    {dataset.name}
    <span>
      {dataset.id}
    </span>
  </li>
);

// export default Todo;
export default connect()(DatasetsListItem);
