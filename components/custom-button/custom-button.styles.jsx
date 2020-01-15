import styled, { css } from "styled-components";

const buttonStyles = css`
  background-color: #228be6;
  color: white;
  border: none;
  border-radius: 10px 10px 10px 10px;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;
  border-radius: 10px 10px 10px 10px;
  &:hover {
    background-color: #228be6;
    color: white;
    border: none;
  }
`;

const purchaseButtonStyles = css`
  background-color: #00bea4;
  color: white;
  border: 1px solid black;

  &:hover {
    background-color: white;
    color: black;
    border: none;
  }
`;

const getButtonStyles = props => {
  if (props.purchaseBtn) {
    return purchaseButtonStyles;
  }

  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const StyledCustomButton = styled.button`
  display: flex;
  justify-content: center;
  min-width: 165px;
  width: auto;
  height: 50px;
  padding: 0 35px 0 35px;
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: bolder;
  cursor: pointer;
  ${getButtonStyles}
`;
