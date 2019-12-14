import React from "react";
import { CardWrapper, ImageWrapper, Image } from "./custom-card.styles";
import CustomButton from "../custom-button/custom-button";
import { Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

const CustomCard = props => {
  const { name, imageUrl, price } = props.item;
  const dispatch = useDispatch();
  return (
    <CardWrapper>
      <Card style={{ height: "100%" }}>
        <ImageWrapper>
          <Image src={imageUrl}></Image>
        </ImageWrapper>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>info..</Card.Text>
        </Card.Body>
        <Card.Footer>
          <span>${price}</span>
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
    </CardWrapper>
  );
};

export default CustomCard;
