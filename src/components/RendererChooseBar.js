import React, { Component } from 'react';
import selectFluxes from '../selectors/fluxes';
import { connect } from 'react-redux';
import { Select } from 'antd';

const { Option } = Select;

// TODO: On-Change on Select
const RendererChooseBar = (props) => (
            <div>
        <Select style={{ width: 120 }}> 
        {props.fluxes.map((flux) => { return <Option key={flux.id} value={flux.id}>{flux.name}</Option>})}
        </Select>
        </div>
    );

const mapStateToProps = (state) => {
    return {
        fluxes: selectFluxes(state.fluxes, state.filters)
    };
};

export default connect(mapStateToProps)(RendererChooseBar);

