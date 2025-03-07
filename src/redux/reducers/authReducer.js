import { LOGIN_SUCCESS, LOGOUT_SUCCESS, SIGN_UP_SUCCESS } from "../actions/authAction";

const initial = { user : JSON.parse(localStorage.getItem('user')) || null };
export const authReducer = (state=initial,action) => {
    switch (action.type) {
        case SIGN_UP_SUCCESS:
        case LOGIN_SUCCESS:
            localStorage.setItem("user",JSON.stringify(action.payload));
            return {...state, user: action.payload };
        case LOGOUT_SUCCESS:
            localStorage.removeItem("user")
            return {...state, user: null}
        default:
            return state
    }
}