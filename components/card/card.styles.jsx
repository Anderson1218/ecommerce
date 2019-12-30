import styled from "styled-components";

export const CardWrapper = styled.div`
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
  transition: box-shadow 0.7s;
  width: 300px;
  height: 530px;
  &:hover {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  }
`;

export const ImageWrapper = styled.div`
  overflow: hidden;
`;

export const Image = styled.img`
  width: 300px;
  height: 350px;
  &:hover {
    cursor: pointer;
    transform: scale(1.3);
    transition: transform 3s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  }
`;
