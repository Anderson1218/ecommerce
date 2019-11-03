import React from "react";
import CustomCard from "../../components/custom-card/custom-card";
import axios from "axios";

const CollectionPage = ({ collection }) => {
  if (!collection) {
    return <h1>Product does not exist</h1>;
  }
  const { title, items } = collection;

  return (
    <div>
      <div className="collection-page">
        <h2 className="title">{title}</h2>
        <div className="items">
          {items.map(item => (
            <CustomCard key={item.id} item={item} />
          ))}
        </div>
      </div>
      <style jsx>
        {`
          .collection-page {
            display: flex;
            flex-direction: column;
          }
          .title {
            font-size: 2rem;
            margin: 0 auto 30px;
          }

          .items {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            justify-items: center;
            grid-gap: 20px 20px;
          }
          @media screen and (max-width: 1199px) {
            .items {
              display: grid;
              grid-template-columns: 1fr 1fr 1fr;
              justify-items: center;
              grid-gap: 20px 20px;
            }
          }
          @media screen and (max-width: 991px) {
            .items {
              display: grid;
              grid-template-columns: 1fr 1fr;
              justify-items: center;
              grid-gap: 20px 20px;
            }
          }
          @media screen and (max-width: 766px) {
            .items {
              display: grid;
              grid-template-columns: 1fr;
              justify-items: center;
              grid-gap: 20px 20px;
            }
          }
        `}
      </style>
    </div>
  );
};

CollectionPage.getInitialProps = async ({ query }) => {
  // let axiosInstance = axios.create({
  //   baseURL: "http://localhost:3000"
  // });
  try {
    const response = await axios.get(`/api/collections/${query.collection}`);
    const collection = response.data;
    return { collection };
  } catch (error) {
    console.log("initialProps Err", error);
  }
};

export default CollectionPage;
