import React, { Component } from "react";
import PropTypes from "prop-types";

const styles = {
    controls: {
        position: "absolute",
        bottom: "5px",
        textAlign: "center",
        zIndex: "16"
    },
    arrows: {
        padding: "5px 12px"
    },
    dots: {
        fontSize: "2em",
        userSelect: "none",
        padding: "0px 3px",
    },
    common: {
        color: "rgba(255,255,255,.5)",
        transition: "color 300ms ease-in-out",
        pointerEvents: "auto"
    },
    hover: {
        cursor: "pointer",
        color: "rgba(255,255,255,1)"
    },
    currentDot: {
        display: "inline-block",
    }
}

class CarouselControls extends Component {
    state = {
        nextHover: false,
        prevHover: false,
        dotHover: null
    }

    onHoverStart(el, dotIndex) {
        switch(el) {
            case "next": {
                this.setState({
                    nextHover: true
                });
                break;
            }
            case "prev": {
                this.setState({
                    prevHover: true
                });
                break;
            }
            case "dot": {
                this.setState({
                    dotHover: dotIndex
                });
                break;
            }
            default: break;
        }
    }

    onHoverStop(el) {
        switch(el) {
            case "next": {
                this.setState({
                    nextHover: false
                });
                break;
            }
            case "prev": {
                this.setState({
                    prevHover: false
                });
                break;
            }
            case "dot": {
                this.setState({
                    dotHover: null
                });
                break;
            }
            default: break;
        }
    }

    render() {
        let onHoverStart = this.onHoverStart.bind(this);
        let onHoverStop = this.onHoverStop.bind(this);
        let dots = [];
        for(let i = 0; i < this.props.slideCount; i++) {
            dots.push(
                <span 
                    key={`dot${i}`}
                    style={{
                        ...styles.common,
                        ...styles.dots,
                        ...i === this.state.dotHover ? styles.hover : "",
                        ...i === this.props.slideIndex ? styles.currentDot : ""
                    }}
                    onClick={() => this.props.goToSlide(i)}
                    onMouseEnter={() => onHoverStart("dot", i)}
                    onMouseLeave={() => onHoverStop("dot")}
                >
                    {i === this.props.slideIndex ? "◦" : "•"}
                </span>
            );
        }
        return (
            <div style={{ ...styles.controls }}>
                <i 
                    className="fas fa-angle-left fa-2x" 
                    style={{ 
                        ...styles.common,
                        ...styles.arrows, 
                        ...this.state.prevHover ? styles.hover : "" 
                    }}
                    onClick={this.props.prevSlide}
                    onMouseEnter={() => onHoverStart("prev")}
                    onMouseLeave={() => onHoverStop("prev")}
                >
                </i>
                {dots}
                <i 
                    className="fas fa-angle-right fa-2x" 
                    style={{ 
                        ...styles.common,
                        ...styles.arrows, 
                        ...this.state.nextHover ? styles.hover : "" 
                    }}
                    onClick={this.props.nextSlide}
                    onMouseEnter={() => onHoverStart("next")}
                    onMouseLeave={() => onHoverStop("next")}
                >
                </i>
            </div>
        );
    }
}

CarouselControls.propTypes = {
    slideCount: PropTypes.number.isRequired,
    slideIndex: PropTypes.number.isRequired,
    nextSlide: PropTypes.func.isRequired,
    prevSlide: PropTypes.func.isRequired,
    goToSlide: PropTypes.func.isRequired
}

export default CarouselControls;