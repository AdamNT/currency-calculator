import produce from 'immer';

import {
  GET_CURRENCIES,
  CONVERT_CURRENCY,
  ADD_ACTION_HISTORY,
  RESET_HISTORY,
} from 'duck/actionTypes/currencyActionTypes';

const initialState = {
  currencies: [],
  countTarget: '',
  history: [],
};

const currencyReducer = (state = initialState, { type, payload }) => {
  return produce(state, draft => {
    switch (type) {
      case GET_CURRENCIES:
        draft.currencies = payload;
        return draft;

      case CONVERT_CURRENCY:
        draft.countTarget = payload;
        return draft;

      case ADD_ACTION_HISTORY:
        draft.history.push(payload);
        return draft;

      case RESET_HISTORY:
        draft.history = [];
        return draft;

      default:
        return draft;
    }
  });
};

export default currencyReducer;
