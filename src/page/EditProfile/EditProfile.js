// import React from 'react'

// export default ({changeToFalse}) => {
//   return (
//     <div>
//       <input value="First Name" />
//       <input value="Last Name" />
//       <input value="Phoned" />
//       <input value="Personal Info" />
//       <button> Submit</button> 
//     </div>
//   );
// }
import React, { useState, useEffect } from "react";
import Input from "./Input";
import axios from "axios";
import "./styles.css";

const INITIAL_STATE = {
  name: "",
  phone: "",
  address: "",
  DOB:"",
  biography:""
};
export default function App() {
  const [users, setUsers] = useState([]);//cái state dùng để lưu user ở LocalStorage
  const [user, setUser] = useState(INITIAL_STATE);

  useEffect(() => {  // Dùng để gán dữ liệu thằng user ở LocalStorage cho thằng state users
    const users = JSON.parse(localStorage.getItem("user"));
    console.log(users);
    if (users) {
      setUsers(users);
    }
  }, []);
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const user = await axios.get(
  //         `https://61bc10bdd8542f001782451c.mockapi.io/users/${2}`
  //       );
  //       setUser(user.data.info);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   })();
  // }, []);

  const handleInput = (e) => {
    console.log(e.target.name, " : ", e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Data for update : ", user);
      const response = await axios.put(
        `https://61bc10bdd8542f001782451c.mockapi.io/users/${users.id}`,
        user
      );
      console.log(`res`, response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="EditProfile">
      <form onSubmit={handleSubmit}>
        {/* <img src=""
        />
        <br /> */}
        <div className="row y-gap-20 x-gap-20 items-center">
          <div className="col-auto">
            <img
              className="imgae"
              src="/img/dashboard/edit/1.png"
              alt="button"
            />
          </div>
          <div className="col-auto">
            <div className="text-16 fw-500 text-dark-1">Your avatar</div>
            <div className="text-14 lh-1 mt-10">
              PNG or JPG no bigger than 800px wide and tall.
            </div>
            <div className="d-flex x-gap-10 y-gap-10 flex-wrap pt-15">
              <div>
                <div className="d-flex justify-center items-center size-40 rounded-8 bg-light-3">
                  <i class="fa-solid fa-cloud-arrow-up"></i>
                </div>
              </div>
              <div>
                <div className="d-flex justify-center items-center size-40 rounded-8 bg-light-3">
                  <div className="icon-bin text-16" />
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <Input
          name="name"
          type="text"
          value={user.name}
          placeholder={"Your names"}
          handleInput={handleInput}
        />
        <br />
        <Input
          name="phone"
          type="number"
          value={user.phone}
          placeholder={"Your phone"}
          handleInput={handleInput}
        />
        <br />
        <Input
          name="DOB"
          type="date"
          value={user.DOB}
          placeholder={"Birthday"}
          handleInput={handleInput}
        />
        <br />
        <Input
          name="address"
          type="text"
          value={user.address}
          placeholder={"Address"}
          handleInput={handleInput}
        />
        <br />
        <Input
          name="biography"
          type="text"
          value={user.biography}
          placeholder={"PesonalInfo"}
          handleInput={handleInput}
        />
        <br />
        <button type="submit"> Update</button>
      </form>
    </div>
  );
}