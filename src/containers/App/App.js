import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

import configureStore from 'duck/createStore';
import themes from 'assets/styles/themes';
import { loadState, saveState } from 'utils/localStorage';

const persistedState = loadState();
const store = configureStore(persistedState);
store.subscribe(() => {
  saveState({
    currency: {
      currencies: store.getState().currency.currencies,
      countTarget: '',
      history: store.getState().currency.history,
    },
  });
});

const App = ({ children }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={themes.main}>{children}</ThemeProvider>
    </Provider>
  );
};

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
