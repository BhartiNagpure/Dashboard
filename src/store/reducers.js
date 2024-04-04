import { combineReducers } from "redux";

// Authentication
import Login from './auth/login/reducer';
import Register from './auth/register/reducer'

const rootReducer = combineReducers({
    // public
    Login,
    Register
});

export default rootReducer;