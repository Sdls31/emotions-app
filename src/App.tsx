import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from '@mui/material/styles';

import NavBar from 'components/NavBar';
import Routes from 'components/Routes';

const App = () => {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  );
};

export default App;
