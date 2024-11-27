import { createTheme } from '@mui/material/styles';

export const evo2FontFamily = "'Exo 2', sans-serif";

const primary = {
  dark: '#293937',
  main: '#378CE8',
  light: '#E9E7E5',
  text: '#001A5B'
};

export const Colors = {
  white: '#FFFFFF',
  black: '#000000',
  successful: '#03BB50',
  blue: '#00769F',
  primary,
  neutral: '#B9B0AA',
  grey: '#E9E7E5'
};

const theme = createTheme({
  palette: {
    mode: 'light',
    primary
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: Colors.white
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none'
        }
      }
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor:
            'linear-gradient(180deg, #00769F 12.74%, rgba(0, 118, 159, 0.00) 79.99%)',
          fontFamily: 'Nunito'
        }
      }
    }
  },
  typography: {
    fontFamily: [
      'Nunito Sans',
      '"Inter"',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Poppins"',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(',')
  }
});

export default theme;
