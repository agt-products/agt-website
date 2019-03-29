import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import AppCarousel from "../carousels/AppCarousel";
import AppCardLink from "../AppCardLink";

import { urls } from "../../routes";

class PointOfPurchaseProfile extends Component {
    slides = [
        {
            src: "/images/categories/display-hooks.jpg",
            header: "Display Hooks & Accessories",
            href: urls.products.displayHooks
        },
        {
            src: "/images/categories/sign-and-literature-holders.jpg",
            header: "Sign & Literature Holders",
            href: urls.products.signs
        },
        {
            src: "/images/categories/info-strips-and-label-holders.jpg",
            header: "Info Strips & Label Holders",
            href: urls.products.infoStrips
        },
        {
            src: "/images/categories/ceiling-systems.jpg",
            header: "Ceiling Systems & Accessories",
            href: urls.products.ceiling
        },
        {
            src: "/images/categories/shelf-management.jpg",
            header: "Shelf Management Systems",
            href: urls.products.shelf
        },
        {
            src: "/images/categories/display-construction.jpg",
            header: "Display Construction",
            href: urls.products.signs
        },
        {
            src: "/images/categories/agt-tapes.jpg",
            header: "AGT Tapes™",
            href: urls.products.tapes
        },
        {
            src: "/images/categories/product-merchandising.jpg",
            header: "Product Merchandising",
            href: urls.products.productMerch
        }
    ];

    render() {
        return (
            <div>
                <AppCarousel 
                    duration={6000}
                    carouselMaxHeight="650px"
                    slides={this.slides}
                    buttonText="View Products"
                />
                <Container className="my-5">
                    <Row>
                        <Col lg={{ size: 8, offset: 2 }}>
                            <h3>Point of Purchase Division</h3>
                            <p>AGT is a leading Point-of-Purchase product manufacturer for a wide variety of markets. POP products, such as display hooks & accessories, label & sign holders, information strips, tapes, shelf management tools, and other merchandising materials, are essential to the operation of a commercial business. We understand that when you need these products, you need them done right and done promptly.</p>
                            <p>Fortunately, Point-of-Purchase products are AGT’s bread and butter. Our tried-and-tested POP product casting capabilities consistently deliver the top quality we require and ensure retailers timely replenishment for sustained productivity and sales. Looking for your next POP provider? Explore our product categories below and contact us with further questions.</p>
                        </Col>
                    </Row>
                </Container>
                <Container fluid className="p-0">
                    <Row>
                        <Col lg="6" className="p-0">  
                            <AppCardLink to={urls.products.displayHooks} title="Display Hooks &amp; Accessories" image="/categories/display-hooks.jpg" />
                        </Col>
                        <Col lg="6" className="p-0">  
                            <AppCardLink to={urls.products.signs} title="Sign &amp; Literature Holders" image="/categories/sign-and-literature-holders.jpg" />
                        </Col>
                        <Col lg="6" className="p-0">  
                            <AppCardLink to={urls.products.infoStrips} title="Info Strips &amp; Label Holders" image="/categories/info-strips-and-label-holders.jpg" />
                        </Col>
                        <Col lg="6" className="p-0">  
                            <AppCardLink to={urls.products.ceiling} title="Ceiling Systems &amp; Accessories" image="/categories/ceiling-systems.jpg" />
                        </Col>
                        <Col lg="6" className="p-0">  
                            <AppCardLink to={urls.products.shelf} title="Shelf Management Systems" image="/categories/shelf-management.jpg" />
                        </Col>
                        <Col lg="6" className="p-0">  
                            <AppCardLink to={urls.products.displayConst} title="Display Construction" image="/categories/display-construction.jpg" />
                        </Col>
                        <Col lg="6" className="p-0">  
                            <AppCardLink to={urls.products.tapes} title="AGT Tapes&trade;" image="/categories/agt-tapes.jpg" />
                        </Col>
                        <Col lg="6" className="p-0">  
                            <AppCardLink to={urls.products.productMerch} title="Product Merchandising" image="/categories/product-merchandising.jpg" />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default PointOfPurchaseProfile;