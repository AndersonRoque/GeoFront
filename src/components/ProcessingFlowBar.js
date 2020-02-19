import React, { Component } from 'react';
import { Button, Modal } from 'antd';
import ProcessingFluxDisplay from './ProcessingFluxDisplay';
import ProcessingAddFluxModalLogic from './ProcessingAddFluxModalLogic';

class ProcessingFlowBar extends Component {
  state = {
    addFluxModalVisible: false
  };

  addFluxVisible = () => {
    this.setState({
      addFluxModalVisible: true
    });
  };

  handleAddFluxClose = e => {
    this.setState({
      addFluxModalVisible: false,
    });
  };
  
  render() {
    return (
      <div>
      <h1>Fluxes</h1>
      <Button type="primary"onClick={this.addFluxVisible} >
        Add Flux
      </Button>
      <Modal
          title="Customize a new flux"
          visible={this.state.addFluxModalVisible}
          footer=''
          //onOk={this.handleOk}
          onCancel={this.handleAddFluxClose}
          /*footer={[
            <Button key="back" onClick={this.handleCancel}>Cancel</Button>,
            <Button key="submit" type="primary" onClick={this.handleOk}>Next <Icon type="right" /></Button>
          ]}*/
        >
          <ProcessingAddFluxModalLogic closeModal={this.handleAddFluxClose} />
        </Modal>
        <br />
      <ProcessingFluxDisplay />
  </div>
    );
  }
};

export default ProcessingFlowBar