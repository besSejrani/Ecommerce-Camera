import * as cartType from "./cart.types";

/**
|--------------------------------------------------
| HEADER
|--------------------------------------------------
*/

export const toggleCartHidden = () => ({
  type: cartType.TOGGLE_CART_HIDDEN
});

/**
|--------------------------------------------------
| CART
|--------------------------------------------------
*/

export const addItem = item => ({
  type: cartType.ADD_ITEM,
  payload: item
});

export const removeItem = item => ({
  type: cartType.REMOVE_ITEM,
  payload: item
});

export const clearItemFromCart = item => ({
  type: cartType.CLEAR_ITEM_FROM_CART,
  payload: item
});

export const clearCart = () => {
  return {
    type: cartType.CLEAR_CART
  };
};
