import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import FormInput from "../../components/SignUp/FormInput";
import ButtonSubmit from "../../components/SignUp/ButtonSubmit";

import swal from "sweetalert";
import { USERS_API_URL } from "../../utils/constants";

const ChangePassword = () => {
    const [data, setData] = useState({
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
    });
    const [errors, setErrors] = useState({
        oldPassword: null,
        confirmPassword: null,
    });
    const [pwdType, setPwdType] = useState("password");

    const changeInputHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };
    const [user, setUser] = useState([]);
    useEffect(() => {
        const userLocalStorage = JSON.parse(localStorage.getItem('user'));
        console.log(userLocalStorage)
        if (userLocalStorage) {
            setUser(userLocalStorage);
        }
    }, []);

    const navigate = useNavigate()
    const submitHandle = async (event) => {
        event.preventDefault();
        if (data.newPassword !== data.confirmPassword) {
            console.log("error");
            return setErrors({
                oldPassword: null,
                confirmPassword: "Password is not matched!",
            });
        }
        axios
            .get(USERS_API_URL +"/"+user.id)
            .then((res) => {
                return res.data;
            })
            .then((acc) => {
                if (acc.password === data.oldPassword) {
                    acc.password = data.newPassword;
                    axios
                        .put(USERS_API_URL+"/"+user.id,  acc )
                        .then((response) => {
                            console.log(response);
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                    
                    swal("Change password successfully!", "", "success");
                    navigate("/");


                } else {
                    setErrors({ confirmPassword: null, oldPassword: "Your password is not right" });
                }
            });
    };

    return (
        <div className="change-password">
            <div className="change-password__form">
                <form
                      onSubmit={submitHandle}
                    method="POST"
                    className="change-password__form__content"
                >
                    <br />
                    <FormInput
                        name="oldPassword"
                        title="Curent Password"
                        placeholder="Enter Curent Password"
                        type={pwdType}
                        value={data.oldPassword}
                        onChange={changeInputHandler}
                        required={true}
                        error={errors.oldPassword}
                    />

                    <FormInput
                        name="newPassword"
                        type={pwdType}
                        title="New Password"
                        placeholder="Enter New Password"
                        value={data.newPassword}
                        onChange={changeInputHandler}
                        required={true}
                    />
                    <FormInput
                        name="confirmPassword"
                        type={pwdType}
                        title="Confirm New Password *"
                        placeholder="Confirm New Password"
                        value={data.confirmPassword}
                        onChange={changeInputHandler}
                        required={true}
                        error={errors.confirmPassword}
                    />
                    <div className="form-button">
                        <ButtonSubmit title="Change Password"/>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default ChangePassword;
