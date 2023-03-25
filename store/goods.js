const ADD = "goods/ADD";
const TAKE = "goods/TAKE";
const CLEAR = "goods/CLEAR";

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
export const goodsReducer = (goods = [], action) => {
  switch (action.type) {
    case ADD:
      return [...goods, action.payload];
    case TAKE:
      return goods.filter((good) => good !== action.payload);
    case CLEAR:
      return [];
    default:
      return goods;
  }
};
