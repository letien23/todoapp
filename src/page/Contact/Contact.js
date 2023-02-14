import React from "react";
import LeftContact from "../../components/Contact/LeftContact";
import RightContact from "../../components/Contact/RightContact";

export default function Contact() {
  return (
    <div>
      <div className="contact__content">
        <LeftContact />
        <RightContact />
      </div>
    </div>
  );
}
