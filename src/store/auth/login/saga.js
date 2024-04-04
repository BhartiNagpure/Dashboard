import { takeEvery, put } from 'redux-saga/effects';
import { loginSuccess, loginFailure } from './actions';
import { LOGIN_REQUEST } from './actionTypes';
import users from '../../../FakeData';

function* handleLogin({action}) {
  const { email, password } = action.payload;
  const user = users.find(u => u.email === email && u.password === password);
  console.log(email, password)
  if (user) {
    yield put(loginSuccess(user));
    console.log("success")
  } else {
    yield put(loginFailure()); 
   console.log("error")
  }
}

export default function* rootSaga() {
  yield takeEvery(LOGIN_REQUEST, handleLogin); 
}
