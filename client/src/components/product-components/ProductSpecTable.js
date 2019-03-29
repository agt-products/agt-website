import React, { Component } from "react";
import { Container, Table } from "reactstrap";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { queueQuoteItem } from "../../actions/quoteCartActions";

class ProductSpecTable extends Component {
    componentWillUnmount() {
        this.props.queueQuoteItem(null);
    }

    queueQuoteItem(itemIndex) {
        this.props.queueQuoteItem(itemIndex);
        this.props.toggleModal(true);
    }

    createTableHeader(key) {
        if (key.substr(0, 5) === "item_") {
            key = key.substr(5);
        }

        return <th key={key + "_header"}>{key.replace(/_/g, " ").toUpperCase()}</th>;
    }

    generateTable() {
        let tableHeaders = [];
        let tableBody = this.props.items.map((item, index) => {
            let cols = [];
            for(let key of Object.keys(item)) {
                if(index === 0) {
                    tableHeaders.push(this.createTableHeader(key));
                }
                
                let value = item[key];
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

                cols.push(
                    <td key={key + index}>{value}</td>
                );
            }
            return <tr key={"row" + index} onClick={() => this.queueQuoteItem(index)}>{cols}</tr>;
        });

        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        {tableHeaders}
                    </tr>
                </thead>
                <tbody style={{ cursor: "pointer" }}>
                    {tableBody}
                </tbody>
            </Table>
        );
    }

    render() {
        let table = this.generateTable();
        return (
            <Container>
                {table}
            </Container>
        );
    }
}

ProductSpecTable.propTypes = {
    items: PropTypes.array.isRequired,
    toggleModal: PropTypes.func.isRequired
}

export default connect(null, { queueQuoteItem })(ProductSpecTable);