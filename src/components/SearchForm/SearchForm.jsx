import React from 'react';
import { useForm } from 'react-hook-form';

const SearchForm = ({ onSubmitForm }) => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    onSubmitForm(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('movie')} />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
