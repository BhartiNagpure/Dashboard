// registrationReducer.js
import { SUBMIT_REGISTRATION_FORM, PAN_VERIFICATION_SUCCESS, PAN_VERIFICATION_FAILURE } from './actionTypes';

const initialState = {
  email: '',
  pan: '',
  isPANVerified: false
};

const registrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_REGISTRATION_FORM:
      return { ...state, email: action.payload.email, pan: action.payload.pan };
    case PAN_VERIFICATION_SUCCESS:
      return { ...state, isPANVerified: true };
    case PAN_VERIFICATION_FAILURE:
      return { ...state, isPANVerified: false };
    default:
      return state;
  }
};

export default registrationReducer;
