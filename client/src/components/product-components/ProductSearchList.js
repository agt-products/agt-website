import React, { Component } from "react";
import { Container, Row, Col, Pagination, PaginationItem } from "reactstrap";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { searchProductsByQuery } from "../../actions/productActions";
import PropTypes from "prop-types";

import ProductGallery from "./ProductGallery";
import ProductCategoriesNav from "./ProductCategoriesNav";

import urls from "../../routes/urls";

class ProductSearchList extends Component {
    state = {
        searchQuery: this.props.match.params.searchQuery,
        limit: this.props.match.params.limit,
        page: this.props.match.params.page
    }

    componentWillMount() {
        this.count = null;
        this.props.searchProductsByQuery({ searchQuery: this.state.searchQuery, limit: this.state.limit, page: this.state.page });
        // this.props.getProductCategoryItemCount({ category: this.state.category });
    }

    componentWillUpdate(nextProps) {
        if(this.props.match.params !== nextProps.match.params) {
            this.setState({
                searchQuery: nextProps.match.params.searchQuery,
                page: 0
            });
        }

        if(this.props.match.params.limit !== nextProps.match.params.limit) {
            this.setState({
                limit: nextProps.match.params.limit
            });
        }

        if(this.props.match.params.page !== nextProps.match.params.page) {
            this.setState({
                page: nextProps.match.params.page
            });
        }
    }

    componentDidUpdate(nextProps, nextState) {
        if(this.state.searchQuery !== nextState.searchQuery || this.state.limit !== nextState.limit || this.state.page !== nextState.page) {
            this.props.searchProductsByQuery({ searchQuery: this.state.searchQuery, limit: this.state.limit, page: this.state.page });
            // this.props.getProductCategoryItemCount({ searchQuery: this.state.searchQuery });
        }
    }

    generatePagination() {
        let pages = [];
        if(this.props.categoryProducts.itemCount) {
            let remainder = this.props.categoryProducts.itemCount % this.state.limit;
            this.count = (this.props.categoryProducts.itemCount - remainder) / this.state.limit + 1;
            for(let i = 0; i < this.count; i++) {
                pages.push(
                    <PaginationItem key={`page${i + 1}`} active={parseInt(this.state.page) === i}>
                        <Link 
                            className="page-link" 
                            to={`${ urls.productSearch.default }/${this.state.searchQuery}/${this.state.limit}/${i}`}
                        >
                            {i + 1}
                        </Link>
                    </PaginationItem>
                );
            }
        }
        return pages;
    }
    
    render() {
        let pagination = this.generatePagination();

        return (
            <Container fluid className="my-4">
                <Row>
                    <Col lg="2">
                        <ProductCategoriesNav vertical navLink />
                    </Col>
                    <Col lg="8">
                        <h2 className="mb-3">Product Search Results</h2>
                        { this.props.categoryProducts.products ? <Pagination size="sm">
                            <PaginationItem disabled={parseInt(this.state.page) === 0}>
                                <Link 
                                    className="page-link" 
                                    to={`${ urls.productSearch.default }/${this.state.searchQuery}/${this.state.limit}/0`}
                                >
                                    First
                                </Link>
                            </PaginationItem>
                            <PaginationItem disabled={parseInt(this.state.page) < 1}>
                                <Link 
                                    className="page-link" 
                                    to={`${ urls.productSearch.default }/${this.state.searchQuery}/${this.state.limit}/${parseInt(this.state.page) - 1}`}
                                >
                                    <i className="fas fa-angle-left"></i>
                                </Link>
                            </PaginationItem>
                            {pagination}
                            <PaginationItem disabled={parseInt(this.state.page) >= this.count - 1}>
                                <Link 
                                    className="page-link" 
                                    to={`${ urls.productSearch.default }/${this.state.searchQuery}/${this.state.limit}/${parseInt(this.state.page) + 1}`}
                                >
                                    <i className="fas fa-angle-right"></i>
                                </Link>
                            </PaginationItem>
                            <PaginationItem disabled={parseInt(this.state.page) >= this.count - 1}>
                                <Link 
                                    className="page-link" 
                                    to={`${ urls.productSearch.default }/${this.state.searchQuery}/${this.state.limit}/${this.count - 1}`}
                                >
                                    Last
                                </Link>
                            </PaginationItem>
                        </Pagination>
                        : ""}
                        <ProductGallery products={this.props.categoryProducts.products ? this.props.categoryProducts.products : [] } />
                    </Col>
                    <Col lg="2"></Col>
                </Row>
            </Container>
        );
    }
}

ProductSearchList.propTypes = {
    searchProductsByQuery: PropTypes.func.isRequired,
    categoryProducts: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    categoryProducts: state.categoryProducts
});

export default connect(mapStateToProps, { searchProductsByQuery })(ProductSearchList);