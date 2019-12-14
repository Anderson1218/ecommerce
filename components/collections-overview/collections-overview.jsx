import React from "react";
import { Overview } from "./collections-overview-styles";
import CollectionPreview from "../collection-preview/collection-preview";

const CollectionsOverview = ({ collections }) => (
  <Overview>
    {collections &&
      collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
  </Overview>
);

export default CollectionsOverview;
