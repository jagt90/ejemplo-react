import React from 'react';

import tesoreriaRoutes from './tesoreriaRoutes';

const Home = React.lazy(() => import('../pages/home/HomePage'));

const routes = [
  { name: 'home', element: <Home />, isIndex: true, routes: [] },
  { name: 'tesoreria', path: 'tesoreria', routes: tesoreriaRoutes },
];

export default routes;
