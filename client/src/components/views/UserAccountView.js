import React, { Component } from "react";
import { 
    Container, 
    Row, 
    Col,
    Button,
    Form, 
    FormGroup, 
    FormFeedback, 
    Label, 
    Input
} from "reactstrap";
import { connect } from "react-redux";
import { updateUserAccountInfo, resolveUserUpdateError } from "../../actions/userActions";

class UserAccountView extends Component {
    state = {
        editMode: false,
        changesSubmitted: false
    }

    componentWillUnmount() {
        this.props.resolveUserUpdateError();
    }

    componentDidUpdate(nextProps, nextState) {
        if(nextState.changesSubmitted) {
            if(nextState.editMode && !this.props.user.updateError) {
                this.setState({
                    editMode: false,
                    changesSubmitted: false
                });
            }

            if(this.props.user.updateError || nextProps.user.updateError) {
                return;
            } else {
                this.setState({
                    editMode: false,
                    changesSubmitted: false
                });
                return;
            }
        }
    }

    toggleEditMode = () => {
        this.setState({
            editMode: !this.state.editMode
        });
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = e => {
        e.preventDefault();

        const updatedUserInfo = {
            firstName: this.state.updatedFirstName && this.state.updatedFirstName !== "" && this.state.updatedFirstName !== null ? this.state.updatedFirstName : this.props.user.user.firstName,
            lastName: this.state.updatedLastName && this.state.updatedLastName !== "" && this.state.updatedLastName !== null ? this.state.updatedLastName : this.props.user.user.lastName,
            email: this.state.updatedEmail && this.state.updatedEmail !== "" && this.state.updatedEmail !== null ? this.state.updatedEmail : this.props.user.user.email,
            phone: this.state.updatedPhone && this.state.updatedPhone !== "" && this.state.updatedPhone !== null ? this.state.updatedPhone : this.props.user.user.phone
        }

        this.props.updateUserAccountInfo(updatedUserInfo, this.state.password);
        this.setState({
            changesSubmitted: true
        });
    }

    validateEmail = () => {
        // eslint-disable-next-line
        let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(this.state.updatedEmail);
    }

    render() {
        let user = null;

        if(this.props.user.user) {
            user = this.props.user.user;
        }

        let userInfo = user ? (
            <Row>
                <Col xs="12">
                    <h3 className="mb-4">
                        {`${user.firstName} ${user.lastName}${user.lastName.charAt(user.lastName.length - 1) === "s" ? "'" : "'s"} Account Details`}
                    </h3>
                    <hr />
                </Col>
                
                    {this.state.editMode ? 
                        <Col sm="12">
                            <Form onSubmit={this.onSubmit}>
                                <FormGroup>
                                    <Label for="updatedFirstName">First name</Label>
                                    <Input 
                                        type="text"
                                        name="updatedFirstName"
                                        id="updatedFirstName"
                                        onChange={this.onChange}
                                        placeholder={ user.firstName }
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="updatedLastName">Last name</Label>
                                    <Input 
                                        type="text"
                                        name="updatedLastName"
                                        id="updatedLastName"
                                        onChange={this.onChange}
                                        placeholder={ user.lastName }
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="updatedEmail">Email</Label>
                                    <Input 
                                        type="text"
                                        name="updatedEmail"
                                        id="updatedEmail"
                                        onChange={this.onChange}
                                        placeholder={ user.email }
                                        valid={this.validateEmail()}
                                        invalid={this.state.updatedEmail !== null && !this.validateEmail()}
                                    />
                                    <FormFeedback>A valid email address is required.</FormFeedback>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="updatedPhone">Phone</Label>
                                    <Input 
                                        type="tel"
                                        name="updatedPhone"
                                        id="updatedPhone"
                                        onChange={this.onChange}
                                        placeholder={ user.phone }
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="password">Please enter password to permit updates.</Label>
                                    <Input 
                                        type="password"
                                        name="password"
                                        id="password"
                                        onChange={this.onChange}
                                        valid={this.state.password !== null}
                                        invalid={this.props.user.updateError}
                                    />
                                    <FormFeedback>The password you entered is invalid.</FormFeedback>
                                </FormGroup>
                            </Form>
                            <Button className="mr-2" size="sm" outline color="danger" onClick={ this.toggleEditMode }>
                                Cancel Changes
                            </Button>
                            <Button size="sm" color="primary" onClick={ this.onSubmit }>
                                Save Changes
                            </Button>
                        </Col>
                    :
                        <Col sm="12">
                            <p>
                                <span className="font-weight-bold">First name: </span> { user.firstName }
                            </p>
                            <p>
                                <span className="font-weight-bold">Last name: </span> { user.lastName }
                            </p>
                            <p>
                                <span className="font-weight-bold">Email: </span> { user.email }
                            </p>
                            <p>
                                <span className="font-weight-bold">Phone number: </span> { user.phone && user.phone !== "" ? user.phone : <span className="font-italic">none</span> }
                            </p>
                        </Col>
                    }
                
                <Col sm="12">
                    { this.state.editMode ?
                        ""
                    : 
                        <Button size="sm" outline color="secondary" onClick={ this.toggleEditMode }>
                            Edit Account Info
                        </Button>
                    }
                </Col>
            </Row>
        ) : (
            <p className="lead">Please login or register to view account details.</p>
        );

        return (
            <Container className="my-4" style={{ minHeight: "400px" }}>
                { userInfo }
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user
});

export default connect(mapStateToProps, { updateUserAccountInfo, resolveUserUpdateError })(UserAccountView);