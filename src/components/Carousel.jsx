import React, {useState} from "react";
import Carousel from 'react-bootstrap/Carousel';
import Jenny from "../images/IMG_2485.jpeg"

function TCarousel() {

  return (
    <Carousel className = "pad" style = {{backgroundColor: "black", zIndex: "-1"}}>
      <Carousel.Item>
        <img src={Jenny} alt="" className = "icon" />
        <div style = {{color: "white"}}>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img src={Jenny} alt="" className = "icon" />
        <div style = {{color: "white"}}>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default TCarousel;