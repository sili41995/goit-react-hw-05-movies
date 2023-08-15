import React from 'react';

const ReviewsItem = ({ item }) => {
  const { author, content } = item;

  return (
    <li>
      <p>Author: {author}</p>
      <p>{content}</p>
    </li>
  );
};

export default ReviewsItem;
