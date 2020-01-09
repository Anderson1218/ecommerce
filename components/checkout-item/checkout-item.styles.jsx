import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
  z-index: 1;
`;

export const ImageWrapper = styled.div`
  width: 23%;
  padding-right: 15px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  max-height: 250px;
`;

export const Text = styled.span`
  width: 23%;
`;

export const QuantityContainer = styled(Text)`
  display: flex;
  padding-left: 20px;
`;

export const Quantity = styled.span`
  margin: 0 10px;
`;

export const Price = styled(Text)`
  @media screen and (max-width: 991px) {
    display: none;
  }
`;

export const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
  @media screen and (max-width: 991px) {
    display: none;
  }
`;

export const Arrow = styled.div`
  cursor: pointer;
`;
