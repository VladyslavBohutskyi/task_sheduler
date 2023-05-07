import React from "react";
import { createTheme } from '@mui/material/styles';

const customTheme = createTheme({
  palette: {
    primary: {
      light: '#42e578',
      main: '#04b338',
      dark: '#033e15',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

export default customTheme
