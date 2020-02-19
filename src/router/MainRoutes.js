import Config from '../components/Config';
import Dashboard from '../components/Dashboard';
import Datasets from '../components/Datasets';
import Processing from '../components/Processing';
import PageNotFound from '../components/PageNotFound';


const routes = [
    { path: '/',
      exact: true,
      main: Dashboard
    },
    { path: '/config',
      main: Config
    },
    { path: '/processing',
    main: Processing
    },
    { path: '/datasets',
      main: Datasets
    },
    { 
    component: {PageNotFound},
    path: '/pagenotfound'
  },
]

export default routes;