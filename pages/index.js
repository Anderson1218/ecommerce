import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CollectionOverview from "../components/collections-overview/collections-overview";
import CustomCarousel from "../components/custom-carousel/custom-carousel";
import Head from "next/head";
import axios from "axios";

const HomePage = ({ collections }) => {
  let collectionsArray = collections
    ? Object.keys(collections).map(key => collections[key])
    : [];
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CustomCarousel
        imageUrls={[
          "https://mdbootstrap.com/img/Photos/Slides/img%20(134).jpg",
          "https://mdbootstrap.com/img/Photos/Slides/img%20(134).jpg"
        ]}
      />
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
