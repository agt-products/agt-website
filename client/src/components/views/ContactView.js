import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

class ContactView extends Component {
    render() {
        return (
            <Container className="my-4">
                <h2>Contact</h2>
                <Row>
                    <Col lg="4">
                        <div 
                            className="w-100 border"
                            style={{
                                height: "300px"
                            }}
                        >
                            MAP HERE
                        </div>
                    </Col>
                    <Col lg="8">
                        <p><strong>Get in touch:</strong></p>
                        <p>Do you have a question about any of our products or services? Connect with AGT at the contact details below. A representative will get back to you shortly.</p>
                        <p>Thank you for your interest in AGT Products!</p>
                        <p>
                            <strong>Email:</strong><br />
                            <a href="mailto:info@agtproducts.com" rel="nofollow">info@agtproducts.com</a>
                        </p>
                        <p>
                            <strong>Phone:</strong><br />
                            <a className="d-inline d-md-none" href="tel:+01-630-543-1510" rel="nofollow">630.543.1510</a>
                            <span className="d-none d-md-inline">630.543.1510</span>
                        </p>
                        <p>
                            <strong>Fax:</strong><br />
                            630.543.1595
                        </p>
                        <p className="mb-0"><strong>Office Address:</strong></p>
                        <address>
                            10 Laura Drive<br />
                            Addison, IL 60101
                        </address>
                    </Col>
                </Row>
                <Row>
                    FORM HERE
                </Row>
            </Container>
        );
    }
}

export default ContactView;