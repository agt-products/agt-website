import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Nav, NavItem } from "reactstrap";
import { urls } from "../../routes";

class DivisionTemplate extends Component {
    render() {
        return (
            <Container fluid className="my-4">
                <Row>
                    <Col lg="2" className="d-flex justify-content-center">
                        <Nav vertical>
                            <NavItem>
                                <Link className="nav-link" to={urls.divisions.pop}>Point of Purchase</Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link" to={urls.divisions.tapes.default}>AGT Tapes&trade;</Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link" to={urls.divisions.injectionMolding.default}>Injection Molding</Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link" to={urls.divisions.extrusions.default}>Extrusions</Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link" to={urls.divisions.thermoforming.default}>Thermoforming</Link>    
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link" to={urls.divisions.dieCutting.default}>Die-Cutting</Link>
                            </NavItem>
                        </Nav>
                    </Col>
                    <Col lg="8">
                        <Row>
                            <Col md={{ size: 10, offset: 1 }}>
                                <h2>{this.props.division} Division</h2>
                                {this.props.nav}
                            </Col>
                        </Row>
                        <Row>
                            <Col md={{ size: 10, offset: 1 }}>
                                {this.props.children}
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default DivisionTemplate;