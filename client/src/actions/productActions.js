import axios from "axios";
import { GET_PRODUCTS_BY_CATEGORY, GET_PRODUCT_CATEGORY_ITEM_COUNT, GET_PRODUCT_BY_ID, SEARCH_PRODUCTS_BY_QUERY } from "./_types";

export const getProductsByCategory = params => dispatch => {
    axios.get("/api/products/category/" + params.category + "." + params.limit + "." + params.page).then(res =>
        dispatch({
            type: GET_PRODUCTS_BY_CATEGORY,
            payload: res.data
        })
    );
};

export const getProductCategoryItemCount = params => dispatch => {
    axios.get("/api/products/category/count/" + params.category).then(res =>
        dispatch({
            type: GET_PRODUCT_CATEGORY_ITEM_COUNT,
            payload: res.data
        })
    );
};

export const getProductById = id => dispatch => {
    axios.get("/api/products/" + id).then(res => 
        dispatch({
            type: GET_PRODUCT_BY_ID,
            payload: res.data
        })
    );
};

export const searchProductsByQuery = params => dispatch => {
    axios.get("/api/products/search/" + params.searchQuery + "/" + params.limit + "/" + params.page).then(res => 
        dispatch({
            type: SEARCH_PRODUCTS_BY_QUERY,
            payload: {
                products: res.data,
                query: params.searchQuery
            }
        })
    );
    // .catch(error => {
    //     dispatch({
    //         type: SEARCH_PRODUCTS_BY_QUERY,
    //         payload: { error: error }
    //     })
    // });
}