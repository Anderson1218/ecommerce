import React from "react";
import { Jumbotron, Container, Row, Col, ListGroup } from "react-bootstrap";
import CustomCard from "../components/custom-card/custom-card";
import CollectionOverview from "../components/collections-overview/collections-overview.component";
import Head from "next/head";
import Layout from "../components/layout/layout";
import { withRedux } from "../redux/with-redux";

import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../firebase/firebase-utils";

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
        <Jumbotron
          fluid
          style={{
            backgroundImage:
              "url(https://pic.pimg.tw/hsurere/1496638550-2463030140.jpg)",
            backgroundSize: "contain",
            minHeight: "400px"
          }}
        ></Jumbotron>
        <Container>
          <Row>
            <Col>
              <CollectionOverview
                collections={Object.keys(props.collections).map(
                  key => props.collections[key]
                )}
              />
            </Col>
          </Row>
        </Container>
      </Layout>
    </div>
  );
};

HomePage.getInitialProps = async ({ reduxStore }) => {
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = await collectionRef.get();
    const collections = convertCollectionsSnapshotToMap(snapshot);
    return { collections };
  } catch (error) {
    console.log(error);
  }
};

export default withRedux(HomePage);
