import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "reactstrap";
import CartItem from "../quote-components/CartItem";
import { urls } from "../../routes";

import { connect } from "react-redux";
import { getQuoteCart, removeItemFromQuoteCart, updateItemInQuoteCart, submitQuoteRequest } from "../../actions/quoteCartActions";

class QuoteCartView extends Component {
    constructor(props) {
        super(props);
        this.removeItem = this.removeItem.bind(this);
        this.updateItem = this.updateItem.bind(this);
    }

    componentWillMount() {
        this.props.getQuoteCart();
    }

    removeItem(item) {
        this.props.removeItemFromQuoteCart(item);
    }

    updateItem(params) {
        this.props.updateItemInQuoteCart(params);
    }

    submitQuoteRequest = () => {
        this.props.submitQuoteRequest(this.props.quoteCart.items);
    }

    render() {
        let user = null;
        let items = null;

        if(this.props.user.user) {
            user = this.props.user.user;
        }

        if(this.props.quoteCart.items) {
            items = this.props.quoteCart.items;
        }

        let userInfo = user ? (
            <h3 className="mb-4">
                {`${user.firstName} ${user.lastName}${user.lastName.charAt(user.lastName.length - 1) === "s" ? "'" : "'s"} Quote Cart`}
            </h3>
        ) : (
            <p className="lead">Please login or register to use the quote cart feature.</p>
        );

        let itemInfo = items && items.length > 0 ? (
            <Container className="my-4">
                {items.map((item, index) => (
                    <CartItem key={`item + ${index}`} item={item} remove={this.removeItem} update={this.updateItem} />
                ))}
                <div className="d-flex flex-row justify-content-center">
                    <Button color="primary" onClick={this.submitQuoteRequest}>
                        Submit Quote Request
                    </Button>
                </div>
            </Container>
        ) : (
            <p className="lead">Please browse <Link to={urls.products.default}>our products</Link> to add items to your quote cart.</p>
        );

        return (
            <Container className="my-4" style={{ minHeight: "400px" }}>
                {userInfo}
                {user ? itemInfo : ""}
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user,
    quoteCart: state.quoteCart
});

export default connect(mapStateToProps, { getQuoteCart, removeItemFromQuoteCart, updateItemInQuoteCart, submitQuoteRequest })(QuoteCartView);