import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const [data, setData] = useState();
  const { register, errors, handleSubmit } = useForm({
    mode: "onBlur",
  });
  const onSubmit = (data) => {
    setData(data);//future REQRES request for post then change pre for RES
  };

  return (
    <div className="App" >
      <form onSubmit={handleSubmit(onSubmit)} data-testid="form">
        <div>
          <label htmlFor="firstName">First Name*
            <input
              aria-labelledby="firstName" 
              id="firstName"
              name="firstName"
              placeholder="Edd"
              ref={register({ required: `Must include a first name`, maxLength: 10 })}
            />
          </label>
          {errors.firstName && (
            <p>{errors.firstName.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="lastName">Last Name*</label>
          <input
            id="lastName"
            name="lastName"
            placeholder="Burke"
            ref={register({ required: true })}
          />
          {errors.lastName && (
            <p>Looks like there was an error: {errors.lastName.type}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" placeholder="bluebill1049@hotmail.com">
            Email*
          </label>
          <input id='email' name="email" ref={register({ required: true })} />
          {errors.email && (
            <p>Looks like there was an error: {errors.email.type}</p>
          )}
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea name="message" ref={register({ required: false })} />
        </div>
        {data && (
          <pre data-testid="state-data" style={{ textAlign: "left", color: "white" }}>
            {JSON.stringify(data, null, 2)}
          </pre>
        )}
        <input data-testid="submit"/>
      </form>
    </div>
  );
};

export default ContactForm;
