import { SET_CURRENT_USER } from "../actions/type";

const INITIAL_STATE = {
  currentUser: null
};

export default (state = INITIAL_STATE, action) => {
  const { payload, type } = action;

  switch (type) {
    case SET_CURRENT_USER:
      return { ...state, currentUser: payload };

    default:
      return state;
  }
};
