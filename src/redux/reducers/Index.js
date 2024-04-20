import { combineReducers } from '@reduxjs/toolkit';
import SignUpSlice from './SignUpSlice';
import LoginSlice from './LoginSlice';

const rootReducer = combineReducers({
  auth: SignUpSlice,
  auth1: LoginSlice
});

export default rootReducer;

