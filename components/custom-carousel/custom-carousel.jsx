import { Carousel } from "react-bootstrap";

const CustomCarousel = ({ imageUrls }) => {
  return (
    <>
      <Carousel>
        {imageUrls &&
          imageUrls.map(imgUrl => (
            <Carousel.Item key={imgUrl}>
              <img className="d-block w-100" src={imgUrl} alt="First slide" />
              <Carousel.Caption>
                <h3>slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
      </Carousel>
      <style jsx>
        {`
          img {
            height: 600px;
          }
        `}
      </style>
    </>
  );
};

export default CustomCarousel;
