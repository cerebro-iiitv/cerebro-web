import {actionTypes} from "../actions/eventActions";

const initialState = {events: [], loadingEvents: true};

export const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_EVENTS_INIT:
      return {...state, loadingEvents: true};
    case actionTypes.LOAD_EVENTS_DONE:
      return {...state, loadingEvents: false, events: action.events};
    default:
      return state;
  }
};
