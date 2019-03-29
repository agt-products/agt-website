import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    Container,
    UncontrolledDropdown,
    DropdownMenu,
    DropdownItem,
    DropdownToggle,
    InputGroup,
    InputGroupAddon,
    Input,
    Button
} from "reactstrap";
import AppSearchControl from "./AppSearchControl";
import { urls } from "../routes";

class AppNavbar extends Component {
    state = {
        isOpen: false,
        activePath: window.location.pathname.split("/")[1]
    }

    mobileToggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    componentWillUpdate() {
        if(this.state.activePath !== window.location.pathname.split("/")[1]) {
            this.setState({
                activePath: window.location.pathname.split("/")[1]
            });
        }
    }

    render() {
        let { activePath } = this.state;
        return (
            <div>
                <Navbar dark expand="md" className="blue-bg">
                    <Container>
                        <Link className="navbar-brand" to="/">AGT Products, Inc.</Link>
                        <NavbarToggler onClick={this.mobileToggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <UncontrolledDropdown 
                                    className={(activePath === "products" || activePath === "product") ? "active" : ""}
                                >
                                    <DropdownToggle nav caret>
                                        Point of Purchase Products
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem onClick={() => this.props.history.push(urls.divisions.pop)}>
                                            Point of Purchase Division
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem onClick={() => this.props.history.push(urls.products.newProducts)}>
                                            New Products
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem header>Categories</DropdownItem>
                                        <DropdownItem onClick={() => this.props.history.push(urls.products.displayHooks)}>
                                            Display Hooks &amp; Accessories
                                        </DropdownItem>
                                        <DropdownItem onClick={() => this.props.history.push(urls.products.signs)}>
                                            Sign &amp; Literature Holders
                                        </DropdownItem>
                                        <DropdownItem onClick={() => this.props.history.push(urls.products.infoStrips)}>
                                            Info Strips &amp; Label Holders
                                        </DropdownItem>
                                        <DropdownItem onClick={() => this.props.history.push(urls.products.ceiling)}>
                                            Ceiling Systems &amp; Accessories
                                        </DropdownItem>
                                        <DropdownItem onClick={() => this.props.history.push(urls.products.shelf)}>
                                            Shelf Management Systems
                                        </DropdownItem>
                                        <DropdownItem onClick={() => this.props.history.push(urls.products.displayConst)}>
                                            Display Construction
                                        </DropdownItem>
                                        <DropdownItem onClick={() => this.props.history.push(urls.products.tapes)}>
                                            AGT Tapes&trade;
                                        </DropdownItem>
                                        <DropdownItem onClick={() => this.props.history.push(urls.products.productMerch)}>
                                            Product Merchandising
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                <UncontrolledDropdown 
                                    className={activePath === "divisions" ? "active" : ""}
                                >
                                    <DropdownToggle nav caret>
                                        Divisions
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem onClick={() => this.props.history.push(urls.divisions.tapes.default)}>
                                            AGT Tapes&trade;
                                        </DropdownItem>
                                        <DropdownItem onClick={() => this.props.history.push(urls.divisions.injectionMolding.default)}>
                                            Injection Molding
                                        </DropdownItem>
                                        <DropdownItem onClick={() => this.props.history.push(urls.divisions.extrusions.default)}>
                                            Extrusions
                                        </DropdownItem>
                                        <DropdownItem onClick={() => this.props.history.push(urls.divisions.thermoforming.default)}>
                                            Thermoforming
                                        </DropdownItem>
                                        <DropdownItem onClick={() => this.props.history.push(urls.divisions.dieCutting.default)}>
                                            Die-Cutting
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                <NavItem active={activePath === "about"}>
                                    <Link className="nav-link" to={urls.about.default}>About</Link>
                                </NavItem>
                                <NavItem active={activePath === "contact"}>   
                                    <Link className="nav-link" to={urls.contact.default}>Contact</Link>
                                </NavItem>
                                <AppSearchControl />
                                <NavItem
                                    className="d-sm-block d-md-none"
                                >
                                    <InputGroup>
                                        <InputGroupAddon addonType="prepend">
                                            <Button>
                                                <i className="fa fa-search"></i>
                                            </Button>
                                        </InputGroupAddon>
                                        <Input />
                                    </InputGroup>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default withRouter(AppNavbar);