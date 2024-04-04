// registrationSaga.js
import { put, takeLatest, call } from 'redux-saga/effects';
import { SUBMIT_REGISTRATION_FORM,  } from './actionTypes';
import {panVerificationSuccess, panVerificationFailure} from './actions'
// import { verifyPAN } from './api'; // API function to verify PAN details

function* submitRegistrationFormSaga(action) {
  try {
    const { email, pan } = action.payload;
    // const result = yield call(verifyPAN, pan); // Call API to verify PAN
    const result = yield call(pan)
    if (result.success) {
      yield put(panVerificationSuccess());
    } else {
      yield put(panVerificationFailure());
    }
  } catch (error) {
    console.error('Error submitting registration form:', error);
  }
}

function* registrationSaga() {
  yield takeLatest(SUBMIT_REGISTRATION_FORM, submitRegistrationFormSaga);
}

export default registrationSaga;
