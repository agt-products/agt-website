import { GET_PRODUCT_BY_ID, QUEUE_QUOTE_ITEM } from "../actions/_types";

const initialState = {
    product: null,
    quoteItemIndex: null
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_PRODUCT_BY_ID: {
            return {
                ...state,
                product: action.payload
            }
        }
        case QUEUE_QUOTE_ITEM: {
            return {
                ...state,
                quoteItemIndex: action.payload
            }
        }
        default: {
            return state;
        }
    }
}