import React from "react";
import { useDispatch } from "react-redux";
import CustomButton from "../custom-button/custom-button";
import { Card } from "react-bootstrap";
import { addItem } from "../../redux/cart/cart.actions";

const CustomCard = props => {
  const { name, imageUrl, price } = props.item;
  const dispatch = useDispatch();
  return (
    <div className="card-wrapper">
      <Card className="h-100">
        <div className="img-wrapper">
          <img
            src={imageUrl}
            width="300"
            height="350"
            className="img-animation"
          ></img>
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
            加到購物車
          </CustomButton>
        </Card.Footer>
      </Card>
      <style jsx>{`
        .card-wrapper {
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
          transition: box-shadow 0.7s;
          width: 300px;
          height: 500px;
        }

        .card-wrapper:hover {
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
