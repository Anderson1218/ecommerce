import styled from "styled-components";

export const CartIconContainer = styled.div`
  width: 2.5rem;
  height: 1rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: 0.5rem;
  font-weight: bold;
  top: 35%;
  color: red;
`;
