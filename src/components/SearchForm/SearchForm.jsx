import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import SEARCH_PARAMS_KEY from 'constants/searchParamsKey';
import { Form } from './SearchForm.styled';

const SearchForm = ({ onSubmitForm, initialValue = '' }) => {
  const { register, handleSubmit } = useForm();

  return (
    <Form onSubmit={handleSubmit(onSubmitForm)}>
      <input defaultValue={initialValue} {...register(SEARCH_PARAMS_KEY)} />
      <button type="submit">Search</button>
    </Form>
  );
};

SearchForm.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
  initialValue: PropTypes.string,
};

export default SearchForm;
