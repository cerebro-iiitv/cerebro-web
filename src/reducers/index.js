import {combineReducers} from 'redux';

import {authReducer} from "./authReducer";
import {eventReducer} from "./eventReducer";

export default combineReducers({
  auth: authReducer,
  event: eventReducer
});
