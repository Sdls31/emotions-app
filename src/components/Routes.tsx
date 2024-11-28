import Home from 'pages/Home/Home';
import { Navigate, Route, Routes as RoutesFromRouter } from 'react-router-dom';

import RoutesEnum from 'types/routes.enum';

import { AboutUs } from './AboutUs';

const Routes = () => (
  <RoutesFromRouter>
    <Route path={RoutesEnum.HOME} element={<Home />} />
    <Route path={RoutesEnum.US} element={<AboutUs />} />
  </RoutesFromRouter>
);
export default Routes;
