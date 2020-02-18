import React, { Component, Fragment, useState } from 'react';
import { Menu, Dropdown, Button, Icon, message } from 'antd';
import { Layout, Breadcrumb } from 'antd';
import { Modal } from 'antd';
import DatasetModalLogic from './DatasetModalLogic';
import DatasetsList from './DatasetsList';

const { Header, Content, Footer, Sider } = Layout;

class Datasets extends Component {
  state = { 
            datasetModalVisible: false,
            datasetModalForwardButton: false, 
          };

  addDatasetModal = () => {
    this.setState({
      datasetModalVisible: true
    });
  };

 
  handleOk = e => {
    console.log(e);
    this.setState({
      ModalText: 'The modal will be closed after two seconds',
      confirmLoading: true,
    });
    setTimeout(() => {
      this.setState({
        datasetModalVisible: false,
        confirmLoading: false,
      });
    }, 2000);
  };

  handleCancel = e => {
    //console.log(e);
    this.setState({
      datasetModalVisible: false,
    });
  };

  
    render() {
      const { datasetModalVisible, confirmLoading, ModalText } = this.state;
      return( 
    <Layout>
      <Content>
      <Button type="primary" onClick={this.addDatasetModal} >
        Add a local Dataset
      </Button>
      <Modal
          title="Choose your dataset"
          visible={this.state.datasetModalVisible}
          confirmLoading={confirmLoading}
          footer=''
          //onOk={this.handleOk}
          onCancel={this.handleCancel}
          /*footer={[
            <Button key="back" onClick={this.handleCancel}>Cancel</Button>,
            <Button key="submit" type="primary" onClick={this.handleOk}>Next <Icon type="right" /></Button>
          ]}*/
        >
          <DatasetModalLogic closeModal={this.handleCancel} />
        </Modal>
      <DatasetsList />
   </Content>
    </Layout>
      );
    };
}

export default Datasets;
