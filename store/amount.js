const ADD = "amount/ADD";
const TAKE = "amount/TAKE";
const CLEAR = "amount/CLEAR";

// Action creators
export const actions = {
  add: (payload) => ({
    type: ADD,
    payload,
  }),
  take: (payload) => ({
    type: TAKE,
    payload,
  }),
  clear: () => ({
    type: CLEAR,
  }),
};

// Reducer
export const amountReducer = (state = 0, action) => {
  switch (action.type) {
    case ADD:
      return state + action.payload;
    case TAKE:
      if (state < action.payload) {
        return state;
      }

      return state - action.payload;
    case CLEAR:
      return 0;
    default:
      return state;
  }
};
