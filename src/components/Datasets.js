import React, { Component } from 'react';
import { Menu, Dropdown, Button, Icon, message } from 'antd';
import { Layout, Breadcrumb } from 'antd';
import addDatasetModal from './AddDatasetModal';
const { Header, Content, Footer, Sider } = Layout;


class Datasets extends Component {
    render() {
      return( 
    <Layout>
      <Content>
      <Button type="primary" onClick={this.openaddDatasetModal} >
        Add a Dataset
      </Button>
   </Content>
    </Layout>
      );
    };
}

export default Datasets;