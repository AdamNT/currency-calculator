import { INCREMENT, DECREMENT } from 'duck/actionTypes/counterActionTypes';

const initialState = {
  value: 0,
};

const counterReducer = (state = initialState, { type }) => {
  switch (type) {
    case INCREMENT:
      return {
        ...state,
        value: state.value + 1,
      };
    case DECREMENT:
      return {
        ...state,
        value: state.value - 1,
      };

    default:
      return state;
  }
};

export default counterReducer;
