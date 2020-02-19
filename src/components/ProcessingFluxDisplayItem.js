import React from 'react';
import { connect } from 'react-redux';

const ProcessingFluxDisplayItem = ({ name }) => (
    <li>
      {name}
    </li>
  );
  
  
  export default connect()(ProcessingFluxDisplayItem);