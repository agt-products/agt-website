import { GET_QUOTE_CART, ADD_ITEM_TO_QUOTE_CART, REMOVE_ITEM_FROM_QUOTE_CART, UPDATE_ITEM_IN_QUOTE_CART, LOGOUT_USER, ADD_ITEM_TO_BOARD, SUBMIT_QUOTE_REQUEST, CLEAR_QUOTE_CART, GET_SUBMITTED_QUOTE_REQUESTS } from "../actions/_types";

const initialState = {
    items: [],
    lastProjectBoard: null,
    submittedRequests: null
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_QUOTE_CART: 
        case ADD_ITEM_TO_QUOTE_CART: 
        case REMOVE_ITEM_FROM_QUOTE_CART: 
        case UPDATE_ITEM_IN_QUOTE_CART: {
            return {
                ...state,
                items: action.payload
            }
        }
        case ADD_ITEM_TO_BOARD: {
            return {
                ...state,
                lastProjectBoard: action.payload.projectBoardIndex
            }
        }
        case LOGOUT_USER: {
            return {
                ...state,
                items: []
            }
        }
        case SUBMIT_QUOTE_REQUEST: {
            return {
                ...state,
                items: []
            }
        }
        case CLEAR_QUOTE_CART: {
            return {
                ...state,
                items: []
            }
        }
        case GET_SUBMITTED_QUOTE_REQUESTS: {
            return {
                ...state,
                submittedRequests: action.payload
            }
        }
        default: {
            return state;
        }
    }
}