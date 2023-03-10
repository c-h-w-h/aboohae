import { Routes as ReactRouterRoutes, Route } from 'react-router-dom';
import IndexPage from 'src/pages/IndexPage';

const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route index element={<IndexPage />} />
    </ReactRouterRoutes>
  );
};

export default Routes;
