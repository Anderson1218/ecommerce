import React from "react";
import styled from "styled-components";
import Card from "../../components/card/card";
import axios from "axios";
import config from "../../env-config";

const CollectionPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 50px;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin: 20px auto;
`;

const Items = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-items: center;
  grid-gap: 20px 20px;
  @media screen and (max-width: 1199px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (max-width: 991px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 766px) {
    grid-template-columns: 1fr;
  }
`;

const CollectionPage = ({ collection }) => {
  if (!collection) {
    return <h1>Product does not exist</h1>;
  }
  const { title, items } = collection;

  return (
    <CollectionPageContainer>
      <Title>{title}</Title>
      <Items>
        {items.map(item => (
          <Card key={item.id} item={item} />
        ))}
      </Items>
    </CollectionPageContainer>
  );
};

CollectionPage.getInitialProps = async ({ query }) => {
  try {
    const response = await axios.get(
      `${config.BASE_URL}/api/v0/collections/${query.collection}`
    );
    const collection = response.data;
    return { collection };
  } catch (error) {
    console.log("initialProps Err", error);
    return {};
  }
};

export default CollectionPage;
