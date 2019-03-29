import React, { Component } from "react";
import { Modal, ModalBody, ModalHeader, Form, FormGroup, Label, Input, Button } from "reactstrap";
import PropTypes from "prop-types";

class NewProjectModal extends Component {
    onSubmit = e => {
        e.preventDefault();

        const newProject = {
            name: this.state.name,
            description: this.state.description && this.state.description !== null ? this.state.description : " "
        }

        this.props.createNewProject(newProject);
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
                    Create a New Project
                </ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.onSubmit}>
                        <FormGroup>
                            <Label for="name">Project Name</Label>
                            <Input 
                                type="text"
                                name="name"
                                id="name"
                                onChange={this.onChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="description">Project Description</Label>
                            <textarea 
                                className="form-control"
                                name="description"
                                id="description"
                                onChange={this.onChange}
                            />
                        </FormGroup>
                        <Button
                            color="primary"
                            className="mt-2"
                            block
                        >
                            Add Project
                        </Button>
                    </Form>
                </ModalBody>
            </Modal>
        );
    }
}

NewProjectModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired,
    createNewProject: PropTypes.func.isRequired
}

export default NewProjectModal;