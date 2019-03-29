import React, { Component } from "react";
import {
    Button,
    Form,
    Container
} from 'reactstrap';
import { connect } from "react-redux";
import { logoutUser } from "../../actions/userActions";

class UserLogoutForm extends Component {
    onSubmit = e => {
        e.preventDefault();

        // Add item via action
        this.props.logoutUser();
    }

    render() {
        return (
            <Container>
                <Form onSubmit={this.onSubmit}>
                    <Button
                        color="danger"
                        style={{marginTop: "2rem"}}
                        block
                    >
                        Logout
                    </Button>
                </Form>
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user
});

export default connect(mapStateToProps, { logoutUser })(UserLogoutForm);