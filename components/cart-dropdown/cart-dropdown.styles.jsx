import styled from "styled-components";

export const StyledCartDropdown = styled.div`
  min-width: 240px;
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: white;
`;

export const EmptyMessage = styled.span`
  font-size: 1.2rem;
  margin: 25% auto;
`;

export const CartItemsContainer = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;
