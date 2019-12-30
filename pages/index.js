import React from "react";
import styled from "styled-components";
import { Box, Carousel, Image } from "grommet";
import CollectionOverview from "../components/collections-overview/collections-overview";
import Head from "next/head";
import axios from "axios";
import config from "../env-config";

const StyledBox = styled(Box)`
  margin-top: 1.5rem;
`;

//fake data
const imageUrls = [
  "https://png.pngtree.com/thumb_back/fw800/back_our/20190620/ourmid/pngtree-you-shop-me-buy-a-shopping-mall-promotion-poster-background-material-image_148388.jpg",
  "https://png.pngtree.com/thumb_back/fw800/back_our/20190620/ourmid/pngtree-fashion-women-s-products-investment-joining-poster-background-material-image_161486.jpg",
  "https://png.pngtree.com/thumb_back/fw800/back_our/20190621/ourmid/pngtree-girls--day-queen-s-day-shopping-background-image_199961.jpg"
];

const HomePage = ({ collections }) => {
  const collectionsArray = collections
    ? Object.keys(collections).map(key => collections[key])
    : [];
  return (
    <>
      <Head>
        <title>HomePage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box height="medium" fill="horizontal" overflow="hidden">
        <Carousel fill>
          {imageUrls.map(image => (
            <Image fill src={image} key={image} />
          ))}
        </Carousel>
      </Box>
      <StyledBox>
        <CollectionOverview collections={collectionsArray} />
      </StyledBox>
    </>
  );
};

HomePage.getInitialProps = async () => {
  try {
    const response = await axios.get(`${config.BASE_URL}/api/collections`);
    const collections = response.data || {};
    return { collections };
  } catch (error) {
    return {};
  }
};

export default HomePage;
