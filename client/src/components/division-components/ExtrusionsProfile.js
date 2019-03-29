import React, { Component } from "react";
import { Route, Link, Redirect } from "react-router-dom";
import { Container, Row, Col, Nav, NavItem } from "reactstrap";
import DivisionTemplate from "./DivisionTemplate";
import DivisionServiceCard from "./DivisionServiceCard";
import { urls } from "../../routes";

class ExtrusionsProfile extends Component {
    nav = (
        <Nav>
            <NavItem>
                <Link className="nav-link" to={urls.divisions.extrusions.about}>About AGT Extrusions</Link>
            </NavItem>
            <NavItem>
                <Link className="nav-link" to={urls.divisions.extrusions.services}>Services</Link>
            </NavItem>
        </Nav>
    );

    render() {
        return (
            <DivisionTemplate division="Extrusions" nav={this.nav}>
                <Route path="/divisions/extrusions" component={ Views }/>
            </DivisionTemplate>
        );
    }
}

class ExtrusionsRedirect extends Component {
    render() {
        return (
            <Redirect to={urls.divisions.extrusions.about} />
        );
    }
}

class ExtrusionsAbout extends Component {
    render() {
        return (
            <div>
                <p>AGT Products is a complete solutions provider for both custom and stock extrusions. Our experienced extrusion division successfully launches product lines for retail, producing high-quality Sign Channels, C-Channels, Power Wing Clips, Flip-Up Sign Channels, Scan Hook Labels, Price Channels, etc.</p>
                <p>AGT's extrusion division provides state-of-the-art processing technologies for extruded co-extrusions, tri-extrusions, and multi-extrusions. In addition, we offer dual-material processing, vacuum sizing, film laminating, die-cut punching, and injection molding.</p>
                <p>AGT Products provides you with experienced designers who are ready to tackle the largest of jobs and will assist you in developing and prototyping any new projects or ideas. To ensure that AGT extrusion meets the most exacting standards, we back up our capabilities with our top-of-the-line certified engineers and support personnel. Our extrusion division staff members, engineers, designers, and personnel are available to assist, design, optimize material, mold dies, and inspect quality from start to finish.</p>
                <p>At AGT Extrusion, our goal is to help you fulfill your most daring challenge. AGT Products has dedicated the last 25 years to building, improving, and innovating our company. We understand your needs and strive to go above and beyond our customers’ expectations for every project.</p>
            </div>
        );
    }
}

class ExtrusionsServices extends Component {
    machineCapabilities = [
        {
            name: "Sonic Welding",
            image: "/images/divisions/extrusions/sonic-welding.svg"
        },
        {
            name: "Solvent Welding",
            image: "/images/divisions/extrusions/solvent-welding.svg"
        },
        {
            name: "Adhesive Backing",
            image: "/images/divisions/extrusions/adhesive-backing.svg"
        },
        {
            name: "Routing",
            image: "/images/divisions/extrusions/routing.svg"
        },
        {
            name: "Punching",
            image: "/images/divisions/extrusions/punching.svg"
        },
        {
            name: "Assembly",
            image: "/images/divisions/extrusions/assembly.svg"
        },
        {
            name: "Finishing",
            image: "/images/divisions/extrusions/finishing.svg"
        },
        {
            name: "Drilling",
            image: "/images/divisions/extrusions/drilling.svg"
        },
        {
            name: "Slitting",
            image: "/images/divisions/extrusions/slitting.svg"
        },
        {
            name: "Stamping",
            image: "/images/divisions/extrusions/stamping.svg"
        },
        {
            name: "Kit Packaging",
            image: "/images/divisions/extrusions/kit-packaging.svg"
        },
    ]

    formCapabilities = [
        {
            name: "Price Tag Channels",
            image: "/images/divisions/extrusions/price-tag-channels.svg"
        },
        {
            name: "J-Channels",
            image: "/images/divisions/extrusions/j-channels.svg"
        },
        {
            name: "C-Channels",
            image: "/images/divisions/extrusions/c-channels.svg"
        },
        {
            name: "H-Channels",
            image: "/images/divisions/extrusions/h-channels.svg"
        },
        {
            name: "Card & Sign Holders",
            image: "/images/divisions/extrusions/card-holders.svg"
        },
        {
            name: "Display Strips",
            image: "/images/divisions/extrusions/display-strips.svg"
        }
    ]

    render() {
        return (
            <Container className="p-0">
                <h4 className="mb-3">What we offer as Custom Extruders:</h4>
                <ul>
                    <li>State-of-the-art equipment enables AGT to manufacture extrusions of the utmost complexity.</li>
                    <li>With machines that range from 1” to 3.5” screws, AGT can provide any profile necessary.</li>
                    <li>AGT can extrude J Channels, H Channels, C Channels, Data Strips, Co-Extrusions, and Tri-Extrusions with custom profiles, lengths, and colors.</li>
                    <li>Materials we can fabricate: PVC, HIPS, Acrylic, Vinyl, PETG, HDPE, TPE, Polypropylene, and many more.</li>
                </ul>
                <p>At AGT Products, our team welcomes the opportunity to provide you with a low cost, highly creative, total custom solution on your next project. We understand the demand for new, better, and innovative ideas.</p>
                <p>By cutting out the middle man and working directly with custom manufacturing like AGT, we can provide you with designing and engineering, analysis, prototyping, and in-house production. AGT Products is a fine competitor that exceeds the standards of the industries, for custom manufacturing. At AGT, we guarantee you can find an easy and cost-effective solution on your next extrusion project.</p>
                <hr />
                <h4>Machine Capabilities</h4>
                <Row className="d-flex justify-content-center">
                    {this.machineCapabilities.map((service, index) => (
                        <Col xl="3" md="4" sm="6" key={"machine" + index}>
                            <DivisionServiceCard service={service.name} image={service.image} />
                        </Col>
                    ))}
                </Row>
                <hr />
                <h4>Form Capabilities</h4>
                <Row className="d-flex justify-content-center">
                    {this.formCapabilities.map((service, index) => (
                        <Col xl="3" md="4" sm="6" key={"form" + index}>
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
        <Route exact path={ match.url } component={ ExtrusionsRedirect } />
        <Route exact path={ match.url + "/about" } component={ ExtrusionsAbout } />
        <Route exact path={ match.url + "/services" } component={ ExtrusionsServices } />
    </div>
);

export default ExtrusionsProfile;