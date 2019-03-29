import React, { Component } from "react";
import { Container, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter, Button, Form } from "reactstrap";
import Select from "react-select";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { queueQuoteItem, addItemToQuoteCart } from "../../actions/quoteCartActions";
import { getProjects, addItemToBoard } from "../../actions/projectActions";

class QuoteCartModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: null
        }
        this.addItemToQuoteCart = this.addItemToQuoteCart.bind(this);
        this.updateItem = this.updateItem.bind(this);
        this.addItemToProjectBoard = this.addItemToProjectBoard.bind(this);
        this.setProject = this.setProject.bind(this);
        this.setBoard = this.setBoard.bind(this);
    }

    componentWillMount() {
        if(this.props.user.user) {
            this.props.getProjects();
        }
    }

    componentWillUpdate(nextProps) {
        if(!this.props.user.user && nextProps.user.user) {
            this.props.getProjects();
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            item: nextProps.product.product.items[nextProps.product.quoteItemIndex]
        });
    }

    addItemToQuoteCart() {
        this.props.addItemToQuoteCart({
            id: this.props.quoteCart.items.length, 
            productId:this.props.product.product.product_id,
            categories: this.props.product.product.categories,
            image: this.props.product.product.images[0],
            specs: {
                ...this.state.item
            }
        });
        this.props.toggleModal();
    }

    updateItem(key, value) {
        this.setState({
            item: {
                ...this.state.item,
                [key]: value
            }
        });
    }

    setProject = e => {
        this.setState({ 
            project: e.value,
            boardOptions: this.generateOptions(this.props.projects.projects[e.value].boards)
        });
    }

    setBoard = e => {
        this.setState({
            board: e.value
        });
    }

    addItemToProjectBoard = e => {
        e.preventDefault();
        let projIndex = parseInt(this.state.project);
        let boardIndex = parseInt(this.state.board);
        let project = this.props.projects.projects[this.state.project];
        let board = project.boards[this.state.board];
        let item = {
            id: this.props.quoteCart.items.length, 
            productId:this.props.product.product.product_id,
            categories: this.props.product.product.categories,
            image: this.props.product.product.images[0],
            project: null,
            board: null,
            specs: {
                ...this.state.item
            }
        }
        this.props.addItemToBoard({ projId: project._id, board: board, item: item, projectBoardIndex: [projIndex, boardIndex] });
        this.props.toggleModal();
    }

    generateOptions(array) {
        let options = [];
        for(let i = 0; i < array.length; i++) {
            options.push({
                value: i,
                label: array[i].name
            });
        }
        return options;
    }

    render() {
        let product = this.props.product.product;
        let { item, board } = this.state;
        let modal = null;
        let projects = this.props.projects.projects.length > 0 ? this.props.projects.projects : null;
        let projectOptions = projects ? this.generateOptions(projects) : null;

        if(item) {
            let specs = [];

            for(let key of Object.keys(item)) {
                let keyName = key;
                if (keyName.substr(0, 5) === "item_") {
                    keyName = keyName.substr(5);
                }

                let value = item[key];
                switch(typeof(value)) {
                    case "string": {
                        value = value.replace(/^\w/, c => c.toUpperCase());
                        break;
                    }
                    case "boolean": {
                        value = value ? "Yes" : "No";
                        break;
                    }
                    default: {
                        break;
                    }
                }
                
                specs.push(
                    <Row key={keyName} className="py-2" style={{ borderBottom: "1px solid rgb(230, 230, 230)" }}>
                        <Col xs="6">
                            <p className="mb-1"><strong>{keyName.replace(/_/g, " ").replace(/^\w/, c => c.toUpperCase())}:</strong></p>
                        </Col>
                        <Col xs="6">
                            <p className="mb-1">{value}</p>
                        </Col>
                    </Row>
                );
            }

            modal = (
                <Modal 
                    centered
                    autoFocus
                    size="lg"
                    isOpen={this.props.active}
                >
                    <ModalHeader
                        toggle={this.props.toggleModal}
                        charCode="✕"
                    >
                        Add Item to Quote Cart
                    </ModalHeader>
                    <ModalBody>
                        <p className="lead">{product.name}</p>
                        <Container>
                            <Row>
                                <Col lg="5">
                                    <img className="w-100" src={"/images/products/visualGuide/" + product.images[0]} alt={product.name} />
                                </Col>
                                <Col lg={{ size: 5, offset: 1 }}>
                                    {specs}
                                </Col>
                            </Row>
                        </Container>
                    </ModalBody>
                    <ModalFooter>
                        {projects ? 
                            <Form onSubmit={this.addItemToProjectBoard}>
                                <Select 
                                    options={projectOptions}
                                    onChange={this.setProject}
                                />
                                <Select
                                    options={this.state.boardOptions ? this.state.boardOptions : []}
                                    onChange={this.setBoard}
                                />
                                <Button
                                    color="success"
                                    disabled={board === null || board === undefined}
                                >
                                    Add Item to Project Board
                                </Button>
                            </Form>
                        : ""}
                        {this.props.user.user ?
                            <Button 
                                color="primary" 
                                onClick={this.addItemToQuoteCart}
                            >
                                Add to Quote Cart
                            </Button>
                        :
                            <p className="text-danger">
                                Please login or register to add products to your Quote Cart or Projects.
                            </p>
                        }
                    </ModalFooter>
                </Modal>
            );
        }

        return (
            <div>
                {modal}
            </div>
        );
    }
}

QuoteCartModal.propTypes = {
    active: PropTypes.bool.isRequired,
    toggleModal: PropTypes.func.isRequired,
    product: PropTypes.object.isRequired
}

QuoteCartModal.defaultProps = {
    active: false
}

const mapStateToProps = state => ({
    product: state.product,
    projects: state.projects,
    quoteCart: state.quoteCart,
    user: state.user
});

export default connect(mapStateToProps, { queueQuoteItem, addItemToQuoteCart, getProjects, addItemToBoard })(QuoteCartModal);