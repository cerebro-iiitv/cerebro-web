import {actionTypes} from "../actions/authActions";

const initialState = {signedIn: false, user: null};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIGN_IN_DONE:
      return {...state, signedIn: true, user: action.user};
    case actionTypes.SIGN_OUT_DONE:
      return {...state, signedIn: false, user: null};
    default:
      return state;
  }
};
