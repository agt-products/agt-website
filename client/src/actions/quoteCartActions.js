import axios from "axios";
import { QUEUE_QUOTE_ITEM, GET_QUOTE_CART, ADD_ITEM_TO_QUOTE_CART, REMOVE_ITEM_FROM_QUOTE_CART, UPDATE_ITEM_IN_QUOTE_CART, SUBMIT_QUOTE_REQUEST, CLEAR_QUOTE_CART, GET_SUBMITTED_QUOTE_REQUESTS } from "./_types";

export const queueQuoteItem = itemIndex => dispatch => {
    dispatch({
        type: QUEUE_QUOTE_ITEM,
        payload: itemIndex
    });
}

export const getQuoteCart = () => dispatch => {
    axios.get("/api/users/cart", { headers: { "x-access-token": sessionStorage.getItem("userToken") } }).then(res => 
        dispatch({
            type: GET_QUOTE_CART,
            payload: res.data
        })
    );
}

export const addItemToQuoteCart = params => dispatch => {
    axios.patch("/api/users/cart/add", params, { headers: { "x-access-token": sessionStorage.getItem("userToken") } }).then(res =>
        dispatch({
            type: ADD_ITEM_TO_QUOTE_CART,
            payload: res.data
        })
    );
}

export const removeItemFromQuoteCart = params => dispatch => {
    axios.patch("/api/users/cart/delete", params, { headers: { "x-access-token": sessionStorage.getItem("userToken") } }).then(res =>
        dispatch({
            type: REMOVE_ITEM_FROM_QUOTE_CART,
            payload: res.data
        })
    );
}

export const updateItemInQuoteCart = params => dispatch => {
    axios.patch("/api/users/cart/update", params, { headers: { "x-access-token": sessionStorage.getItem("userToken") } }).then(res =>
        dispatch({
            type: UPDATE_ITEM_IN_QUOTE_CART,
            payload: res.data
        })
    );
}

export const clearQuoteCart = () => dispatch => {
    axios.post("/api/users/cart/clear", { headers: { "x-access-token": sessionStorage.getItem("userToken") } }).then(res =>
        dispatch({
            type: CLEAR_QUOTE_CART,
            payload: res.data
        })
    );
}

export const submitQuoteRequest = cart => dispatch => {
    axios.post("/api/quote-requests", cart, { headers: { "x-access-token": sessionStorage.getItem("userToken") } }).then(res =>
        dispatch({
            type: SUBMIT_QUOTE_REQUEST,
            payload: {
                cart: cart,
                data: res.data
            }
        })
    );
}

export const getSubmittedQuoteRequests = () => dispatch => {
    axios.get("/api/quote-requests/by-user", { headers: { "x-access-token": sessionStorage.getItem("userToken") } }).then(res => 
        dispatch({
            type: GET_SUBMITTED_QUOTE_REQUESTS,
            payload: res.data
        })
    );
}