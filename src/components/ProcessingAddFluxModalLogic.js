import React, { Component } from 'react';
import { Icon, Input, AutoComplete } from 'antd';
import { Button } from 'antd';
import '../styles/App.css';
import { Select } from 'antd';
import { Timeline } from 'antd';
import { Collapse } from 'antd';

const { Panel } = Collapse;

var dataSource = require( '../composer/fluxes').fluxesClasses;
const { Option, OptGroup } = Select;


class ProcessingAddFluxModalLogic extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.fluxListScan = this.fluxListScan.bind(this);
    this.state = {
      fluxes: []
    }
  }

  fluxListScan = (id) => { 
    console.log(`title: ${id}`)
    for (const element of Object.entries(dataSource)) {
      if(element[1].children[0].id == id) {
        return element[1].children[0].title
      }
  }
}

    handleChange = (value) => {
      this.setState({fluxes: this.state.fluxes.concat(value)});
    }

    render() {
      
    var processingTimeline = this.state.fluxes.map(flux => (<Panel header={this.fluxListScan(flux)}><p>Config Adjust here</p></Panel>));

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
      <Collapse accordion>
      {processingTimeline}
      </Collapse>
        <Select defaultValue="Processing Step" style={{ width: 200 }} onChange={this.handleChange}>
          {options}
        </Select>
            <Button type="primary">Add n' Run</Button>
            <Button type="normal">Add</Button>
        </div>
      );
  };
}

/*
function renderTitle(title) {
  return (
    <span>
      {title}
    </span>
  );
}

const fluxes = [];

const options = dataSource
  .map(group => (
    <OptGroup key={group.title} label={renderTitle(group.title)}>
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

  function handleChange(value) {
    fluxes.push(value);
    console.log(fluxes);
  }
  
var processingTimeline = fluxes.map(flux => (<Timeline.Item>{flux}</Timeline.Item>));


const ProcessingAddFluxModalLogic = (props) => (
  <div>
<Timeline>
{processingTimeline}
</Timeline>
  <Select defaultValue="Processing Step" style={{ width: 200 }} onChange={handleChange}>
    {options}
  </Select>
      <Button type="primary">Add n' Run</Button>
      <Button type="normal">Add</Button>
  </div>
);
*/

export default ProcessingAddFluxModalLogic