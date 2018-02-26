export const actionTypes = {
  LOAD_EVENTS_DONE: 'EVENTS.LOAD.DONE'
};

// TODO: Fetch events from internet
export const loadEvents = events => dispatch => dispatch({type: actionTypes.LOAD_EVENTS_DONE, events});
