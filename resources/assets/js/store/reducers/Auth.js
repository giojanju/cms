import * as actionTypes from '../action-types';

const user = {
    id: null,
    name: null,
    email: null,
    createdAt: null,
    updatedAt: null
};

const initialState = {
    isAuthenticated : false,
    user
};

const Auth = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.AUTH_LOGIN:
            return authLogin(state);
        case actionTypes.AUTH_CHECK:
            return checkAuth(state);
        case actionTypes.AUTH_LOGOUT:
            return logout(state);
        case actionTypes.AUTH_FAILD:
            return logout(state);
        default:
            return state;
    }
};

const authLogin = (state) => {
    return {
        ...state,
        isAuthenticated: 1,
    }
    // const jwtToken = payload.token;
    // const user = payload.user[0];
    // if(!!payload.user[0].admin){
    //     localStorage.setItem('is_admin',true);
    // } else {
    //     localStorage.setItem('is_admin',false);
    // }
    // localStorage.setItem('jwt_token',jwtToken);
    // Http.defaults.headers.common['Authorization'] = `Bearer ${jwtToken}`;
    // state = Object.assign({}, state, {
    //     isAuthenticated: true,
    //     isAdmin: localStorage.getItem('is_admin') === 'true',
    //     user
    // });
    // return state;

    // state = Object.assign({}, state, {
    //     isAuthenticated: '1',
    // });

    return state;
};

const logout = (state) => {
    return {
        ...state,
        isAuthenticated: 'logout',
    }
}

export default Auth;