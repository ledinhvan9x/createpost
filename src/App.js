/* eslint-disable no-trailing-spaces */
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from 'pages/HomePage/HomePage';
import Layout from 'components/Layout/Layout';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import routes from './routes';

function App() {
  const showRoute = (routesExample, key) => {
    let result = null;
    if (routesExample.length > 0) {
      result = routesExample.map((route) => (
        <Route
          key={`${key}_${key}-${route.path}`}
          path={route.path}
        >
          {route?.children && showRoute(route.children, route.path)}
          <Route index element={route.element} />
        </Route>
      ));
    }
    return result;
  };

  return (
    <BrowserRouter>
      <div className="container-fluid">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            {showRoute(routes, 'app')}
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
