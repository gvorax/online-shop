import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import { useSelector } from 'react-redux'

import CollectionItem from '../../components/collection-item/collection-item.component';
import { useParams } from 'react-router-dom';

import { selectCollection } from '../../redux/shop/shop.selector';

import './collection.styles.scss';

const CollectionPage = () => {
  let params = useParams();

  const collection = useSelector(selectCollection(params.collectionId));

  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};



export default CollectionPage;
