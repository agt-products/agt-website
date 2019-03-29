import React, { Component } from "react";

class AppImageSelector extends Component {
    state = {
        currentImageIndex: 0
    }

    setImageIndex(newIndex) {
        this.setState({
            currentImageIndex: newIndex
        });
    }

    render() {
        return (
            <div>
                <img className="w-100 p-2" src={"/images/products/visualGuide/" + this.props.images[this.state.currentImageIndex]} alt={ this.props.productName + " Graphic"} />
            </div>
        )
    }
}

export default AppImageSelector;