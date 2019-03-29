import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

import ProductList from "../product-components/ProductList";
import ProductSearchList from "../product-components/ProductSearchList";
import { urls } from "../../routes";

class ProductsView extends Component {
    render() {
        return (
            <Route path = "/products" component = { Views } />
        );
    }
}

class ProductsRedirect extends Component {
    render() {
        return (
            <Redirect to={urls.products.default} />
        );
    }
}

const Views = ({ match }) => (
    <div>
        <Route exact path={ match.url } component={ ProductsRedirect }/>
        <Route exact path={ match.url + "/categories/:category1/:category2?/:category3?/:limit/:page" } component={ ProductList } />
        <Route exact path={ match.url + "/search/:searchQuery/:limit/:page" } component={ ProductSearchList } />
    </div>
);

export default ProductsView;