import {SAVE_AMOUNT, SHOW_CARD_NUMBER} from '../actions/types';

const initialState = {
  showCardNumber: false,
  amount: 0,
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_CARD_NUMBER:
      return {
        ...state,
        showCardNumber: action.payload,
      };

    case SAVE_AMOUNT:
      return {
        ...state,
        amount: action.payload,
      };

    default:
      return state;
  }
};

export default Reducer;
