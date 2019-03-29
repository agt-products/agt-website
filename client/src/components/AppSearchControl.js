import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    InputGroup,
    Input,
    InputGroupAddon
} from "reactstrap";

import urls from "../routes/urls";

class AppSearchControl extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: ""
        }
    }

    onChange(e) {
        this.setState({
            searchQuery: e.target.value
        })
    }

    onKeyDown(e) {
        if(e.keyCode === 13) {
            this.props.history.push(`${ urls.productSearch.default }/${ this.state.searchQuery }/12/0`);
        }
    }

    render() {
        return (
            <UncontrolledDropdown className="d-none d-md-block">
                <DropdownToggle nav onClick={ this.focus }>
                    <i className="fa fa-search"></i>
                </DropdownToggle>
                <DropdownMenu right>
                        <InputGroup
                            className="px-2"
                            style={{
                                width: "250px"
                            }}
                        >
                            <Input onChange={ (e) => this.onChange(e) } onKeyDown={ (e) => this.onKeyDown(e) } autoFocus/>
                            <InputGroupAddon addonType="append">
                                <Link className="btn" to={ `${ urls.productSearch.default }/${ this.state.searchQuery }/12/0` } >
                                    <i className="fa fa-search"></i>
                                </Link>
                            </InputGroupAddon>
                        </InputGroup>
                </DropdownMenu>
            </UncontrolledDropdown>
        );
    }
}

export default withRouter(AppSearchControl);