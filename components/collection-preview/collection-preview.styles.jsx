import styled, { css } from "styled-components";

const PreviewGridLayout = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`;

export const PreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`;

export const Item = styled.div`
  margin-left: 0.8rem;
  margin-right: 0.8rem;
`;

export const Preview = styled.div`
  display: flex;
  @media screen and (max-width: 1199px) {
    ${PreviewGridLayout}
  }

  @media screen and (max-width: 766px) {
    ${PreviewGridLayout}
    grid-template-columns: 1fr;
  }
`;

export const Title = styled.div`
  color: grey;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  &:hover {
    cursor: pointer;
  }
`;
