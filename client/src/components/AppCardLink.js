import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, CardImg, CardTitle, CardImgOverlay } from "reactstrap";

class AppCardLink extends Component {
    render() {
        return (
            <Link to={this.props.to}>
                <Card inverse>
                    <CardImg className="w-100" src={"/images/" + this.props.image} alt={this.props.title + " Division"} />
                    <CardImgOverlay className="p-0 d-flex flex-row justify-content-end align-items-end">
                        <div className="app-card-link-overlay"></div>
                        <CardTitle className="app-card-link-text" tag="h2">{this.props.title}</CardTitle>
                    </CardImgOverlay>
                </Card>
            </Link>
        );
    }
}

export default AppCardLink;