import React from "react";
import { useDispatch } from "react-redux";
import CustomButton from "../custom-button/custom-button";
import { Card } from "react-bootstrap";
import { addItem } from "../../redux/cart/cart.actions";

const CustomCard = props => {
  const { name, imageUrl, price } = props.item;
  const dispatch = useDispatch();
  return (
    <div className="box-shadow">
      <Card className="h-100">
        {/*card-img-top is from Card.Img variant=top, in order to use custom class, Do not use <Card.Img>*/}
        <div className="img-wrapper">
          <img src={imageUrl} className="card-img-top img-animation"></img>
        </div>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>info..</Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
          <span className="mr-3">${price}</span>
          <CustomButton
            purchaseBtn
            onClick={() => {
              dispatch(addItem(props.item));
            }}
          >
            Add to Cart
          </CustomButton>
        </Card.Footer>
      </Card>
      <style jsx>{`
        .box-shadow {
          box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
          transition: box-shadow 0.5s;
        }

        .box-shadow:hover {
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
        }

        .img-wrapper {
          overflow: hidden;
        }

        .img-animation:hover {
          cursor: pointer;
          transform: scale(1.3);
          transition: transform 3s cubic-bezier(0.25, 0.45, 0.45, 0.95);
        }
      `}</style>
    </div>
  );
};

export default CustomCard;
