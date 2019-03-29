import React, { Component } from "react";
import { Modal, ModalBody, ModalHeader, Form, FormGroup, Label, Input, Button } from "reactstrap";
import PropTypes from "prop-types";

class NewBoardModal extends Component {
    state = {
        addCartToBoard: false
    }

    onSubmit = e => {
        e.preventDefault();

        const newProject = {
            name: this.state.name,
            description: this.state.description ? this.state.description : " ",
            cart: this.state.addCartToBoard ? this.props.cartItems : []
        }

        this.props.createNewBoard(newProject);
        this.props.toggle();
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        return (
            <Modal
                centered
                autoFocus
                size="md"
                isOpen={this.props.isOpen}
            >
                <ModalHeader
                    toggle={this.props.toggle}
                    charCode="✕"
                >
                    Create a New Board
                </ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.onSubmit}>
                        <FormGroup>
                            <Label for="name">Board Name</Label>
                            <Input 
                                type="text"
                                name="name"
                                id="name"
                                onChange={this.onChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="description">Board Description</Label>
                            <textarea 
                                className="form-control"
                                name="description"
                                id="description"
                                onChange={this.onChange}
                            />
                        </FormGroup>
                        {this.props.cartItems.length > 0 ?
                            <FormGroup>
                                <Label for="addCartToBoard">Add Quote Cart items to board?</Label>
                                <Input 
                                    className="ml-1"
                                    type="checkbox"
                                    name="addCartToBoard"
                                    id="addCartToBoard"
                                    onChange={this.onChange}
                                />
                            </FormGroup>
                        : ""}
                        <Button
                            color="primary"
                            className="mt-2"
                            block
                        >
                            Add Board
                        </Button>
                    </Form>
                </ModalBody>
            </Modal>
        );
    }
}

NewBoardModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired,
    createNewBoard: PropTypes.func.isRequired,
    cartItems: PropTypes.array
}

export default NewBoardModal;