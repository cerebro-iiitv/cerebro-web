import { actionTypes } from '../actions/teamActions';

const initialState = { team: [] };

export const teamReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.SET_TEAM:
			return { ...state, team: action.team };
		default:
			return state;
	}
};
