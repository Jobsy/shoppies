import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Fetch } from "./Fetch";

function Form() {
  const { register, handleSubmit, errors, getValues, formState } = useForm();
  const [formData, setFormData] = useState();

  const onSubmitForm = (e) => {
    if (formState.isSubmitting) {
      setFormData(getValues(["title"]));
      return;
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <div>
          <p>Seach for your top 5 movies!</p>
          <input
            type="text"
            placeholder="Enter movie title"
            name="title"
            ref={register({ required: true })}
          />
          {errors.title && <p>title is required</p>}

          <button type="submit" disabled={formState.isSubmitting}>
            Search
          </button>
        </div>
      </form>
      <Fetch title={getValues(["title"])} />
    </>
  );
}
export default Form;
