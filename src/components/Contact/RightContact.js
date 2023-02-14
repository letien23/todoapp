import React, { useState } from "react";
import FormInput from "../SignUp/FormInput";

export default function RightContact() {
  const [data, setData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    email: null,
    confirmPassword: null,
  });
  const [pwdType, setPwdType] = useState("password");

  const changeInputHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <div className="contact__right">
      <div className="contact__right__title">
        <h3>Send a Message.</h3>
        <p>
          Neque convallis a cras semper auctor. Libero id faucibus nisl <br />
          tincidunt egetnvallis.
        </p>
      </div>
      <div className="contact__right__form">
        <form action="#" className=" row y-gap-30 pt-60 lg:pt-40">
          <div className="col-md-5">
            <FormInput
              name="name"
              title="Name *"
              placeholder="Name"
              value={data.name}
              onChange={changeInputHandler}
              required={true}
              error={errors.name}
            />
          </div>
          <div className="col-md-5">
            <FormInput
              name="email"
              title="Email address *"
              placeholder="Email"
              value={data.email}
              onChange={changeInputHandler}
              required={true}
              error={errors.email}
            />
          </div>
          <div className="col-12">
            <FormInput
              name="Message"
              title="Message *"
              placeholder="Message"
              value={data.message}
              onChange={changeInputHandler}
              required={true}
              error={errors.email}
            />
            {/* <textarea id="message" name="message" rows={4} cols={92} /> */}
          </div>
          <div className="col-12 contact__right__form__submit">
            <button
              type="submit"
              name="submit"
              id="submit"
              className="button btn btn-primary"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
