import React, { Component } from "react";
import { Route, Link, Redirect } from "react-router-dom";
import { Container, Row, Col, Nav, NavItem } from "reactstrap";
import { urls } from "../../routes";

class AboutView extends Component {
    render() {
        return (
            <Container fluid className="my-4">
                <Row>
                    <Col lg="2" className="d-flex justify-content-center">
                        <Nav vertical>
                            <NavItem>
                                <Link className="nav-link text-center text-md-left" to={urls.about.history}>History</Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link text-center text-md-left" to={urls.about.quality}>Quality</Link>
                            </NavItem>
                        </Nav>
                    </Col>
                    <Col lg="8">
                        <Row>
                            <Col md={{ size: 10, offset: 1 }}>
                                <h2>About AGT Products</h2>
                                <Route path = "/about" component = { Views } />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}

class History extends Component {
    render() {
        return (
            <div>
                <h3>History</h3>
                <p><strong>AGT Products, Inc.</strong> began in 1986 in a small, 1,800-square-foot facility in Chicago under its original name, Richcor Gasket. Our reputation quickly rose as one of the premier die-cutting companies in the area. Years of steady business growth prompted a move into a 36,000-square-foot facility in Melrose Park, Illinois.</p>
                <p>We changed our name to American Gasket Technologies (AGT) in the early 1990s to better reflect our ever-growing venture. During this time, we also expanded our capabilities to include slitting, laminating, and rotary die-cutting.</p>
                <p>As we entered the new millennium, we were fortunate to experience continued and dramatic growth. AGT moved to its new 110,000-square-foot facility in Addison, Illinois, in 2000 to continue offering complete, in-house fabricating and production. Ever since, we’ve been expanding upon our company’s strong history of leadership by implementing new processes, technologies, and strategies for superior results.</p>
                <h4>Why AGT Products?</h4>
                <p>From the start, AGT has remained transparent about what drives us: our customers. Every move we make is based on achieving our goal of being our customers’ most reliable, comprehensive, and all-inclusive merchandising solution.</p>
                <blockquote className="font-italic font-weight-bold">We strongly believe in thinking “bigger than the part” to get you the results you deserve.</blockquote>
                <p>It’s with this commitment to customer excellence that our capabilities have evolved to include precision die-cutting, point-of-purchase products (POP) manufacturing, and custom thermoforming. AGT is able to stay agile and proactive with our advanced processing and high-speed automated production equipment, quality craftsmanship, and outstanding customer service.</p>
                <p>No matter the diversity of your merchandising needs, you will notice the same attention to detail AGT has prided itself on for over 30 years. Competitive pricing, quick turnaround times, and custom products round out a business proposition that wants you to be successful in your marketplace.</p>
                <p>At AGT, <strong><em>we are only as successful as our customers.</em></strong> This holds us accountable to our own high standards and is how we’re able to keep fulfilling our promises.</p>
            </div>
        );
    }
}

class Quality extends Component {
    render() {
        return (
            <div>
                <h3>Quality</h3>
                <p>AGT’s global mission is <strong>to offer timely delivery of products and services that meet or exceed your specifications while enhancing your overall business position.</strong> We cannot achieve this without a devoted commitment to quality that starts with us. Whether your project is highly complex, specialized, or straightforward is irrelevant; the same, exceptional quality must be present every step of the way.</p>
                <h4>Quality Policy &amp; Certification</h4>
                <p>AGT Products is proud to confirm its status as AGT ISO 9001. This means that all current and potential customers are assured to be doing business with a company committed to quality management at every level. We’ve built a foundation made to sustain long-term customer satisfaction and trust by ensuring every process aligns with our quality policy.</p>
                <blockquote className="font-italic font-weight-bold">AGT stands committed to customers through continuous improvement of our Quality Management System throughout the core of our business. AGT hence accepts responsibility for the satisfaction of all our customers by developing and deploying innovative quality procedures that comply with customer requirements. This serves our overall mission to produce high-quality products and provide timely delivery.</blockquote>
            </div>
        );
    }
}

class AboutRedirect extends Component {
    render() {
        return (
            <Redirect to={urls.about.default} />
        );
    }
}

const Views = ({ match }) => (
    <div>
        <Route exact path={ match.url } component={AboutRedirect} />
        <Route exact path={ match.url + "/history" } component={ History } />
        <Route exact path={ match.url + "/quality" } component={ Quality } />
    </div>
);



export default AboutView;