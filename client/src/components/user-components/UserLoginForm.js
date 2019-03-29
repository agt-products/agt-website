import React, { Component } from "react";
import { Button, Form, FormGroup, FormFeedback, Label, Input } from 'reactstrap';
import { connect } from "react-redux";
import { loginUser, checkToken } from "../../actions/userActions";

class UserLoginForm extends Component {
    state = {
        loggedIn: this.props.user.loggedIn,
        loginError: false
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.user.loggedIn && !this.props.user.loggedIn) {
            this.props.checkToken();
            this.props.toggleModal();

            this.setState({
                loginError: false
            });
        }

        if(nextProps.user.loginError && !this.props.user.loginError) {
            this.setState({
                loginError: true
            });
        }
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = e => {
        e.preventDefault();

        const userLogin = {
            email: this.state.email,
            password: this.state.password
        }

        this.props.loginUser(userLogin);
    }

    render() {
        const { loginError } = this.state;
        return (
            <Form onSubmit={this.onSubmit}>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input
                        type="text"
                        name="email"
                        id="email"
                        onChange={this.onChange}
                        invalid={loginError}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input
                        type="password"
                        name="password"
                        id="password"
                        onChange={this.onChange}
                        invalid={loginError}
                    />
                    <FormFeedback>Your email address or password is invalid.</FormFeedback>
                </FormGroup>
                <Button
                    color="primary"
                    style={{marginTop: "2rem"}}
                    block
                >
                    Login
                </Button>
            </Form>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user,
});

export default connect(mapStateToProps, { loginUser, checkToken })(UserLoginForm);