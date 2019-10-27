import React from "react";
import CollectionPreview from "../collection-preview/collection-preview.component";

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
    <style jsx>
      {`
        .collections-overview {
          display: flex;
          flex-direction: column;
        }
      `}
    </style>
  </div>
);

export default CollectionsOverview;
