import React from "react";

import ListTask from "./User/ListTask";
import UserHeader from "./User/UserHeader"

export default function User() {
    return (
      <>
          <UserHeader/>
          <ListTask/>
      </>
    );
  }