import React from "react";
import { InputContent } from "./style";

export const Input = ({ label, type, placeholder, register, error }) => {
  return (
    <InputContent>
      <label htmlFor={register.name}>{label}</label>
      <input
        type={type}
        id={register.name}
        placeholder={placeholder}
        {...register}
      />
      {error ? <p>{error}</p> : null}
    </InputContent>
  );
};
