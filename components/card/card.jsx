import React from "react";
import { Box, Button, Heading, Text } from "grommet";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import { CardContainer, ImageWrapper, Image } from "./card.styles";
import CustomButton from "../custom-button/custom-button";

const Card = props => {
  const { name, imageUrl, price } = props.item;
  const dispatch = useDispatch();
  return (
    <CardContainer>
      <Box align="center" justify="center">
        <ImageWrapper>
          <Image src={imageUrl}></Image>
        </ImageWrapper>
        <Heading level="4" textAlign="center">
          {name}
        </Heading>
        <Text textAlign="center">$ {price}</Text>

        <Box
          align="center"
          justify="center"
          pad="small"
          direction="row"
          flex={true}
          alignSelf="center"
          basis="xxsmall"
          gap="small"
          margin="xsmall"
        >
          <CustomButton
            // label="Add to Cart"
            // primary={true}
            // plain={false}
            onClick={() => {
              dispatch(addItem(props.item));
            }}
          >
            Add to Cart
          </CustomButton>
        </Box>
      </Box>
    </CardContainer>
  );
};

export default Card;
