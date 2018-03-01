export const actionTypes = {
  SET_TEAM: 'TEAM.SET'
};

export const setTeam = team => dispatch => dispatch({type: actionTypes.SET_TEAM, team});
