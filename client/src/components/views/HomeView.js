import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

import AppCardLink from "../AppCardLink";
import AppCarousel from "../carousels/AppCarousel";

import { urls } from "../../routes";

class HomeView extends Component {
    slides = [
        {
            src: "/images/divisions/pop-division.jpg",
            header: "Point of Purchase Division",
            body: "AGT specializes in manufacturing point of purchase retail components",
            href: urls.divisions.pop
        },
        {
            src: "/images/divisions/tapes-division.jpg",
            header: "AGT Tapes™ Division",
            body: "AGT manufactures high quality adhesive tapes for a variety of markets",
            href: urls.divisions.tapes.default
        },
        {
            src: "/images/divisions/injection-molding-division.jpg",
            header: "Injection Molding Division",
            body: "AGT offers custom injection molding services",
            href: urls.divisions.injectionMolding.default
        },
        {
            src: "/images/divisions/extrusions-division.jpg",
            header: "Extrusions Division",
            body: "AGT offers custom extrusion services",
            href: urls.divisions.extrusions.default
        },
        {
            src: "/images/divisions/thermoforming-division.jpg",
            header: "Thermoforming Division",
            body: "AGT offers custom thermoforming services",
            href: urls.divisions.thermoforming.default
        },
        {
            src: "/images/divisions/die-cutting-division.jpg",
            header: "Die Cutting Division",
            body: "AGT offers custom die-cutting services",
            href: urls.divisions.dieCutting.default
        }
    ];

    render() {
        return (
            <div>
                <AppCarousel 
                    duration={6000}
                    carouselMaxHeight="650px"
                    slides={this.slides}
                />
                <Container className="my-5">
                    <Row>
                        <Col lg={{ size: 8, offset: 2 }}>
                            <h3>About AGT Products</h3>
                            <p>AGT has become one of the industry's leading manufacturers for Point-of-Purchase products and components, with one of the industry's largest stock inventory and stock merchandise products. Our products are manufactured in-house, at our multiple American manufacturing facilities across the Chicagoland area.</p>
                            <p>Since 1986, AGT Products has been innovating, inventing, upgrading, and expanding with true American manufacturing expertise. AGT is your primary source for P.O.P. merchandise; Channel Strips, Sign Holders, Display Strips, Hang Tabs, Display Hooks, Vinyl Pouches and thousands more of related products. Whether you need a custom rollout project or a common component, AGT Products is the primary source for all your P.O.P. needs!</p>
                        </Col>
                    </Row>
                </Container>
                <Container fluid className="p-0">
                    <Row>
                        <Col lg="6" className="p-0">  
                            <AppCardLink to={urls.divisions.pop} title="Point of Purchase" image="/divisions/pop-division.jpg" />
                        </Col>
                        <Col lg="6" className="p-0">  
                            <AppCardLink to={urls.divisions.tapes.default} title="AGT Tapes&trade;" image="/divisions/tapes-division.jpg" />
                        </Col>
                        <Col lg="6" className="p-0">  
                            <AppCardLink to={urls.divisions.injectionMolding.default} title="Injection Molding" image="/divisions/injection-molding-division.jpg" />
                        </Col>
                        <Col lg="6" className="p-0">  
                            <AppCardLink to={urls.divisions.extrusions.default} title="Extrusions" image="/divisions/extrusions-division.jpg" />
                        </Col>
                        <Col lg="6" className="p-0">  
                            <AppCardLink to={urls.divisions.thermoforming.default} title="Thermoforming" image="/divisions/thermoforming-division.jpg" />
                        </Col>
                        <Col lg="6" className="p-0">  
                            <AppCardLink to={urls.divisions.dieCutting.default} title="Die Cutting" image="/divisions/die-cutting-division.jpg" />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default HomeView;