// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4CAF50', // Green
    },
    secondary: {
      main: '#FF5722', // Orange
    },
    background: {
      default: '#FFFFFF', // White background
      paper: '#E0F7FA', // Light blue paper
    },
    text: {
      primary: '#212121', // Dark text
      secondary: '#757575', // Grey text
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
    },
  },
});

export default theme;
