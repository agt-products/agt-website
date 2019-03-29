import { combineReducers } from "redux";
import userReducer from "./userReducer";
import categoryReducer from "./categoryReducer";
import productReducer from "./productReducer";
import quoteCartReducer from "./quoteCartReducer";
import projectReducer from "./projectReducer";

export default combineReducers({
    user: userReducer,
    categoryProducts: categoryReducer,
    product: productReducer,
    quoteCart: quoteCartReducer,
    projects: projectReducer
});