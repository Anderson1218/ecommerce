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
  "https://attach.setn.com/newsimages/2018/02/06/1241730-XXL.jpg",
  "https://attach.setn.com/newsimages/2018/02/06/1241732-PH.jpg",
  "https://www.kpopn.com/upload/2018/07/20180718-2018Nominations-100MostHandsomeBeautifulFaces-thumb2.jpg"
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
