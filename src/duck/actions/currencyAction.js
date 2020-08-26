import {
  GET_CURRENCIES,
  CONVERT_CURRENCY,
  ADD_ACTION_HISTORY,
  RESET_HISTORY,
} from 'duck/actionTypes/currencyActionTypes';

export const getAllCurrencies = () => async dispatch => {
  const response = await fetch(`${process.env.GATSBY_API_URL}/latest`);
  const { rates } = await response.json();

  await dispatch({
    type: GET_CURRENCIES,
    payload: Object.keys(rates),
  });
};

export const convertCurrency = ({
  countBase,
  currencyFrom,
  currencyTo,
}) => async dispatch => {
  const response = await fetch(
    `${process.env.GATSBY_API_URL}/convert?from=${currencyFrom}&to=${currencyTo}&amount=${countBase}`
  );
  const { result, date } = await response.json();

  await dispatch({
    type: CONVERT_CURRENCY,
    payload: result,
  });

  await dispatch({
    type: ADD_ACTION_HISTORY,
    payload: { countBase, countTarget: result, currencyFrom, currencyTo, date },
  });
};

export const resetHistory = () => ({ type: RESET_HISTORY });
