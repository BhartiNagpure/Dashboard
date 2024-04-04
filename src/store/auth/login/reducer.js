import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT } from "./actionTypes";


const initialState = {
  isAuthenticated: false,
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      state = {
        ...state,
        isAuthenticated: true,
        user: action.payload
      };
    case LOGIN_FAILURE:
      state = {
        ...state,
        isAuthenticated:false,
        user: action.payload
      };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
}

export default authReducer;