import React from 'react';
import defaultProfileAvatar from '../default-actor-avatar.jpg';
import getImagePath from 'utils/getImagePath';

const CastItem = ({ item }) => {
  const { profile_path, name, character } = item;
  const image = profile_path
    ? getImagePath(profile_path)
    : defaultProfileAvatar;

  return (
    <li>
      <img src={image} alt={name} />
      <p>{name}</p>
      <p>{character}</p>
    </li>
  );
};

export default CastItem;
