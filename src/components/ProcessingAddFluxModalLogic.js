import React, { Component } from 'react';
import { Button, Input } from 'antd';
import '../styles/App.css';
import { Select } from 'antd';
import { Collapse } from 'antd';
import FluxOptionsInterfaces from '../composer/FluxOptionsInterfaces';
import { connect } from 'react-redux'
import { addFlux } from '../actions/fluxes';
//import run from '../composer/run';
import store from '../store/configureStore';
const { Panel } = Collapse;

var dataSource = require( '../composer/fluxes').fluxesClasses;
const { Option, OptGroup } = Select;


class ProcessingAddFluxModalLogic extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.fluxListScan = this.fluxListScan.bind(this);
    this.handleAddFlux = this.handleAddFlux.bind(this);
    this.handleAddRunFlux = this.handleAddRunFlux.bind(this);
    this.changeInputState = this.changeInputState.bind(this);
    this.changeFluxName = this.changeFluxName.bind(this);
    this.state = {
      name: '',
      input: [],
      fluxes: []
    }
  }


  // TO-DO: Scan the entire dataSource tree
  fluxListScan = (id) => { 
    //console.log(`title: ${id}`)
    for (const element of Object.entries(dataSource)) {
      if(element[1].children[0].id === id) {
        return element[1].children[0].title
      }
  }
}

    changeInputState = (inputState) => {
      this.setState({input: inputState});
    }

    handleChange = (value) => {
      this.setState({fluxes: this.state.fluxes.concat(value)});
    }

    handleAddFlux = () => {
      this.props.dispatch(addFlux({name: this.state.name, input: this.state.input, processing: this.state.fluxes }));
      //console.log(this.state.input);
      this.props.closeModal();
    };

    handleAddRunFlux = () => {
      this.props.dispatch(addFlux({name: this.state.name, input: this.state.input, processing: this.state.fluxes }));
      //console.log(this.state.fluxes);
      this.props.closeModal();
      //run();
    };

    changeFluxName = (event) => {
      //console.log(event.target.value);
      this.setState({name: event.target.value});
    }
  
    render() {
      // TO-DO: Fix error
    var processingTimeline = this.state.fluxes.map(flux => (
    this.state.fluxes ?   
    <Panel header={this.fluxListScan(flux)} key={flux}>
      <FluxOptionsInterfaces id={flux} changeInput={this.changeInputState} />
    </Panel> : ''));

    const options = dataSource.map(group => (
    <OptGroup key={group.title} label={<span>{group.title}</span>}>
      {group.children.map(opt => (
        <Option key={opt.title} value={opt.id}>
          {opt.title}
          <span className="certain-search-item-count">{opt.id}</span>
        </Option>
      ))}
    </OptGroup>
  ))
  .concat([
    <Option disabled key="all" className="show-all">
      <a href="https://www.google.com/search?q=antd" target="_blank" rel="noopener noreferrer">
        View all results
      </a>
    </Option>,
  ]);

    return(
      <div>
      <Input placeholder="Put the fucking name here" onChange={this.changeFluxName} />
      <Collapse accordion>
      {processingTimeline}
      </Collapse><br />
      <Select defaultValue="Processing functions" style={{ width: 200 }} onChange={this.handleChange}>
          {options}
      </Select>
            <Button type="normal" onClick={this.handleAddFlux}>Add</Button>
        </div>
      );
  };
}
/*        */

export default connect()(ProcessingAddFluxModalLogic);