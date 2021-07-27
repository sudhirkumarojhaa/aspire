/* eslint-disable no-unused-vars */
import {SAVE_AMOUNT, SHOW_CARD_NUMBER} from './types';

export const showCardNumber = data => ({
  type: SHOW_CARD_NUMBER,
  payload: data,
});

export const saveAmount = data => ({
  type: SAVE_AMOUNT,
  payload: data,
});
