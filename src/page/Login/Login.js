import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import FormInput from "../../components/SignUp/FormInput";
import ButtonSubmit from "../../components/SignUp/ButtonSubmit";
import LeftSignUp from "../../components/SignUp/LeftSignUp";
import axios from "axios";
import swal from "sweetalert";
import { USERS_API_URL } from "../../utils/constants";



const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    account: null,
  });
  const [pwdType, setPwdType] = useState("password");
  const changeInputHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const showPasswordHandler = (e) => {
    setPwdType(pwdType === "text" ? "password" : "text");
  };
  const navigate = useNavigate()
  const submitHandle = async (event) => {
    event.preventDefault();
    axios
      .get(USERS_API_URL)
      .then((res) => {
        return res.data.find((acc) => acc.email === data.email && acc.password === data.password) ;
      })
      .then((acc) => {
        if (acc) {
          localStorage.setItem("user", JSON.stringify({email: acc.email, id: acc.id}));
          swal("Login successfully!", "", "success");
          navigate("/page-user")
        } else {
          setErrors({  account: "Email or password doesn't match" });
          swal("Login error!", "", "error")
        }
      });
  };
  return (
    <div className="sign-up">
      <LeftSignUp />
      <div className="sign-up__form">
        <form className="sign-up__form__content" onSubmit={submitHandle}>
          <h1>Login</h1>
          <br />
          <div className="sign-up__form__content__p">
            <p>Don't have an account yet?</p> &nbsp;
            {/* <a href="#">Sign up for free</a> */}
            <Link to="/sign-up">Sign up for free</Link>
          </div>
          <br />
          <br />
          <FormInput
            name="email"
            title="Email"
            placeholder="Email"
            value={data.email}
            onChange={changeInputHandler}
          />

          <FormInput
            name="password"
            type={pwdType}
            title="Password"
            placeholder="Password"
            value={data.password}
            onChange={changeInputHandler}
            error={errors.account}
          />
          <div className="form-button">
            <ButtonSubmit type="submit" title="Login" />
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
