import { TESTING } from "../actions/auth";

const initialState = {
  data: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TESTING:
      return { ...state, data: action.data };
    default:
      return state;
  }
};
