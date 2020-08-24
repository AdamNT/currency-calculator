import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

import configureStore from 'duck/createStore';
import GlobalStyle from 'assets/styles/GlobalStyle';
import themes from 'assets/styles/themes';

const store = configureStore();

const App = ({ children }) => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <ThemeProvider theme={themes.main}>{children}</ThemeProvider>
    </Provider>
  );
};

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
