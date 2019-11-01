import React from "react";
import CustomCard from "../custom-card/custom-card";

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map(item => (
          <div key={item.id} className="collection-item">
            <CustomCard item={item} />
          </div>
        ))}
    </div>
    <style jsx>
      {`
        .collection-preview {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 30px;
        }
        .collection-item {
          margin-left: 0.8rem;
          margin-right: 0.8rem;
        }
        .title {
          font-size: 28px;
          margin-bottom: 25px;
        }

        .preview {
          display: flex;
        }

        @media screen and (max-width: 993px) {
          .preview {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 20px;
          }
        }

        h1 {
          cursor: pointer;
        }

        h1:hover {
          color: grey;
        }
      `}
    </style>
  </div>
);

export default CollectionPreview;
