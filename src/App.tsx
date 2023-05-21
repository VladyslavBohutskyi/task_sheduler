import React from 'react';
import { Grid, ThemeProvider, Box } from '@mui/material';
import Sidebar from './modules/sidebar';
import Dashboard from './modules/dashboard';
import { Routes, Route } from 'react-router-dom';
import Todo from './modules/todo';
import Themes from './modules/themes';
import Notes from './modules/notes';
import { observer } from 'mobx-react';
import ThemeStore from './store/theme'

const App = observer(() => {


  return (
    <ThemeProvider theme={ThemeStore.activeTheme}>
      <Box
        p={'3%'}
        minHeight={'100vh'}
        bgcolor={'background.paper'}
        display={'flex'}
      >
        <Grid container
          minHeight={'800px'}
          maxWidth={'1600px'}
          m={'auto'}
          overflow={'hidden'}
          bgcolor={'primary.main'}
          p={1}
          borderRadius={8}
        >
          <Grid item xs={12} sm={4} md={3} lg={2}
            p={5}
            pt={4}
            bgcolor={'primary.main'}
          >
            <Sidebar />
          </Grid>
          <Grid item xs={12} sm={8} md={9} lg={10}
            p={5}
            pt={4}
            bgcolor={'background.default'}
            borderRadius={8}
          >
            <Grid container>
              <Grid item lg={12}>
                <Dashboard />
              </Grid>
              <Grid item md={12} lg={8}>
                <Routes>
                  <Route path='/' element={<Todo />} />
                  <Route path='/themes' element={<Themes />} />
                  <Route path='/notes' element={<Notes />} />
                </Routes>
              </Grid>
              <Grid item md={12} lg={4}>
                <h1>Calendar</h1>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
})

export default App;