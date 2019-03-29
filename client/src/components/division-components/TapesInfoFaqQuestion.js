import React, { Component } from "react";
import { UncontrolledCollapse, Button, Card, CardBody } from "reactstrap";

class TapesInfoFaqQuestion extends Component {
    render() {
        return (
            <div className="mb-3">
                <Button color="light" id={"question" + this.props.qkey} className="mb-1">
                    {this.props.question}
                </Button>
                <UncontrolledCollapse toggler={"#question" + this.props.qkey}>
                    <Card>
                        <CardBody>
                            {this.props.answer}
                        </CardBody>
                    </Card>
                </UncontrolledCollapse>
            </div>
        );
    }
}

export default TapesInfoFaqQuestion;