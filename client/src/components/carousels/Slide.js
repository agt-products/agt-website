import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const slideStyles = {
    next: {
        visibility: "visible",
        left: "-100vw"
    },
    current: {
        visibility: "visible",
        left: "0px"
    },
    prev: {
        visibility: "visible",
        left: "100vw"
    },
    outNext: {
        visibility: "hidden",
        left: "-100vw"
    },
    outPrev: {
        visibility: "hidden",
        left: "100vw"
    }
};

class Slide extends Component {
    state = {
        status: this.props.status
    }

    componentWillReceiveProps(nextProps) {
        if(this.state.status !== nextProps.status) {
            this.setState({
                status: nextProps.status
            });
        }
    }

    render() {
        return (
            <div 
                className="position-absolute w-100" 
                style={{
                    ...slideStyles[this.state.status], 
                    bottom: "0px",
                    transition: `left ${this.props.delay}ms ease-in-out`,
                    maxHeight: this.props.carouselMaxHeight
                }}
            >
                <div 
                    className="position-absolute text-white text-right d-inline-block" 
                    style={{ 
                        right: "20px", 
                        bottom: "40px",
                        zIndex: "12",
                        maxHeight: this.props.carouselMaxHeight
                    }}
                    onMouseEnter={() => this.props.toggleHover(true)}
                    onMouseLeave={() => this.props.toggleHover(false)}
                >
                    <h2 style={{ fontSize: "3vw" }}>{this.props.content.header}</h2>
                    <div className="float-right">
                        <p style={{ width: "39vw", fontSize: "2vw", lineHeight: "2vw" }}>{this.props.content.body}</p>
                        <Link to={this.props.content.href} className="btn btn-light">{this.props.buttonText}</Link>
                    </div>
                </div>
                <img 
                    className="w-100 position-absolute" 
                    style={{ 
                        bottom: "0px", 
                        zIndex: "11"
                    }} 
                    src="/images/categories/slide-overlay.svg" 
                    alt="Slide Overlay" 
                />
                <img className="w-100" src={this.props.content.src} alt={this.props.content.header} />
            </div>
        );
    }
}

Slide.propTypes = {
    status: PropTypes.string,
    delay: PropTypes.number.isRequired
}

Slide.defaultProps = {
    status: "current",
    delay: 500,
    carouselMaxHeight: "800px"
}

export default Slide;