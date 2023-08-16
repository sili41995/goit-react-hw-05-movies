import React from 'react';
import { RiArrowGoBackFill } from 'react-icons/ri';
import { GoBack } from './GoBackLink.styled';

const GoBackLink = ({ link }) => {
  return (
    <GoBack to={link}>
      <RiArrowGoBackFill /> Go back
    </GoBack>
  );
};

export default GoBackLink;
