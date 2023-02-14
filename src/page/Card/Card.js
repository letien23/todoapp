import React from "react";
import axios from "axios";
import EditTask from "../AddTask/EditTask";

import { useState } from "react";



export default function Card({ data }) {
  const deleteHandle = async (event) => {
    event.preventDefault();
    axios
      .delete("https://61ce733e7067f600179c5ea7.mockapi.io/mn/tasks/" + data.id)
      .then(function (response) {
        console.log(response);
        window.location.reload();
      })
  }
  const [status, setStatus] = useState([]);
  const checkHandle = async (event) => {
    event.preventDefault();
    axios
      .put("https://61ce733e7067f600179c5ea7.mockapi.io/mn/tasks/" + data.id, )
      .then(function (response) {
        console.log(response);
        window.location.reload();
      })
  }
  return (
    <div className="card ui-widget-content">
      <div className="card__details">
        {/* <input placeholder={"Title"}>{title}</input>
        <input placeholder={"Content"}>{details}</input> */}
        <div className="card__details__content">
          <button className="card__details__content__check">
            <i className={data.status === true ? "fa-solid fa-circle-check icon-true":"fa-solid fa-circle-check icon-false"}></i>
          </button>
          {data.content}{" "}
        </div>

        <div className="delete">
          <button className="delete__button" onClick={deleteHandle}>
            <i className="fa-solid fa-trash card__details__dots"></i>
            {/* <i className="fa-solid fa-ellipsis card__details__dots"></i> */}
          </button>
        </div>
      </div>
      {/* <input placeholder={"Text"}>{children}</input> */}
      <div className="card__foot">
        {/* <button>NL</button> */}
        <h6>{new Date(data.due_date).toDateString()}</h6>
        <EditTask editTask={data} />
      </div>
    </div>
  );
}


