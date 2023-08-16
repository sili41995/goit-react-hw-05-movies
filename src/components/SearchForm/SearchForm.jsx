import React from 'react';
import { useForm } from 'react-hook-form';

const SearchForm = ({ onSubmitForm }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    onSubmitForm();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('movie')} />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
