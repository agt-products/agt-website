import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

class AppHeader extends Component {
    render() {
        return (
            <Container className="pt-4 pt-md-0 pb-3">
                <Row>
                    <Col md="3" sm="4">
                        <Link to="/" className="w-100 d-flex d-sm-block justify-content-center">
                            <img src="/images/brand/agt-logo.svg" alt="AGT Products, Inc Logo" />
                        </Link>
                    </Col>
                    <Col md="9" sm="8" className="d-none d-sm-flex align-items-center align-items-md-end">
                        <Container>
                            <Row>
                                <Col md="6" sm="3"></Col>
                                <Col md="2" sm="3" className="pr-0">
                                    <img src="/images/brand/established-1986.svg" alt="Established in 1986" />
                                </Col>
                                <Col md="2" sm="3" className="pr-0">
                                    <img src="/images/brand/made-in-the-usa.svg" alt="Made in the USA" />
                                </Col>
                                <Col md="2" sm="3" className="pr-0">
                                    <img src="/images/brand/iso-certified.svg" alt="ISO 9001 Ceritified" />
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default AppHeader;