import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Nav, NavItem } from "reactstrap";
import { urls } from "../routes";

import ProductCategoriesNav from "./product-components/ProductCategoriesNav";

class AppFooter extends Component {
    render() {
        return (
            <footer className="bg-dark">
                <Container className="pt-5 pb-5 text-white">
                    <Row>
                        <Col sm="2">
                            <img className="w-100" src="/images/brand/agt-logo.svg" alt="AGT Products, Inc. Logo" />
                        </Col>
                        <Col sm="4">
                            <h6>AGT Products, Inc.</h6>
                            <address>
                                10 Laura Drive<br />
                                Addison, IL 60101
                            </address>
                            <p className="mb-0">
                                Email: <a href="mailto:info@agtproducts.com" rel="nofollow">info@agtproducts.com</a>
                            </p>
                            <p className="mb-0">
                                Phone: <a className="d-inline d-md-none" href="tel:+01-630-543-1510" rel="nofollow">630.543.1510</a>
                                <span className="d-none d-md-inline">630.543.1510</span>
                            </p>
                            <p className="mb-0">
                                Fax: 630.543.1595
                            </p>
                        </Col>
                        <Col sm="3">
                            <ProductCategoriesNav vertical />
                        </Col>
                        <Col sm="3">
                            <Nav vertical>
                                <NavItem>
                                    <Link to="/">
                                        Home
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <Link to={urls.divisions.default}>
                                        Divisions
                                    </Link>
                                    <Nav vertical className="ml-2">
                                        <NavItem>
                                            <Link to={urls.divisions.tapes.default}>AGT Tapes&trade;</Link>
                                        </NavItem>
                                        <NavItem>
                                            <Link to={urls.divisions.injectionMolding.default}>Injection Molding</Link>
                                        </NavItem>
                                        <NavItem>
                                            <Link to={urls.divisions.extrusions.default}>Extrusions</Link>
                                        </NavItem>
                                        <NavItem>
                                            <Link to={urls.divisions.thermoforming.default}>Thermoforming</Link>
                                        </NavItem>
                                        <NavItem>
                                            <Link to={urls.divisions.dieCutting.default}>Die-Cutting</Link>
                                        </NavItem>
                                    </Nav>
                                </NavItem>
                                <NavItem>
                                    <Link to={urls.about.history}>
                                        About
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <Link to={urls.contact.default}>
                                        Contact
                                    </Link>
                                </NavItem>
                            </Nav>
                        </Col>
                    </Row>
                </Container>
            </footer>
        );
    }
}

export default AppFooter;