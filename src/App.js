import { Routes, Route } from 'react-router-dom';

import DefaultLayout from './components/layout/DefaultLayout';

import routes from './routes';

function App() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        {routes.map(({ path, name, element, isIndex, routes: currentRoutes }) =>
          isIndex ? (
            <Route key={name} index element={element} />
          ) : (
            <Route key={name} path={path}>
              {currentRoutes.map(({ path: subPath, name: subName, element: subElement }) => (
                <Route key={subName} path={subPath} element={subElement} />
              ))}
            </Route>
          )
        )}
      </Route>
      <Route path="*" element={<div>Not found</div>} />
    </Routes>
  );
}

export default App;
