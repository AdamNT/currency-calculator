import { INCREMENT, DECREMENT } from 'duck/actionTypes/counterActionTypes';

export const incrementCounter = () => ({ type: INCREMENT });

export const decrementCounter = () => ({ type: DECREMENT });
