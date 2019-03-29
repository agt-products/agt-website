import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Card, CardHeader } from "reactstrap";
import PropTypes from "prop-types";

class ProductGalleryItem extends Component {
    render() {
        return (
            <Col xl="3" md="4" sm="6" xs="12" className="p-2 product-gallery-item">
                <Link to={"/product/" + this.props.productId}>
                    <Card>
                        <CardHeader tag="h6">{this.props.productName}</CardHeader>
                        <img className="w-100 p-2" src={"/images/products/visualGuide/" + this.props.productImage} alt={this.props.productName} />
                    </Card>
                </Link>
            </Col>
        );
    }
}

ProductGalleryItem.propTypes = {
    productId: PropTypes.number.isRequired,
    productName: PropTypes.string.isRequired
}

export default ProductGalleryItem;