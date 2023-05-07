import React from 'react';
import {
  Grid,
  ThemeProvider
} from '@mui/material';
import customTheme from './themes/theme';
import { indigo } from '@mui/material/colors';
import Sidebar from './modules/sidebar';
import Dashboard from './modules/dashboard';


function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <Grid
        container
        bgcolor={indigo[300]}
        minHeight={'100vh'}
      >
        <Grid item xs={12} sm={4} md={3} lg={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={12} sm={8} md={9} lg={10}>
          <Dashboard />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
