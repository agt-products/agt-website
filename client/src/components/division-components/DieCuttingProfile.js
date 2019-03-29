import React, { Component } from "react";
import { Route, Link, Redirect } from "react-router-dom";
import { Nav, NavItem } from "reactstrap";
import DivisionTemplate from "./DivisionTemplate";
import { urls } from "../../routes";

class DieCuttingProfile extends Component {
    nav = (
        <Nav>
            <NavItem>
                <Link className="nav-link" to={urls.divisions.dieCutting.about}>About AGT Die-Cutting</Link>
            </NavItem>
            <NavItem>
                <Link className="nav-link" to={urls.divisions.dieCutting.services}>Services</Link>
            </NavItem>
        </Nav>
    );

    render() {
        return (
            <DivisionTemplate division="Die-Cutting" nav={this.nav}>
                <Route path="/divisions/die-cutting" component={ Views }/>
            </DivisionTemplate>
        );
    }
}

class DieCuttingRedirect extends Component {
    render() {
        return (
            <Redirect to={urls.divisions.dieCutting.about} />
        );
    }
}

class DieCuttingAbout extends Component {
    render() {
        return (
            <div>
                <p>AGT specializes in providing custom gasket cutting services to customers in a wide selection of industries. We offer fabrication in large varieties of rubbers, foam, tapes, film and almost any non-metallic material.</p>
                <p>A gasket is a mechanical seal used to fill in a gap or space between two objects. Gaskets are manufactured in a variety of custom shapes and sizes and can be fabricated from almost any customer-specified material. Die-cutting is the process by which gaskets of desired shapes and sizes are made. Our engineers are ready to help your team complete your project in any time frame.</p>
                <p>Our die-cutting capabilities cover the full range of configurations for your product, application, material, and assembly requirements, including rotary, steel rule, matched-metal, rotary matched-metal, medical, custom, and digital die cutting.</p>
                <p>AGT's extensive range of precision die cutting capabilities, combined with deep materials expertise, expert engineering, and a customer-centered culture will satisfy customers’ needs in a wide variety of applications.</p>
            </div>
        );
    }
}

class DieCuttingServices extends Component {
    render() {
        return (
            <div>
                <h4 className="mb-3">AGT Custom Die-Cutting Services</h4>
                <ul>
                    <li>Short and long run production</li>
                    <li>Fast Prototype delivery</li>
                    <li>Precision low tolerance cut gasket</li>
                    <li>Material selection and acquisition</li>
                </ul>
                <div>
                    <h5 className="mb-3">Lamination</h5>
                    <p>AGT offers a range of inline and offline laminating capabilities and is widely considered a leader in intricate multi-part laminating and die cutting operations.</p>
                    <p className="font-weight-bold">Laminating Capabilities:</p>
                    <ul>
                        <li>Pressure Sensitive Adhesive</li>
                        <li>Direct Coating</li>
                        <li>Mylar Reinforced</li>
                        <li>3M Brand Products</li>
                    </ul>
                </div>
                <hr />
                <div>
                    <h5 className="mb-3">Slitting</h5>
                    <p>Single blade slitting is the process of spinning log rolls of material on a mandrel and indexing a single blade to precisely cut to your desired width. Our state-of-the-art lathe slitter enables operators to program blade direction, blade speed, mandrel speed, and blade sharpening cycles. Computer programming ensures that every roll of your product is slit to meet your quality specification.</p>
                    <p className="font-weight-bold">Slitting Capabilities:</p>
                    <ul>
                        <li>Soft or Rigid Materials</li>
                        <li>Coils 1/8" and up</li>
                        <li>Tape</li>
                        <li>Stripping</li>
                        <li>Stripping</li>
                        <li>Sheeting</li>
                    </ul>
                </div>
            </div>
        );
    }
}

const Views = ({ match }) => (
    <div>
        <Route exact path={ match.url } component={ DieCuttingRedirect } />
        <Route exact path={ match.url + "/about" } component={ DieCuttingAbout } />
        <Route exact path={ match.url + "/services" } component={ DieCuttingServices } />
    </div>
);

export default DieCuttingProfile;