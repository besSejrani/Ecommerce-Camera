import { TOGGLE_CARD_HIDDEN } from "../actions/type";

const INITIAL_STATE = {
  hidden: true
};

export default (state = INITIAL_STATE, actions) => {
  const { type } = actions;

  switch (type) {
    case TOGGLE_CARD_HIDDEN:
      return { ...state, hidden: !state.hidden };
    default:
      return state;
  }
};
