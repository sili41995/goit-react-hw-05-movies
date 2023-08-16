import React from 'react';
import { Author } from './ReviewsItem.styled';

const ReviewsItem = ({ item }) => {
  const { author, content } = item;

  return (
    <li>
      <Author>Author: {author}</Author>
      <p>{content}</p>
    </li>
  );
};

export default ReviewsItem;
