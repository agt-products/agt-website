import axios from "axios";
import { REGISTER_USER, LOGIN_USER, LOGOUT_USER, CHECK_TOKEN, UPDATE_USER_ACCOUNT_INFO, THROW_USER_ACCOUNT_UPDATE_ERROR, RESOLVE_USER_UPDATE_ERROR } from "./_types";

export const registerUser = userData => dispatch => {
    axios.post("/api/users/register", userData).then(res => 
        dispatch({
            type: REGISTER_USER,
            payload: res.data
        })
    );
};

export const loginUser = userData => dispatch => {
    axios.post("/api/users/login", userData).then(res => 
        dispatch({
            type: LOGIN_USER,
            payload: res.data
        })
    ).catch(error => {
        dispatch({
            type: LOGIN_USER,
            payload: {
                auth: false,
                error: error
            }
        })
    });
};

export const logoutUser = () => dispatch => {
    axios.get("/api/users/logout").then(res =>
        dispatch({
            type: LOGOUT_USER
        })
    );
};

export const checkToken = () => dispatch => {
    axios.get("/api/users/token", { headers: { "x-access-token": sessionStorage.getItem("userToken") } }).then(res =>
        dispatch({
            type: CHECK_TOKEN,
            payload: {
                auth: true,
                user: res.data
            }
        })
    ).catch(error =>
        dispatch({
            type: CHECK_TOKEN,
            payload: {
                auth: false,
                error: error
            }
        })
    );
}

export const updateUserAccountInfo = (updates, password) => dispatch => {
    axios.patch("/api/users/update", { updates: updates, password: password }, { headers: { "x-access-token": sessionStorage.getItem("userToken") } }).then(res => {
        dispatch({
            type: UPDATE_USER_ACCOUNT_INFO,
            payload: res.data
        })
    }).catch(error =>
        dispatch({
            type: THROW_USER_ACCOUNT_UPDATE_ERROR,
            payload: error
        })
    );
}

export const resolveUserUpdateError = () => dispatch => {
    dispatch({
        type: RESOLVE_USER_UPDATE_ERROR
    });
}