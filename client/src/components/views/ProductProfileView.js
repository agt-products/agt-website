import React, { Component } from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import ProductSpecTable from "../product-components/ProductSpecTable";
import QuoteCartModal from "../quote-components/QuoteCartModal";
import AppImageSelector from "../AppImageSelector";

import { connect } from "react-redux";
import { getProductById } from "../../actions/productActions";
import PropTypes from "prop-types";

class ProductProfileView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productHasLoaded: false,
            modalIsActive: false
        }
        this.toggleModal = this.toggleModal.bind(this);
    }

    componentWillMount() {
        this.props.getProductById(this.props.match.params.productId);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.product) {
            this.setState({
                productHasLoaded: true
            });
        }
    }

    toggleModal() {
        this.setState({
            modalIsActive: !this.state.modalIsActive
        });
    }

    render() {
        const product = this.props.product.product;
        let productElement = <Container>Loading...</Container>;
        let listIndex = 0;

        if(this.state.productHasLoaded) {
            productElement = (
                <Container fluid className="my-4">
                    <QuoteCartModal active={this.state.modalIsActive} toggleModal={this.toggleModal} />
                    <Container className="my-5">
                        <Row>
                            <Col xs="12">
                                <h2 className="float-md-left">{product.name}</h2>
                                <h6 className="float-md-right mt-2 lead">{product.series}{ product.items.length > 1 ? " Series" : "-01" }</h6>
                            </Col>
                        </Row>
                        <hr />
                        <Row className="my-3">
                            <Col md="5">
                                <AppImageSelector images={ product.images } productName={ product.name } />
                            </Col>
                            {product.desc_list && product.desc_list.length > 0 ? 
                            <Col md="7">
                                <h5 className="mb-3">Product Information: </h5>
                                <ListGroup>
                                    {product.desc_list.map((item) => (
                                        <ListGroupItem key={"list-item-" + listIndex++}>
                                            {item}
                                        </ListGroupItem>
                                    ))}
                                </ListGroup>
                            </Col>
                            : ""}
                        </Row>
                    </Container>
                    {product.description ? 
                    <Row className="bg-info py-5 text-white">
                        <Container>
                            <h5>Description: </h5>
                            <p>{product.description}</p>    
                        </Container>
                    </Row>
                    : ""}
                    <Row>
                        <ProductSpecTable items={product.items} toggleModal={this.toggleModal} />
                    </Row>
                </Container>
            );
        }

        return (
            <div>
                {productElement}
            </div>
        )
    }
}

ProductProfileView.propTypes = {
    product: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    product: state.product
});

export default connect(mapStateToProps, { getProductById })(ProductProfileView);