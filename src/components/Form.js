import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "semantic-ui-react";

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
          <div className="content3">
            <input
              size="big"
              type="text"
              placeholder="Search your top movies by title"
              name="title"
              ref={register({ required: true })}
            />
            {errors.title && <p>title is required</p>}

            <Button
              type="submit"
              icon="search"
              content="Search"
              size="large"
              disabled={formState.isSubmitting}
            ></Button>
          </div>
        </div>
      </form>
      <Fetch title={getValues(["title"])} />
    </>
  );
}
export default Form;
