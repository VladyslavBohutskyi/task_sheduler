import React from 'react';
import {
  Grid,
  ThemeProvider
} from '@mui/material';
import customTheme from './themes/theme';
import { indigo } from '@mui/material/colors';


function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <Grid
        container
        bgcolor={indigo[300]}
        minHeight={'100vh'}
      >
      </Grid>
    </ThemeProvider>
  );
}

export default App;
