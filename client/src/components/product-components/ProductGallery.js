import React, { Component } from "react";
import { Container, Row } from "reactstrap";
import ProductGalleryItem from "./ProductGalleryItem";

import PropTypes from "prop-types";

class ProductGallery extends Component {
    state = {
        isLoading: true
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            isLoading: false
        });
    }

    render() {
        const products = this.props.products;
        let gallery = <div>Loading...</div>;

        if(!this.state.isLoading) {
            gallery = (
                <Container className="p-0">
                    <Row>
                        {products.map((product) => (
                            <ProductGalleryItem key={product._id} productId={product.product_id} productName={product.name} productImage={product.images[0]} productSeries={product.series} />
                        ))}
                    </Row>
                </Container>
            );
        }

        return (
            <div>
                {this.props.products.length > 0 ? gallery : <p>Sorry, no products match your search query.</p>}
            </div>
        );
    }
}

ProductGallery.propTypes = {
    products: PropTypes.array.isRequired
}

export default ProductGallery;