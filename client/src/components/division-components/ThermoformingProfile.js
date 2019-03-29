import React, { Component } from "react";
import { Route, Link, Redirect } from "react-router-dom";
import { Nav, NavItem } from "reactstrap";
import DivisionTemplate from "./DivisionTemplate";
import { urls } from "../../routes";

class ThermoformingProfile extends Component {
    nav = (
        <Nav>
            <NavItem>
                <Link className="nav-link" to={urls.divisions.thermoforming.about}>About AGT Thermoforming</Link>
            </NavItem>
            <NavItem>
                <Link className="nav-link" to={urls.divisions.thermoforming.services}>Services</Link>
            </NavItem>
        </Nav>
    );

    render() {
        return (
            <DivisionTemplate division="Thermoforming" nav={this.nav}>
                <Route path="/divisions/thermoforming" component={ Views }/>
            </DivisionTemplate>
        );
    }
}

class ThermoformingRedirect extends Component {
    render() {
        return (
            <Redirect to={urls.divisions.thermoforming.about} />
        );
    }
}

class ThermoformingAbout extends Component {
    render() {
        return (
            <div>
                <p>AGT Products is a thermoformed products manufacturer and complete solutions provider. AGT’s thermoforming processes deliver custom, high-quality, and high-performance product images every time. Our product lines offer you a variety of versatile options with quick turnaround times to fit your merchandising schedule.</p>
                <p>Thermoforming uses heat to form a specific mold, then trims it to reveal a usable product. The goal of our thermoformed division is to improve your product image and performance while increasing sales, decreasing costs, and also providing proper assistance to our packaging division. AGT is staffed with experienced designers who are ready to tackle any job thrown their way, all united under the objective of developing and prototyping your new projects or ideas.</p>
                <p>As with all of AGT’s products, you will receive exceptional support, reasonable pricing, and a product guaranteed to be made in the USA.</p>
            </div>
        );
    }
}

class ThermoformingServices extends Component {
    render() {
        return (
            <div>
                <h4 className="mb-3">Thermoforming Services</h4>
                <p>AGT Products is capable of designing and manufacturing high quality products by offering diverse custom package solutions. This allows us to serve any industry and fulfill all of our customer's needs. Our product lines offer you a wide variety of options, packaging development processes, reduced time, and improvement to your product, time, and retail sale.</p>
                <hr />
                <div>
                    <h5 className="mb-3">Blister Packaging</h5>
                    <p>Our next generation engineering and design team have the capabilities to design and create the most unique and efficient blister packages that meet your exact specifications and optimize productivity. Operating as an American in-house manufacturer, allows our team to have complete control of design, prototyping, and manufacturing. This ensures every aspect of your blister pack meets your criteria. Our technology allows us to maintain fast turnaround times for prototypes and products as well as allowing us to stay within our customer's budget. We can accommodate any of our customer's demands from thousands of pieces to millions, in one order.</p>
                </div>
                <div>
                    <h5 className="mb-3">Clamshells</h5>
                    <p>Our versatile clamshells can fit almost any of our customers' needs, making them the best option for most of our customers. Being a leader in the Thermoforming industry, our capabilities are endless in regards to clamshells. At AGT Products, we manufacture, assist with package design, and create quality clamshells. In the retail market, your product will look great, be tamper-proof and beautiful, and it will bring out the best in your product.</p>
                </div>
                <div>
                    <h5 className="mb-3">Tri-Folds</h5>
                    <p>When you need an exact design and specification, and want your product to either hang or stand on a display shelf, the tri-fold is your best solution. Recommended by our designers as one of the most versatile thermoformed cases; it can be hung or displayed standing up, which allows you to adjust your merchandising dilemma. The Tri-Fold thermoformed casing allows our customer to have a simple, cost-efficient case that really shows off the true value of the product inside. We can even design the base so the product leans at just the right viewing angle for the consumer. We invite you the opportunity to work with our designers and engineers today to make your design a reality. From one reliable source, AGT can fit all your needs.</p>
                </div>
                <div>
                    <h5 className="mb-3">Trays</h5>
                    <p>Our trays are the perfect fit for almost any types of assortments, point-of-purchase displays, shipping trays, and many more. Our trays can contain a variety of products and therefore are guaranteed to show-off and protect the product. Our in-house design team can work with you so that your product is able to hold, display, and ship properly, every time.</p>
                </div>
                <div>
                    <h5 className="mb-3">Lids / Containers</h5>
                    <p>Our diverse applications and unique design for our lids and containers never stop improving. Hardware, confectionary, stationary, beauty, consumer packaging, and crafted products are just a few of the markets we serve. By working directly with our certified engineers, you will have an incredible source to create an effective package, while saving time and money.</p>
                </div>
                <div>
                    <h5 className="mb-3">Folding Cartons</h5>
                    <p>For a top of the line and most outstanding presentation, folding cartons are your best solution, made to fit your product and display properly. They are offered in a variety of shapes, sizes, designs, and materials, and with various options for customizing. Our cartons stand out from most others by providing for both shelf displays and hanging merchandise with a cost-effective price. Our cartons are guaranteed to offer you a high level of packaging security and handling the weight of heavier products. From our designers' standpoint, AGT's folding carton is your best solution if you are looking for a stunning display for the retail market. We offer you full product visibility and customized spacing for marketing graphics. Our designers can use any side, inside or out, in creating a three-dimensional visual impact for your customers.</p>
                </div>
                <div>
                    <h5 className="mb-3">Protective Packaging</h5>
                    <p>From your ideas to our production, we provide our customers with a custom design and our intelligent inputs. Providing you a package that's cost-efficient, reliable, innovated and functional. Our designed protective packages are mainly targeted for electronics, retail, industrial, and medical industries. Our innovative and highly effective packages provide your most fragile equipment with a durable cushioning and protective package, designed to protect your product from dynamic and repeated impacts. We offer a variety of plastics that can be custom designed and formed with varying degrees to meet our customers' needs of shipping, storage, and time. Whether your product is shipping across the street or across the country, we have the capability to design it to securely protect the product throughout the transportation process.</p>
                </div>
                <div>
                    <h5 className="mb-3">Displays</h5>
                    <p>Your products can move faster when showcased with one of our display trays. Whether you are looking for a small case for a few products or a custom pusher-system tray, AGT has the capability to meet all of your needs with the customer in mind. Our designers can create a quality in-store display that ships, holds, and displays your products, providing you with a competitive advantage in the marketplace. We can design and manufacture everything from shelf and counter to floor and pallet displays.</p>
                </div>
            </div>
        );
    }
}

const Views = ({ match }) => (
    <div>
        <Route exact path={ match.url } component={ ThermoformingRedirect } />
        <Route exact path={ match.url + "/about" } component={ ThermoformingAbout } />
        <Route exact path={ match.url + "/services" } component={ ThermoformingServices } />
    </div>
);

export default ThermoformingProfile;