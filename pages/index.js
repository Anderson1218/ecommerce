import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CollectionOverview from "../components/collections-overview/collections-overview";
import CustomCarousel from "../components/custom-carousel/custom-carousel";
import Head from "next/head";
import axios from "axios";

const HomePage = ({ collections }) => {
  const collectionsArray = collections
    ? Object.keys(collections).map(key => collections[key])
    : [];
  const imageUrls = [
    "https://png.pngtree.com/thumb_back/fw800/background/20190220/ourmid/pngtree-technology-electronic-business-financial-image_6193.jpg",
    "https://png.pngtree.com/thumb_back/fw800/back_our/20190620/ourmid/pngtree-simple-e-commerce-advertising-banner-image_170173.jpg",
    "https://png.pngtree.com/thumb_back/fw800/background/20190221/ourmid/pngtree-simple-e-commerce-character-business-image_21465.jpg"
  ];
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CustomCarousel imageUrls={imageUrls} />
      <Container className="mt-5">
        <Row>
          <Col>
            <CollectionOverview collections={collectionsArray} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

HomePage.getInitialProps = async ({ reduxStore, req }) => {
  //for dev test
  let axiosInstance = axios.create({
    baseURL: "http://localhost:3000"
  });
  try {
    const response = await axiosInstance.get("/api/collections");
    const collections = response.data;
    return { collections };
  } catch (error) {
    console.log("initialProps Err", error);
  }
};

export default HomePage;
