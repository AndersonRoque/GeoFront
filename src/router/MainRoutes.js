import React from 'react';


import Config from '../components/Config';
import Dashboard from '../components/Dashboard';
import Datasets from '../components/Datasets';
import PageNotFound from '../components/PageNotFound';

const routes = [
    { path: '/',
      exact: true,
      main: Dashboard
    },
    { path: '/config',
      main: Config
    },
    { path: '/datasets',
      main: Datasets
    }
]

export default routes;