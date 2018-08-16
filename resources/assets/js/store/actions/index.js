import * as actionTypes from '../action-types';

export function auth(el) {
	return dispatch => {
		dispatch(authLogin());
	}
}

export function authLogin() {
    return {
        type: actionTypes.AUTH_LOGIN,
    }
}

export function authFaild() {
    return {
        type: actionTypes.AUTH_FAILD,
    }
}

