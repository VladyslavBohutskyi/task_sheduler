import React from "react";
import { createTheme } from '@mui/material/styles';
import { purple } from "@mui/material/colors";


const purpleTheme = createTheme({
  palette: {
      primary: {
          main: purple[500],
          contrastText: '#FFFFFF'
      },
      secondary: {
          main: purple["A400"]
      },
      background: {
          default: purple[50],
      },
  },
  typography: {
      fontFamily: 'Quicksand',
      fontSize: 14
  },
})

export default purpleTheme
