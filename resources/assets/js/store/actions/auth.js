import * as actionTypes from '../action-types';
import axios from '../../axios';

export const auth = (email, password) => {
	return dispatch => {
		axios.post('login', {email: email, password: password}).then(re => {
			if (re.data) {
				dispatch(authLogin(re.data));
			}
		})
		.catch(er => {
			dispatch(authFaild(er.response.data))
		})
	}
}

export const authLogin = (payload) => {
    return {
        type: actionTypes.AUTH_LOGIN,
        payload,
    }
}

export const authFaild = (payload) => {
    return {
        type: actionTypes.AUTH_FAILD,
        payload,
    }
}

