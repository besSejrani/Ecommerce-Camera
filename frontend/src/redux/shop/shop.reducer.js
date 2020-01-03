import SHOP_DATA from "./shop.data";

const INITIAL_STATE = {
  items: SHOP_DATA
};

export default (state = INITIAL_STATE, actions) => {
  const { type } = actions;
  switch (type) {
    default:
      return state;
  }
};
