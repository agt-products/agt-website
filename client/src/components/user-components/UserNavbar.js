import React, { Component } from "react";
import { Container, Button } from "reactstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { urls } from "../../routes";

class UserNavbar extends Component {
    render() {
        const { loggedIn } = this.props;
        const loginBtn = <Button color="link" onClick={this.props.toggleModal}>Login/Register</Button>;
        const logoutBtn = <Button color="link" onClick={this.props.logoutUser}>Logout</Button>;
        const accountBtn = <Link className="btn" to="/account">My Account</Link>;
        const pmBtn = <Link className="btn" to={urls.projectManager.default}>Project Manager</Link>;
        const quoteCartBtn = <Link className="btn" to={urls.quoteCart.default}>My Quote Cart</Link>

        return (
            <Container className="d-none d-md-flex justify-content-end">
                <p className="pt-2 pr-2 m-0" style={{ lineHeight: "22px" }}>Welcome to AGT Products!</p>
                {loggedIn ? accountBtn : ""}
                {loggedIn ? pmBtn : ""}
                {loggedIn ? quoteCartBtn : ""}
                {loggedIn ? logoutBtn : loginBtn}
            </Container>
        );
    }
}

UserNavbar.propTypes = {
    loggedIn: PropTypes.bool.isRequired,
    toggleModal: PropTypes.func.isRequired,
    logoutUser: PropTypes.func.isRequired
}

export default UserNavbar;