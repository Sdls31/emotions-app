import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from '@mui/material/styles';

import Routes from 'components/Routes';

const App = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};

export default App;
