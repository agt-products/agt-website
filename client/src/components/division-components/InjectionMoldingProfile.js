import React, { Component } from "react";
import { Route, Link, Redirect } from "react-router-dom";
import { Container, Row, Col, Nav, NavItem } from "reactstrap";
import DivisionTemplate from "./DivisionTemplate";
import DivisionServiceCard from "./DivisionServiceCard";
import { urls } from "../../routes";

class InjectionMoldingProfile extends Component {
    nav = (
        <Nav>
            <NavItem>
                <Link className="nav-link" to={urls.divisions.injectionMolding.about}>About AGT Injection Molding</Link>
            </NavItem>
            <NavItem>
                <Link className="nav-link" to={urls.divisions.injectionMolding.services}>Services</Link>
            </NavItem>
        </Nav>
    );
    
    render() {
        return (
            <DivisionTemplate division="Injection Molding" nav={this.nav}>
                <Route path="/divisions/injection-molding" component={ Views }/>
            </DivisionTemplate>
        );
    }
}

class InjectionMoldingRedirect extends Component {
    render() {
        return (
            <Redirect to={urls.divisions.injectionMolding.about} />
        );
    }
}

class InjectionMoldingAbout extends Component {
    render() {
        return (
            <div>
                <p>AGT's Injection Molding Division has an array of presses that vary from 100 to 750 tons. We are capable of satisfying a wide variety of our customer's needs because we can manufacture anything from small plastic display hooks to 20 gallon utility tubs.</p>
                <p>Our Injection Molding Division specializes in manufacturing a wide variety of retail plastic products and components. With complete in-house engineering services, including prototyping and sample manufacturing, AGT is able to provide customers with an experienced product development team using state of the art tooling, and producing custom quality crafted products.</p>
            </div>
        );
    }
}

class InjectionMoldingServices extends Component {
    services = [
        {
            name: "Design",
            image: "/images/divisions/injection-molding/design.svg"
        },
        {
            name: "Prototype",
            image: "/images/divisions/injection-molding/prototype.svg"
        },
        {
            name: "Mold Construction",
            image: "/images/divisions/injection-molding/mold-construction.svg"
        },
        {
            name: "Manufacturing",
            image: "/images/divisions/injection-molding/manufacture.svg"
        },
        {
            name: "Assembly",
            image: "/images/divisions/injection-molding/assembly.svg"
        },
        {
            name: "Perforation",
            image: "/images/divisions/injection-molding/perforation.svg"
        },
        {
            name: "Inspection",
            image: "/images/divisions/injection-molding/inspection.svg"
        },
        {
            name: "Packaging & Shipping",
            image: "/images/divisions/injection-molding/packaging-and-shipping.svg"
        },
    ]
    render() {
        return (
            <Container className="p-0">
                <Row className="d-flex justify-content-center">
                    {this.services.map((service, index) => (
                        <Col xl="3" md="4" sm="6" key={"service" + index}>
                            <DivisionServiceCard service={service.name} image={service.image} />
                        </Col>
                    ))}
                </Row>
            </Container>
        );
    }
}

const Views = ({ match }) => (
    <div>
        <Route exact path={ match.url } component={ InjectionMoldingRedirect } />
        <Route exact path={ match.url + "/about" } component={ InjectionMoldingAbout } />
        <Route exact path={ match.url + "/services" } component={ InjectionMoldingServices } />
    </div>
);

export default InjectionMoldingProfile;