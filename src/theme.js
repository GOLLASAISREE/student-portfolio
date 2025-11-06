import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0f766e' // teal-ish primary
    },
    secondary: {
      main: '#0ea5a4'
    },
    background: {
      default: '#faf9f7',
      paper: '#ffffff'
    }
  },
  typography: {
    h3: { fontWeight: 700 },
    h4: { fontWeight: 700 },
    h6: { fontWeight: 600 }
  },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true }
    }
  }
});

export default theme;