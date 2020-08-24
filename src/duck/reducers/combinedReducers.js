import { combineReducers } from 'redux';

import counterReducer from './counterReducer';

export default combineReducers({
  // router: connectRouter(history),
  counter: counterReducer,
});
