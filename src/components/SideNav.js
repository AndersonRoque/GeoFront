import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const { Sider } = Layout;
const { SubMenu } = Menu;

class SideNav extends Component {
    state = {
        collapsed: true
    };

    onCollapse = collapsed => {
        this.setState({ collapsed });
    };

    render() {
        return( 
            <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
             <Menu.Item key="1">
                 <Icon type="dashboard" />
                 <span>Dashboard</span>
                 <Link to="/" />
             </Menu.Item>
                <Menu.Item key="2">
                <Icon type="database" />
                 <span>Datasets</span>
                 <Link to="/datasets" />
                </Menu.Item>
            <Menu.Item key="3">
                <Icon type="sliders" />
                 <span>Processing</span>
                 <Link to="/processing" />
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="setting" />
              <span>Configuration</span>
              <Link to="/config" />
            </Menu.Item>
            </Menu>
            </Sider>
        );      
    };
}

export default SideNav;