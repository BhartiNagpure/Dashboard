// actionTypes.js
import { SUBMIT_REGISTRATION_FORM, PAN_VERIFICATION_SUCCESS, PAN_VERIFICATION_FAILURE } from './actionTypes';

// actions.js
export const submitRegistrationForm = (email, pan) => ({
  type: SUBMIT_REGISTRATION_FORM,
  payload: { email, pan }
});

export const panVerificationSuccess = () => ({
  type: PAN_VERIFICATION_SUCCESS
});

export const panVerificationFailure = () => ({
  type: PAN_VERIFICATION_FAILURE
});
