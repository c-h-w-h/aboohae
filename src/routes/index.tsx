import MobileContainer from '@components-layout/MobileContainer';
import { Routes as ReactRouterRoutes, Route } from 'react-router-dom';
import BankPage from 'src/pages/BankPage';
import IndexPage from 'src/pages/IndexPage';
import LoanPage from 'src/pages/LoanPage';

const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route path="/" element={<MobileContainer />}>
        <Route index element={<IndexPage />} />
        <Route path="/loan" element={<LoanPage />} />
        <Route path="/bank" element={<BankPage />} />
      </Route>
    </ReactRouterRoutes>
  );
};

export default Routes;
