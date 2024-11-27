import Home from 'pages/Home/Home';
import { Navigate, Route, Routes as RoutesFromRouter } from 'react-router-dom';

import RoutesEnum from 'types/routes.enum';

const Routes = () => (
  <RoutesFromRouter>
    <Route path={RoutesEnum.HOME} element={<Home />} />
  </RoutesFromRouter>
);
export default Routes;
