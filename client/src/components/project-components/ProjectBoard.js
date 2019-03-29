import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, FormGroup, Label, Input } from "reactstrap";
import CartItem from "../quote-components/CartItem";
import PropTypes from "prop-types";
import { urls } from "../../routes";

class ProjectBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.board.name,
            description: this.props.board.description,
            editMode: false
        }
        this.updateItem = this.updateItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.toggleEditMode = this.toggleEditMode.bind(this);
        this.onEditChange = this.onEditChange.bind(this);
        this.updateBoard = this.updateBoard.bind(this);
    }

    toggleEditMode() {
        this.setState({
            editMode: !this.state.editMode
        });
    }

    onEditChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    updateBoard() {
        if(this.props.board.name !== this.state.name || this.props.board.description !== this.state.description) {
            this.props.updateBoard(this.props.board, { name: this.state.name, description: this.state.description });
        }
        this.toggleEditMode();
    }

    updateItem(itemData) {
        this.props.updateItem(this.props.board, this.props.board.cart.indexOf(itemData.cartItem), itemData.update);
    }

    removeItem(item) {
        this.props.removeItem(this.props.board, item);
    }

    render() {
        let { board } = this.props;
        let cart = <p>Please browse <Link to={urls.products.default}>our products</Link> to add items to your project board.</p>;
        if(board.cart && board.cart.length > 0) {
            cart = board.cart.map((item, index) => {
                return (
                    <CartItem 
                        key={`${board.name}-item${index}`} 
                        item={item} 
                        remove={this.removeItem}
                        update={this.updateItem}
                    />
                );
            });
        }

        return (
            <Container className="border p-3 mt-3 mb-4 bg-light">
                <Row>
                    <Col sm="9">
                        <div className="mb-3">
                            {!this.state.editMode ?
                                <h5>{board.name}</h5>
                            :
                                <FormGroup>
                                    <Label className="font-weight-bold" for="name">Board Name:</Label>
                                    <Input 
                                        type="text"
                                        name="name"
                                        id="name"
                                        value={this.state.name}
                                        onChange={this.onEditChange}
                                    />
                                </FormGroup>
                            }
                        </div>
                        <div className="mb-3">
                            {!this.state.editMode ?
                                <p>{board.description}</p>
                            :
                                <FormGroup>
                                    <Label className="font-weight-bold" for="name">Board Description:</Label>
                                    <textarea 
                                        className="form-control"
                                        name="description"
                                        id="description"
                                        value={this.state.description}
                                        onChange={this.onEditChange}
                                    />
                                </FormGroup>
                            }
                        </div>
                    </Col>
                    <Col 
                        sm="3"
                        className="d-flex align-items-start justify-content-center justify-content-sm-end"
                    >
                        {!this.state.editMode ?
                            <Button
                                className="mr-1"
                                size="sm"
                                color="link"
                                onClick={this.toggleEditMode}
                            >
                                Edit Board
                            </Button>
                        :   
                            <Button
                                className="mr-1"
                                size="sm"
                                color="link"
                                onClick={this.updateBoard}
                            >
                                Save Changes
                            </Button>
                        }
                        <Button
                            outline
                            color="danger"
                            size="sm"
                            onClick={() => this.props.deleteBoard(this.props.board)}
                        >
                            Delete Board
                        </Button>
                    </Col>
                </Row>
                <hr />
                {cart}
            </Container>
        );
    }
}

ProjectBoard.propTypes = {
    board: PropTypes.object.isRequired,
    boardIndex: PropTypes.number.isRequired,
    updateBoard: PropTypes.func.isRequired,
    deleteBoard: PropTypes.func.isRequired,
    addItem: PropTypes.func.isRequired,
    updateItem: PropTypes.func.isRequired,
    removeItem: PropTypes.func.isRequired
}

export default ProjectBoard;