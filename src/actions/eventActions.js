import {events} from "../data/events";

export const actionTypes = {
  LOAD_EVENTS_INIT: 'EVENTS.LOAD.INIT',
  LOAD_EVENTS_DONE: 'EVENTS.LOAD.DONE'
};

// TODO: Fetch events from the internet
export const loadEvents = () => dispatch => dispatch({type: actionTypes.LOAD_EVENTS_DONE, events});
