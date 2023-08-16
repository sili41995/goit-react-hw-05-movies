import React from 'react';
import PropTypes from 'prop-types';
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

ReviewsItem.propTypes = {
  item: PropTypes.shape({
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export default ReviewsItem;
