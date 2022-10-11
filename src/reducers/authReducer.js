export const actionTypes = {
    LOGIN: 'LOGIN_SUCCESS',
    LOGIN_ERROR: 'LOGIN_ERROR',
    LOGOUT: 'LOGOUT_SUCCESS',
    LOGOUT_ERROR: 'LOGOUT_ERROR',
    REGISTER: 'REGISTER_SUCCESS',
    REGISTER_ERROR: 'REGISTER_ERROR'
}

    const authReducer = ( state, action ) => {
    switch (action.type) {
        case actionTypes.LOGIN:
            console.log('login success');
            return {
                ...state,
                authError: null
            }
        case actionTypes.LOGIN_ERROR:
            console.log('login error');
            return {
                ...state,
                authError: 'Login failed'
            }
        case actionTypes.LOGOUT:
            console.log('logout success');
            return state;
        case actionTypes.LOGOUT_ERROR:
            console.log('logout error');
            return state;
        case actionTypes.REGISTER:
            console.log('register success');
            return {
                ...state,
                authError: null
            }
        case actionTypes.REGISTER_ERROR:
            console.log('register error');
            return {
                ...state,
                authError: action.err.message
            }
        default:
            return state;
    }
}

