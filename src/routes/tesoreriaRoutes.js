import React from 'react';

const SolicitudGastoPage = React.lazy(() => import('../pages/tesoreria/solicitud-gasto/SolicitudGastoPage'));

const tesoreriaRoutes = [{ name: 'tesoreria-solicitud', path: 'solicitud', element: <SolicitudGastoPage /> }];

export default tesoreriaRoutes;
