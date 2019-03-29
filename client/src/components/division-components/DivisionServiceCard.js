import React, { Component } from "react";
import { Card, CardBody, CardText } from "reactstrap";

class DivisionServiceCard extends Component {
    render() {
        return (
            <Card className="mb-2 border-0">
                <CardBody>
                    <CardText tag="h6" className="mb-3 text-center text-uppercase lead">
                        {this.props.service}
                    </CardText>
                    <img src={this.props.image} alt={this.props.service} />
                </CardBody>
            </Card>
        );
    }
}

export default DivisionServiceCard;