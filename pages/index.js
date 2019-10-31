import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CollectionOverview from "../components/collections-overview/collections-overview";
import Head from "next/head";
import Layout from "../components/layout/layout";
import { withRedux } from "../redux/with-redux";
import axios from "axios";

const HomePage = props => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
      </Head>
      <Layout>
        <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(134).jpg"></img>
        <Container>
          <Row>
            <Col>
              <CollectionOverview
                collections={
                  props.collections &&
                  Object.keys(props.collections).map(
                    key => props.collections[key]
                  )
                }
              />
            </Col>
          </Row>
        </Container>
      </Layout>
      <style jsx>
        {`
          img {
            max-height: 500px;
            margin-bottom: 2rem;
          }
        `}
      </style>
    </div>
  );
};

HomePage.getInitialProps = async ({ reduxStore }) => {
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

export default withRedux(HomePage);
