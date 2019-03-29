import React, { Component } from "react";
import { Route, Link, Redirect } from "react-router-dom";
import { Nav, NavItem } from "reactstrap";
import DivisionTemplate from "./DivisionTemplate";
import TapesInformationCenter from "./TapesInformationCenter";
import { urls } from "../../routes";

class TapesProfile extends Component {
    nav = (
        <Nav>
            <NavItem>
                <Link className="nav-link" to={urls.divisions.tapes.about}>About AGT Tapes&trade;</Link>
            </NavItem>
            <NavItem>
                <Link className="nav-link" to={urls.divisions.tapes.info.default}>Information Center</Link>
            </NavItem>
        </Nav>
    );
    render() {
        return (
            <DivisionTemplate division="AGT Tapes™" nav={this.nav}>
                <Route path="/divisions/agt-tapes" component={ Views }/>
            </DivisionTemplate>
        );
    }
}

class TapesRedirect extends Component {
    render() {
        return (
            <Redirect to={urls.divisions.tapes.about} />
        );
    }
}

class TapesAbout extends Component {
    render() {
        return (
            <div>
                <p>Since its inception, AGT Products has become one of the industry’s largest and most diverse American manufacturing companies. The addition of AGT Tapes marked a significant milestone and expanded our operation to well over 300,000 square feet of pure manufacturing.</p>
                <p>With our successful ties to retailers and consumers, it only made sense to give customers the latest and most reliable solutions for their tape application needs. Extensive research, custom machinery, processing upgrades, and experienced personnel have made AGT Tapes a world-class leader in the manufacturing and distribution of specialty tapes.</p>
                <p>The AGT Tapes division manufactures, coats, cuts, slits, laminates, and converts adhesive tapes for a wide range of industries and applications. Our competitive variety of industrial adhesives includes:</p>
                <ul>
                    <li>Foam Tapes</li>
                    <li>High Bond Tapes</li>
                    <li>Hook and Loop Tapes</li>
                    <li>Transfer Tapes</li>
                    <li>Weatherstripping</li>
                    <li>Magnetic Tapes</li>
                </ul>
                <p>With so many taping capabilities under one roof, we are your all-in-one, multi-solutions adhesive provider. Whether it is permanent or removable, roll or pads, film or foam, AGT is “A Bond You Can Trust.” Browse our online store to see full descriptions and applications of our products. You can also contact us here to receive more information about our adhesive tapes.</p>
            </div>
        );
    }
}

const Views = ({ match }) => (
    <div>
        <Route exact path={ match.url } component={ TapesRedirect } />
        <Route exact path={ match.url + "/about" } component={ TapesAbout } />
        <Route path={ match.url + "/information-center" } component={ TapesInformationCenter } />
    </div>
);

export default TapesProfile;