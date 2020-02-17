import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SideNav from './SideNav'
import routes from '../router/MainRoutes';
import '../styles/App.css';


class Geofront extends Component {
  render() {
    return (
      <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <SideNav />
        <Layout>
        {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              component={route.main}
            />
          ))}
      </Layout>
      </Layout>
       </Router>
    );
  }
}

export default Geofront;