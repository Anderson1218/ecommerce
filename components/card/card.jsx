import React from "react";
import { Box, Button, Heading, Text } from "grommet";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import { CardWrapper, ImageWrapper, Image } from "./card.styles";

const Card = props => {
  const { name, imageUrl, price } = props.item;
  const dispatch = useDispatch();
  return (
    <CardWrapper>
      <Box align="center" justify="center" margin="xsmall">
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
          <Button
            label="加到購物車"
            primary={true}
            plain={false}
            onClick={() => {
              dispatch(addItem(props.item));
            }}
          />
        </Box>
      </Box>
    </CardWrapper>
  );
};

export default Card;
