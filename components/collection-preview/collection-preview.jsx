import React from "react";
import CustomCard from "../custom-card/custom-card";
import Link from "next/link";
import {
  PreviewContainer,
  Preview,
  Item,
  Title
} from "./collection-preview.styles";

const CollectionPreview = ({ title, items, routeName }) => (
  <PreviewContainer>
    <Link href="/collections/[collection]" as={`/collections/${routeName}`}>
      <Title>{`更多 ${title.toUpperCase()} 相關的商品 `}&#10132;</Title>
    </Link>
    <Preview>
      {items
        .filter((item, idx) => idx < 4)
        .map(item => (
          <Item key={item.id}>
            <CustomCard item={item} />
          </Item>
        ))}
    </Preview>
  </PreviewContainer>
);

export default CollectionPreview;
