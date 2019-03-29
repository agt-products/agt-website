import React, { Component } from "react";
import { connect } from "react-redux";
import { checkToken, logoutUser } from "../../actions/userActions";

import UserNavbar from "./UserNavbar";
import UserLoginRegisterModal from "./UserLoginRegisterModal";

class UserManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false,
            loggedIn : false
        }
        this.toggleModal = this.toggleModal.bind(this);
    }

    componentWillMount() {
        this.props.checkToken();
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.user.loggedIn !== this.props.user.loggedIn) {
            this.setState({
                loggedIn: nextProps.user.loggedIn
            });
        }
    }

    toggleModal() {
        this.setState({
            modalOpen: !this.state.modalOpen
        });
    }

    render() {
        return (
            <div>
                <UserLoginRegisterModal 
                    isOpen={this.state.modalOpen} 
                    toggle={this.toggleModal} 
                />
                <UserNavbar 
                    loggedIn={this.state.loggedIn} 
                    toggleModal={this.toggleModal} 
                    logoutUser={this.props.logoutUser} 
                />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user
});

export default connect(mapStateToProps, { checkToken, logoutUser })(UserManager);