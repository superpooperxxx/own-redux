export const createStore = (reducer, initialState = reducer(undefined, {})) => {
  let state = initialState;
  const callbacks = [];

  return {
    getState() {
      return state;
    },
    dispatch(action) {
      state = reducer(state, action);

      callbacks.forEach((callback) => callback());
    },
    subscribe(callback) {
      callbacks.push(callback);
    },
  };
};

// {
//   amount: amountReducer(state.amount, action),
//   goods: goodsReducer(state.goods, action),
//   position: positionReducer(state.position, action),
// }

export const combineReducers = (reducers) => {
  return (state = {}, action) => {
    const result = {};

    for (const [key, reducer] of Object.entries(reducers)) {
      result[key] = reducer(state[key], action);
    }

    return result;
  };
};
