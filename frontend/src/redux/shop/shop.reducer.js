import * as shopType from "./shop.types";

const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: ""
};

export default (state = INITIAL_STATE, actions) => {
  const { type, payload } = actions;
  switch (type) {
    case shopType.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true
      };
    case shopType.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: payload
      };

    case shopType.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: payload
      };

    default:
      return state;
  }
};
