import CdsProvider from '@components-common/CdsProvider';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

function App() {
  return (
    <CdsProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </CdsProvider>
  );
}

export default App;
