import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import FormInput from "../../components/SignUp/FormInput";
import ButtonSubmit from "../../components/SignUp/ButtonSubmit";
import LeftSignUp from "../../components/SignUp/LeftSignUp";
import swal from "sweetalert";
import { USERS_API_URL } from "../../utils/constants";

const SignUpPage = () => {
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

  const navigate = useNavigate()
  const submitHandle = async (event) => {
    event.preventDefault();
    if (data.password !== data.confirmPassword) {
      console.log("error");
      return setErrors({
        email: null,
        confirmPassword: "Password is not matched!",
      });
    }
    const { email, password } = data;
    axios
      .get(USERS_API_URL)
      .then((res) => {
        return !!res.data.find((acc) => acc.email === data.email);
      })
      .then((checkEmail) => {
        if (checkEmail) {
          setErrors({ confirmPassword: null, email: "Email is already existed!" });
        } else {
          axios
            .post(USERS_API_URL, { email, password })
            .then((response) => {
              console.log(response);
            })
            .catch((error) => {
              console.log(error);
            });
          swal("Register successfully!", "", "success");
          navigate("/login")
        }
      });
  };

  return (
    <div className="sign-up">
      <LeftSignUp />
      <div className="sign-up__form">
        <form
          onSubmit={submitHandle}
          method="POST"
          className="sign-up__form__content"
        >
          <h1>Sign Up</h1>
          <br />
          <div className="sign-up__form__content__p">
            <p>Already have an account?</p> &nbsp;
            <Link to="/login">Log in</Link>
          </div>
          <br />
          <br />
          <FormInput
            name="email"
            title="Email address *"
            placeholder="Email"
            value={data.email}
            onChange={changeInputHandler}
            required={true}
            error={errors.email}
          />

          <FormInput
            name="password"
            type={pwdType}
            title="Password *"
            placeholder="Password"
            value={data.password}
            onChange={changeInputHandler}
            required={true}
          />
          <FormInput
            name="confirmPassword"
            type={pwdType}
            title="Confirm Password *"
            placeholder="Confirm Password"
            value={data.confirmPassword}
            onChange={changeInputHandler}
            required={true}
            error={errors.confirmPassword}
          />
          <div className="form-button">
            <ButtonSubmit title="Register" />
          </div>
        </form>
      </div>
    </div>
  );
};
export default SignUpPage;
