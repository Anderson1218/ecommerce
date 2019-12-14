import React from "react";
import { Image } from "./custom-carousel.styles";
import { Carousel } from "react-bootstrap";

const CustomCarousel = ({ imageUrls }) => {
  return (
    <Carousel>
      {imageUrls &&
        imageUrls.map(imgUrl => (
          <Carousel.Item key={imgUrl}>
            <Image src={imgUrl} alt="First slide" />
            <Carousel.Caption>
              <h3>買買買</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
    </Carousel>
  );
};

export default CustomCarousel;
