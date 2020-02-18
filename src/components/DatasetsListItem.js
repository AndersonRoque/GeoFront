import React from "react";
import { connect } from "react-redux";


const DatasetsListItem = ({ id, name }) => (
  <li>
    {name}
    <span>
    {id}
    </span>
  </li>
);


export default connect()(DatasetsListItem);
