import * as actionTypes from '../action-types';
import axios from '../../axios';

const initialState = {
    isAuthenticated : false,
    token: '',
    error: '',
};

const Auth = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.AUTH_LOGIN:
            return authLogin(state, action.payload);
        case actionTypes.AUTH_CHECK:
            return checkAuth(state);
        case actionTypes.AUTH_LOGOUT:
            return logout(state);
        case actionTypes.AUTH_FAILD:
            return authFaild(state, action.payload);
        default:
            return state;
    }
};

const authLogin = (state, payload) => {
    const jwtToken = payload.token;

    localStorage.setItem('jwt_token', jwtToken);

    axios.defaults.headers.common['Authorization'] = `Bearer ${jwtToken}`;
    state = Object.assign({}, state, {
        isAuthenticated: true,
        token: jwtToken,
    });

    return state;
};

const logout = (state) => {
    localStorage.removeItem('jwt_token');
    axios.defaults.headers.common['Authorization'] = ``;

    return {
        ...state,
        isAuthenticated: false,
        token: null,
    }
}

const authFaild = (state, payload) => {
    return {
        ...state,
        error: payload.errors,
        isAuthenticated: false,
    }
}

const checkAuth = (state) =>{
    state = Object.assign({},state,{
        isAuthenticated : !!localStorage.getItem('jwt_token'),
    });
    if(state.isAuthenticated){
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('jwt_token')}`;
    }

    return state;
};

export default Auth;