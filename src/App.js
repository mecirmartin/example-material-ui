import 'react-perfect-scrollbar/dist/css/styles.css';
import React from 'react';
import { useRoutes, useLocation } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from 'src/components/GlobalStyles';
import 'src/mixins/chartjs';
import theme from 'src/theme';
import routes from 'src/routes';

const App = () => {
  const routing = useRoutes(routes);
  const history = useLocation();
  console.log('toto', history);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {routing}
    </ThemeProvider>
  );
};

export default App;
