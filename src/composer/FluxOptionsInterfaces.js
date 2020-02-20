import React from 'react';
import selectDatasets from '../selectors/datasets';
import { connect } from 'react-redux';
import { Select } from 'antd';

const { Option } = Select;


const FluxOptionsInterfaces = (props) => {
    switch(props.id) {
      case '3001':
    return (<div>Select the input dataset: 
      <Select style={{ width: 120 }} onChange={(e) => props.changeInput(e)}>
      {props.datasets.map((dataset) => { 
        return <Option key={dataset.id} value={dataset.id}>{dataset.name}</Option>})}
        </Select>
        </div>);
      case '2001':
        return (<div>Hello!</div>);
      case '1001':
        return (<div>Teste</div>);
      default:
        return (<div>Hi!</div>);
    }
  };
  
const mapStateToProps = (state) => {
    return {
        datasets: selectDatasets(state.datasets, state.filters)
    };
};

export default connect(mapStateToProps)(FluxOptionsInterfaces);