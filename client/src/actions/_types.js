// User action types
export const REGISTER_USER = "REGISTER_USER";
export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const CHECK_TOKEN = "CHECK_TOKEN";
export const UPDATE_USER_ACCOUNT_INFO = "UPDATE_USER_ACCOUNT_INFO";
export const THROW_USER_ACCOUNT_UPDATE_ERROR = "THROW_USER_ACCOUNT_UPDATE_ERROR";
export const RESOLVE_USER_UPDATE_ERROR = "RESOLVE_USER_UPDATE_ERROR";

// Product action types
export const GET_PRODUCTS_BY_CATEGORY = "GET_PRODUCTS_BY_CATEGORY";
export const GET_PRODUCT_CATEGORY_ITEM_COUNT = "GET_PRODUCT_CATEGORY_ITEM_COUNT";
export const GET_PRODUCT_BY_ID = "GET_PRODUCT_BY_ID";
export const SEARCH_PRODUCTS_BY_QUERY = "SEARCH_PRODUCTS_BY_QUERY";

// Quote Cart action types
export const QUEUE_QUOTE_ITEM = "QUEUE_QUOTE_ITEM";
export const GET_QUOTE_CART = "GET_QUOTE_CART";
export const ADD_ITEM_TO_QUOTE_CART = "ADD_ITEM_TO_QUOTE_CART";
export const REMOVE_ITEM_FROM_QUOTE_CART = "REMOVE_ITEM_FROM_QUOTE_CART";
export const UPDATE_ITEM_IN_QUOTE_CART = "UPDATE_ITEM_IN_QUOTE_CART";
export const SUBMIT_QUOTE_REQUEST = "SUBMIT_QUOTE_REQUEST";
export const CLEAR_QUOTE_CART = "CLEAR_QUOTE_CART";
export const GET_SUBMITTED_QUOTE_REQUESTS = "GET_SUBMITTED_QUOTE_REQUESTS";

// Project action types
export const GET_PROJECTS = "GET_PROJECTS";
export const CREATE_NEW_PROJECT = "CREATE_NEW_PROJECT";
export const UPDATE_PROJECT = "UPDATE_PROJECT";
export const DELETE_PROJECT = "DELETE_PROJECT";
export const CREATE_NEW_BOARD = "CREATE_NEW_BOARD";
export const UPDATE_BOARD = "UPDATE_BOARD";
export const DELETE_BOARD = "DELETE_BOARD";
export const ADD_ITEM_TO_BOARD = "ADD_ITEM_TO_BOARD";
export const UPDATE_ITEM_IN_BOARD = "UPDATE_ITEM_IN_BOARD";
export const REMOVE_ITEM_FROM_BOARD = "REMOVE_ITEM_FROM_BOARD";