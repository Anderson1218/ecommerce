import React from "react";
import {
  PreviewContainer,
  Preview,
  Item,
  Title
} from "./collection-preview.styles";
import Card from "../card/card";
import Link from "next/link";

const CollectionPreview = ({ title, items, routeName }) => (
  <PreviewContainer>
    <Link href="/collections/[collection]" as={`/collections/${routeName}`}>
      <Title>{`More ${title.toUpperCase()}`}&#10132;</Title>
    </Link>
    <Preview>
      {items
        .filter((item, idx) => idx < 4)
        .map(item => (
          <Item key={item.id}>
            <Card item={item} />
          </Item>
        ))}
    </Preview>
  </PreviewContainer>
);

export default CollectionPreview;
