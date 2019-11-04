import React from "react";
import CustomCard from "../custom-card/custom-card";
import Link from "next/link";

const CollectionPreview = ({ title, items, routeName }) => (
  <div className="collection-preview">
    <Link href="/collections/[collection]" as={`/collections/${routeName}`}>
      <a>{`更多 ${title.toUpperCase()} 相關的商品 `}&#10132;</a>
    </Link>
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

        @media screen and (max-width: 1199px) {
          .preview {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-gap: 20px;
          }
        }
        @media screen and (max-width: 991px) {
          .preview {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 20px;
          }
        }
        @media screen and (max-width: 766px) {
          .preview {
            display: grid;
            grid-template-columns: 1fr;
            grid-gap: 20px;
          }
        }

        a {
          color: grey;
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }
      `}
    </style>
  </div>
);

export default CollectionPreview;
