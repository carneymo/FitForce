import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
    action: {
      selected: '#1976d2',
    },
    background: {
      default: '#0A1929',
      paper: '#001e3c;',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          color: '#fff',
        },
        containedPrimary: {
          color: '#fff',
        },
      },
    },
    MuiButtonGroup: {
      styleOverrides: {
        contained: {
          size: 'small',
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          size: 'small',
        },
      },
    },
  },
});

export default theme;
