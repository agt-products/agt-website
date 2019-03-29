import { GET_PRODUCTS_BY_CATEGORY, SEARCH_PRODUCTS_BY_QUERY } from "../actions/_types";

const initialState = {
    products: [],
    itemCount: null,
    searchQuery: null
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_PRODUCTS_BY_CATEGORY: {
            return {
                ...state,
                products: action.payload.products,
                itemCount: action.payload.productCount
            }
        }
        case SEARCH_PRODUCTS_BY_QUERY: {
            if(action.payload.error) {
                console.error(action.payload.error);
                return state;
            }
            return {
                ...state,
                products: action.payload.products.products,
                itemCount: action.payload.products.productCount,
                searchQuery: action.payload.searchQuery
            }
        }
        default: {
            return state;
        }
    }
}