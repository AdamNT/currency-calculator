import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import combinedReducers from './reducers/combinedReducers';

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== 'production') {
    return composeWithDevTools(applyMiddleware(...middleware));
  }

  return applyMiddleware(...middleware);
};

const middlewares = [thunkMiddleware];

const configureStore = (preloadedState = {}) => {
  const store = createStore(
    combinedReducers, // root reducer with router state
    preloadedState,
    bindMiddleware(middlewares)
  );

  return store;
};

export default configureStore;
