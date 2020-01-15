import React from "react";
import styled from "styled-components";
import { Box, Carousel, Image } from "grommet";
import CollectionOverview from "../components/collections-overview/collections-overview";
import Head from "next/head";
import axios from "axios";
import config from "../env-config";
import Footer from "../components/footer/footer";

const StyledBox = styled(Box)`
  margin-top: 1.5rem;
`;

//fake data
const imageUrls = [
  "https://previews.123rf.com/images/gregorylee/gregorylee1601/gregorylee160100109/50537707-colorful-women-s-dresses-on-hangers-in-a-retail-shop-fashion-and-shopping-concept-toned-picture.jpg",
  "https://previews.123rf.com/images/viewapart/viewapart1407/viewapart140700014/30360720-young-beautiful-women-at-the-weekly-cloth-market-best-friends-sharing-free-time-having-fun-and-shopp.jpg",
  "https://previews.123rf.com/images/ollinka/ollinka1804/ollinka180400051/100550511-jeans-stacked-on-a-wooden-background.jpg"
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
      <Box height="512px" fill="horizontal" overflow="hidden">
        <Carousel fill play={2500}>
          {imageUrls.map(image => (
            <Image fill src={image} key={image} />
          ))}
        </Carousel>
      </Box>
      <StyledBox>
        <CollectionOverview collections={collectionsArray} />
      </StyledBox>
      <Footer />
    </>
  );
};

HomePage.getInitialProps = async () => {
  try {
    const response = await axios.get(`${config.BASE_URL}/api/v0/collections`);
    const collections = response.data || {};
    return { collections };
  } catch (error) {
    return {};
  }
};

export default HomePage;
