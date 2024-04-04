import { all, fork } from "redux-saga/effects";

//AUthentication
import AuthSaga from './auth/login/saga';
import registrationSaga from "./auth/register/saga";

export default function* rootSaga() {
    yield all([
      //public
      fork(AuthSaga), 
      fork(registrationSaga)
    ]);
  }
  