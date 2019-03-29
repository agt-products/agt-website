import React, { Component } from "react";
import { Modal, ModalHeader, ModalBody, Button } from "reactstrap";
import UserLoginForm from "./UserLoginForm";
import UserRegistrationForm from "./UserRegistrationForm";

import PropTypes from "prop-types";

class UserLoginRegisterModal extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            isRegistering: true
        }
        this.toggleRegistration = this.toggleRegistration.bind(this);
    }

    toggleRegistration() {
        this.setState({
            isRegistering: !this.state.isRegistering
        });
    }

    render() {
        let form = this.state.isRegistering ? <UserRegistrationForm toggleModal={this.props.toggle} /> : <UserLoginForm toggleModal={this.props.toggle} />;

        return (
            <Modal
                centered
                autoFocus
                isOpen={this.props.isOpen}
            >
                <ModalHeader
                    toggle={this.props.toggle}
                    charCode="✕"
                >
                    {this.state.isRegistering ? "New User Registration" : "User Login"}
                    <Button color="link" onClick={this.toggleRegistration}>
                        {this.state.isRegistering ? "Already registered?" : "New to AGT? Register here."}
                    </Button>
                </ModalHeader>
                <ModalBody>
                    {form}
                </ModalBody>
            </Modal>
        );
    }
}

UserLoginRegisterModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired
}

UserLoginRegisterModal.defaultProps = {
    isOpen: false
}

export default UserLoginRegisterModal;