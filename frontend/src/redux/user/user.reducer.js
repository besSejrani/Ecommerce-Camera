import * as userType from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  error: null
};

const userReducer = (state = INITIAL_STATE, actions) => {
  const { type, payload } = actions;
  switch (type) {
    case userType.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: payload,
        error: null
      };

    case userType.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null
      };

    case userType.SIGN_IN_FAILURE:
    case userType.SIGN_OUT_FAILURE:
    case userType.SIGN_UP_FAILURE:
      return { ...state, error: payload };

    default:
      return state;
  }
};

export default userReducer;
