import React, { Component } from "react";
import Slide from "./Slide";
import CarouselControls from "./CarouselControls";
import PropTypes from "prop-types";

class AppCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slide1: null,
            slide2: null,
            slide1Status: "current",
            slide2Status: "next",
            slideIndex: 0
        }
        this.slideContents = this.props.children;
        this.currentSlide = 1;
        this.interval = null;
        this.timeout = null;
        this.loopCounter = 0;
        this.isAnimating = false;
        this.isHovering = false;
        this.userTriggered = false;
        this.isPrev = false;
        this.loop = this.loop.bind(this);
        this.showNextSlide = this.showNextSlide.bind(this);
        this.showPrevSlide = this.showPrevSlide.bind(this);
        this.goToSlide = this.goToSlide.bind(this);
        this.queueSlide = this.queueSlide.bind(this);
        this.toggleHover = this.toggleHover.bind(this);
    }

    componentWillMount() {
        this.setState({
            slide1: this.props.slides[this.state.slideIndex],
            slide2: this.props.slides[this.state.slideIndex + 1]
        });
    }

    componentDidMount() {
        this.interval = setInterval(this.loop, 100);
    }

    componentWillUnmount() {
        if(this.interval) {
            clearInterval(this.interval);
        }

        if(this.timeout) {
            clearTimeout(this.timeout);
        }
    }

    loop() {
        if(!this.isHovering || this.userTriggered) {
            this.loopCounter += 100;
        }
        switch(this.loopCounter) {
            case this.props.duration: {
                this.isAnimating = true;
                if(!this.isPrev) {
                    this.showNextSlide();
                } else {
                    this.showPrevSlide();
                    this.isPrev = false;
                }
                break;
            }
            case this.props.duration + this.props.transitionTime: {
                this.queueSlide(false, this.state.slideIndex + 1);
                this.loopCounter = -100;
                this.isAnimating = false;
                break;
            }
            default: {
                break;
            }
        }
    }

    showNextSlide() {
        if(this.currentSlide === 1) {
            this.setState({
                slide1Status: "prev",
                slide2Status: "current",
                slideIndex: this.props.slides.indexOf(this.state.slide2)
            });
        } else {
            this.setState({
                slide1Status: "current",
                slide2Status: "prev",
                slideIndex: this.props.slides.indexOf(this.state.slide1)
            });
        }
    }

    showPrevSlide() {
        if(this.currentSlide === 1) {
            this.setState({
                slide1Status: "next",
                slide2Status: "current",
                slideIndex: this.props.slides.indexOf(this.state.slide2)
            });
        } else {
            this.setState({
                slide1Status: "current",
                slide2Status: "next",
                slideIndex: this.props.slides.indexOf(this.state.slide1)
            });
        }
    }

    queueSlide(prev, index) {
        if(this.currentSlide === 1) {
            this.setState({
                slide1: this.props.slides[index] ? this.props.slides[index] : this.props.slides[0],
                slide1Status: !prev ? "outNext" : "outPrev"
            });
        } else {
            this.setState({
                slide2: this.props.slides[index] ? this.props.slides[index] : this.props.slides[0],
                slide2Status: !prev ? "outNext" : "outPrev"
            });
        }

        this.currentSlide = this.currentSlide === 1 ? 2 : 1;
    }

    goToSlide(index, prev) {
        index = index < 0 ? this.props.slides.length - 1 : index > this.props.slides.length - 1 ? 0 : index;
        this.currentSlide = this.currentSlide === 1 ? 2 : 1;
        this.queueSlide(prev, index);
        this.userTriggered = true;
        this.isPrev = prev;
        this.loopCounter = this.props.duration - this.props.transitionTime;
    }

    toggleHover(toggle) {
        toggle = toggle || !this.isHovering;
        this.isHovering = toggle;
    }

    render() {
        return (
            <div 
                className="position-relative d-none d-md-block" 
                style={{ 
                    height: "39vw",
                    overflow: "hidden",
                    maxHeight: this.props.carouselMaxHeight 
                }} 
            >
                <Slide 
                    content={this.state.slide1}
                    status={this.state.slide1Status} 
                    delay={this.props.transitionTime}
                    buttonText={this.props.buttonText}
                    toggleHover={this.toggleHover}
                />
                <Slide 
                    content={this.state.slide2}
                    status={this.state.slide2Status} 
                    delay={this.props.transitionTime}
                    buttonText={this.props.buttonText}
                    toggleHover={this.toggleHover}
                />
                <div className="w-100 d-flex justify-content-center">
                    <CarouselControls 
                        onMouseEnter={() => this.toggleHover(true)}
                        onMouseLeave={() => this.toggleHover(false)}
                        slideCount={this.props.slides.length}
                        slideIndex={this.state.slideIndex}
                        nextSlide={() => this.goToSlide(this.state.slideIndex + 1)} 
                        prevSlide={() => this.goToSlide(this.state.slideIndex - 1, true)}
                        goToSlide={this.goToSlide}
                    />
                </div>
            </div>
        );
    }
}

AppCarousel.propTypes = {
    slides: PropTypes.array.isRequired
}

AppCarousel.defaultProps = {
    transitionTime: 800,
    duration: 3000,
    carouselMaxHeight: "800px",
    buttonText: "Learn More"
}

export default AppCarousel;