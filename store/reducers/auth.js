import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from "../actions/auth";

const initialState = {
  loading: false,
  user: null,
  error: null,
  isLogin: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, loading: true };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        error: null,
        isLogin: true,
      };
    case LOGIN_FAILURE:
      return { ...state, loading: false, user: null, error: action.payload };
    case LOGOUT:
      return { ...state, user: null, isLogin: false };
    default:
      return state;
  }
};

export default authReducer;
