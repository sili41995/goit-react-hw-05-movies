import React from 'react';
import { RiArrowGoBackFill } from 'react-icons/ri';
import PropTypes from 'prop-types';
import { GoBack } from './GoBackLink.styled';

const GoBackLink = ({ link }) => {
  return (
    <GoBack to={link}>
      <RiArrowGoBackFill /> Go back
    </GoBack>
  );
};

GoBackLink.propTypes = {
  link: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      state: PropTypes.shape({
        from: PropTypes.object.isRequired,
      }),
    }),
  ]),
};

export default GoBackLink;
