import { REGISTER_USER, LOGIN_USER, LOGOUT_USER, CHECK_TOKEN, UPDATE_USER_ACCOUNT_INFO, THROW_USER_ACCOUNT_UPDATE_ERROR, RESOLVE_USER_UPDATE_ERROR } from "../actions/_types";

const initialState = {
    loginError: false,
    loggedIn: false,
    user: null,
    updateError: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case REGISTER_USER: {
            console.log("User registered!");
            return state;
        }
        case LOGIN_USER: {
            if(action.payload.auth) {
                sessionStorage.setItem("userToken", action.payload.token);
                return {
                    ...state,
                    loggedIn: true,
                    loginError: false
                }
            }
            else {
                return {
                    ...state,
                    loggedIn: false,
                    loginError: true
                }
            }
        }
        case LOGOUT_USER: {
            sessionStorage.removeItem("userToken");
            return {
                ...state,
                loggedIn: false,
                user: null
            }
        }
        case CHECK_TOKEN: {
            if(action.payload.auth) {
                return {
                    ...state,
                    loggedIn: true,
                    user: action.payload.user
                }
            }
            else {
                return {
                    ...state,
                    loggedIn: false,
                    user: null
                }
            }
        }
        case UPDATE_USER_ACCOUNT_INFO: {
            return {
                ...state,
                user: action.payload,
                updateError: false
            }
        }
        case THROW_USER_ACCOUNT_UPDATE_ERROR: {
            return {
                ...state,
                updateError: true
            }
        }
        case RESOLVE_USER_UPDATE_ERROR: {
            return {
                ...state,
                updateError: false
            }
        }
        default: {
            return state;
        }
    }
}