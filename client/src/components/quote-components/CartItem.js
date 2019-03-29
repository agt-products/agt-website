import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Button, FormGroup, Label } from "reactstrap";
import PropTypes from "prop-types";

class CartItem extends Component {
    prettifyCategoryNames(categories) {
        let prettyNames = [];
        prettyNames.push(categories[0].substr(1).replace(/-/g," ").replace(/ and /g, " & "));
        prettyNames.push(categories[1].split("/")[2].replace(/-/g," "));
        return prettyNames;
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onFocus = e => {
        e.target.value = this.state !== null && this.state.comment !== null ? this.state.comment : this.props.item.comment ? this.props.item.comment : "";
        e.target.placeholder = "";
    }

    onBlur = e => {
        if(this.state !== null && this.state.comment !== null) {
            this.props.update({ cartItem: this.props.item, update: {...this.state} });
            e.target.placeholder = this.state.comment;
        }
        else {
            e.target.placeholder = this.props.placeholder;
        }
    }

    render() {
        let { item } = this.props;
        let { specs } = item;
        let prettyCategories = this.prettifyCategoryNames(item.categories);
        let specList = [];

        for(let key of Object.keys(specs)) {
            let prettyKey = key.substr(0, 5) === "item_" ? key.substr(5).replace(/^\w/, c => c.toUpperCase()) : key.replace(/^\w/, c => c.toUpperCase());
            let value = specs[key];
            switch(typeof(value)) {
                case "string": {
                    value = value.replace(/^\w/, c => c.toUpperCase());
                    break;
                }
                case "boolean": {
                    value = value ? "✓" : "✕";
                    break;
                }
                default: {
                    break;
                }
            }

            specList.push(
                <p 
                    key={prettyKey+item.id}
                    className="mb-1"
                >
                    <strong>{prettyKey}: </strong>    
                    {value}
                </p>
            );
        }

        return (
            <Row className="py-3 my-3">
                <Col md="3">
                    <Link to={`/product/${item.productId}`}>
                        <img 
                            className="w-100"
                            src={`/images/products/visualGuide/${item.image}`} 
                            alt={item.item} 
                        />
                    </Link>
                </Col>
                <Col md="6">
                    <h6 className="mb-3">
                        <Link className="text-capitalize" to={`/products/categories${ item.categories[0]}/12/0`}>{ prettyCategories[0] }</Link>
                        &nbsp;/
                        <Link className="text-capitalize" to={`/products/categories${item.categories[1]}/12/0`}> { prettyCategories[1] }</Link>
                        &nbsp;/ 
                        <Link className="font-weight-bold text-nowrap" to={`/product/${item.productId}`}> {specs.item}</Link>
                    </h6>
                    {specList}
                    <FormGroup>
                        <Label className="font-weight-bold">
                            Notes:
                        </Label>
                        <textarea 
                            className="form-control"
                            type="text"
                            name="comment"
                            id="comment"
                            placeholder={item.comment ? item.comment : this.props.placeholder}
                            onChange={this.onChange}
                            onFocus={this.onFocus}
                            onBlur={this.onBlur}
                        />
                    </FormGroup>
                </Col>
                <Col 
                    md="3"
                    className="d-flex align-items-center justify-content-center justify-content-md-end"
                >
                    <Button
                        outline
                        size="sm" 
                        color="danger" 
                        onClick={() => this.props.remove(this.props.item)}>
                        Remove Item
                    </Button>
                </Col>
            </Row>
        );
    }
}

CartItem.propTypes = {
    remove: PropTypes.func.isRequired,
    update: PropTypes.func.isRequired
}

CartItem.defaultProps = {
    placeholder: "Type here to make a note"
}

export default CartItem;