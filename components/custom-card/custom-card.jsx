import React from "react";
import { useDispatch } from "react-redux";
import { Card, Button } from "react-bootstrap";
import { addItem } from "../../redux/cart/cart.actions";

const CustomCard = props => {
  const { name, imageUrl, price } = props.item;
  const dispatch = useDispatch();
  return (
    <div className="box-shadow">
      <Card className="h-100">
        <Card.Img variant="top" src={imageUrl} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>info..</Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
          <span className="mr-3">${price}</span>
          <Button
            variant="primary"
            onClick={() => {
              dispatch(addItem(props.item));
            }}
          >
            加到購物車
          </Button>
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
      `}</style>
    </div>
  );
};

export default CustomCard;