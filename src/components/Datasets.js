import React, { Component } from 'react';
import { Menu, Dropdown, Button, Icon, message } from 'antd';
import { Layout, Breadcrumb } from 'antd';
import { Modal } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

function buildFileSelector(){
  const fileSelector = document.createElement('input');
  fileSelector.setAttribute('type', 'file');
  fileSelector.setAttribute('multiple', 'multiple');
  return fileSelector;
}

class Datasets extends Component {

  state = { datasetModalVisible: false,
            datasetModalForwardButton: false };

  componentDidMount(){
    this.fileSelector = buildFileSelector();
  }

  addDatasetModal = () => {
    this.setState({
      datasetModalVisible: true,
    });
  };
 
  handleOk = e => {
    console.log(e);
    this.setState({
      datasetModalVisible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      datasetModalVisible: false,
    });
  };

  handleFileSelect = (e) => {
    e.preventDefault();
    this.fileSelector.click();
  }

  openFile = async () => {
    let file;
    let fileHandle;

  };
  
    render() {
      return( 
    <Layout>
      <Content>
      <Button type="primary" onClick={this.addDatasetModal} >
        Add a Dataset
      </Button>
      <Modal
          title="Choose your dataset"
          visible={this.state.datasetModalVisible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>Cancel</Button>,
            <Button key="submit" type="primary" onClick={this.handleOk} disabled>Next <Icon type="right" /></Button>
          ]}
        >
           <Button type="primary" onClick={this.handleFileSelect}>Select files</Button>

        </Modal>
   </Content>
    </Layout>
      );
    };
}

export default Datasets;
