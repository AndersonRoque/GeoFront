import React from 'react';
import { connect } from 'react-redux';
import ProcessingFluxDisplayItem from './ProcessingFluxDisplayItem'
import selectFluxes from '../selectors/fluxes';


const ProcessingFluxDisplay = (props) => (
  <div>
      {props.fluxes.map((flux) => {
          return <ProcessingFluxDisplayItem key={flux.id} {...flux} />
      })}
  </div>
);


const mapStateToProps = (state) => {
  return {
      fluxes: selectFluxes(state.fluxes, state.filters)
  };
};

export default connect(mapStateToProps)(ProcessingFluxDisplay);
