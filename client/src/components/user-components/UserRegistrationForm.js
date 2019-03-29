import React, { Component } from "react";
import {
    Button,
    Form,
    FormGroup,
    FormFeedback,
    Label,
    Input
} from 'reactstrap';
import { connect } from "react-redux";
import { registerUser } from "../../actions/userActions";

class UserRegistrationForm extends Component {
    state = {
        firstName: null,
        lastName: null,
        email: null,
        phone: null,
        password: null,
        passwordConfirm: null
    }

    validateEmail = () => {
        // eslint-disable-next-line
        let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(this.state.email);
    }

    onChange = e => {
        this.setState({ 
            [e.target.name]: e.target.value 
        });
    }

    onSubmit = e => {
        e.preventDefault();

        const newUser = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            phone: this.state.phone,
            email: this.state.email,
            password: this.state.password
        }

        // Add item via action
        this.props.registerUser(newUser);
        this.props.toggleModal();
    }

    render() {
        return (
            <Form onSubmit={this.onSubmit}>
                <FormGroup>
                    <Label for="firstName">First Name</Label>
                    <Input
                        type="text"
                        name="firstName"
                        id="firstName"
                        onChange={this.onChange}
                        valid={this.state.firstName !== null && this.state.firstName.length > 0}
                        invalid={this.state.firstName === ""}
                    />
                    <FormFeedback>The first name field is required.</FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Label for="lastName">Last Name</Label>
                    <Input
                        type="text"
                        name="lastName"
                        id="lastName"
                        onChange={this.onChange}
                        valid={this.state.lastName !== null && this.state.lastName.length > 0}
                        invalid={this.state.lastName === ""}
                    />
                    <FormFeedback>The last name field is required.</FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input
                        type="email"
                        name="email"
                        id="email"
                        onChange={this.onChange}
                        valid={this.validateEmail()}
                        invalid={this.state.email !== null && !this.validateEmail()}
                    />
                    <FormFeedback>A valid email address is required.</FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Label for="phone">Phone</Label>
                    <Input
                        type="phone"
                        name="phone"
                        id="phone"
                        onChange={this.onChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input
                        type="password"
                        name="password"
                        id="password"
                        onChange={this.onChange}
                        valid={this.state.password !== null && this.state.password === this.state.passwordConfirm}
                        invalid={this.state.password !== null && this.state.password !== this.state.passwordConfirm}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="passwordConfirm">Confirm Password</Label>
                    <Input
                        type="password"
                        name="passwordConfirm"
                        id="passwordConfirm"
                        onChange={this.onChange}
                        valid={this.state.passwordConfirm !== null && this.state.password === this.state.passwordConfirm}
                        invalid={this.state.passwordConfirm !== null && this.state.password !== this.state.passwordConfirm}
                    />
                    <FormFeedback>Passwords must match!</FormFeedback>
                </FormGroup>
                <Button
                    color="primary"
                    className="mt-2"
                    block
                >
                    Register
                </Button>
            </Form>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user
});

export default connect(mapStateToProps, { registerUser })(UserRegistrationForm);