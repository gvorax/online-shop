import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';
import {
  CollectionPreviewContainer,
  PreviewContainer,
  TitleContainer,
} from './CollectionPreview.styles';

const CollectionPreview = ({ title, items }) => (
  <CollectionPreviewContainer>
    <TitleContainer>{title.toUpperCase()}</TitleContainer>
    <PreviewContainer>
      {items
        .filter((idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
);

export default CollectionPreview;
