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
                <h3>買買買</h3>
                <p>還是買買買</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
      </Carousel>
      <style jsx>
        {`
          img {
            height: 600px;
          }
          h3 {
            color: grey;
          }
        `}
      </style>
    </>
  );
};

export default CustomCarousel;
