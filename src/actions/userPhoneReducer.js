import * as firebase from 'firebase';

import { getState } from '../store';

export const actionTypes = {
	SAVE_PHONE: 'USER_PHONE.SAVE',
	LOAD_PHONE: 'USER_PHONE.LOAD'
};

export const saveUserPhone = number => dispatch =>
	firebase
		.database()
		.ref('/users/' + getState().auth.user.uid + '/phone')
		.set(number, result => dispatch({ type: actionTypes.SAVE_PHONE }));

export const loadUserPhone = () => dispatch =>
	firebase
		.database()
		.ref('/users/' + getState().auth.user.uid + '/phone')
		.on('value', snapshot => dispatch({ type: actionTypes.LOAD_PHONE, phone: snapshot.val() }));
