import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav, NavItem } from "reactstrap";
import { urls } from "../../routes";

class ProductCategoriesNav extends Component {
    render() {
        return (
            <Nav vertical={this.props.vertical}>
                <NavItem>
                    <Link className={this.props.navLink ? "nav-link" : ""} to={urls.products.newProducts}>
                        New Products
                    </Link>
                </NavItem>
                <NavItem>
                    <Link className={this.props.navLink ? "nav-link" : ""} to={urls.products.displayHooks}>
                        Display Hooks &amp; Accessories
                    </Link>
                </NavItem>
                <NavItem>
                    <Link className={this.props.navLink ? "nav-link" : ""} to={urls.products.signs}>
                        Sign &amp; Literature Holders
                    </Link>
                </NavItem>
                <NavItem>
                    <Link className={this.props.navLink ? "nav-link" : ""} to={urls.products.infoStrips}>
                        Info Strips &amp; Label Holders
                    </Link>
                </NavItem>
                <NavItem>
                    <Link className={this.props.navLink ? "nav-link" : ""} to={urls.products.ceiling}>
                        Ceiling Systems &amp; Accessories
                    </Link>
                </NavItem>
                <NavItem>
                    <Link className={this.props.navLink ? "nav-link" : ""} to={urls.products.shelf}>
                        Shelf Management Systems
                    </Link>
                </NavItem>
                <NavItem>
                    <Link className={this.props.navLink ? "nav-link" : ""} to={urls.products.displayConst}>
                        Display Construction
                    </Link>
                </NavItem>
                <NavItem>
                    <Link className={this.props.navLink ? "nav-link" : ""} to={urls.products.tapes}>
                        AGT Tapes&trade;
                    </Link>
                </NavItem>
                <NavItem>
                    <Link className={this.props.navLink ? "nav-link" : ""} to={urls.products.productMerch}>
                        Product Merchandising
                    </Link>
                </NavItem>
            </Nav>
        );
    }
}

export default ProductCategoriesNav;