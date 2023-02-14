import React from "react";

export default function LeftContact() {
  return (
    <div className="contact__left">
      <div className="contact__left__title">
        <h3>Keep In Touch With Us.</h3>
        <p>
          Neque convallis a cras semper auctor. Libero id faucibus nisl
          tincidunt egetnvallis.
        </p>
      </div>
      <div className="contact__left__content">
        <div className="d-flex contact__left__content__block">
          <div className="contact__left__content__block__img">
            <img src="/img/Contact/1.svg" alt="icon" />
          </div>
          <div className="contact__left__content__block__text">
            328 Queensberry Street, North <br /> Melbourne VIC 3051, Australia.
          </div>
        </div>
        <div className="d-flex contact__left__content__block">
          <div className="contact__left__content__block__img">
            <img src="/img/Contact/2.svg" alt="icon" />
          </div>
          <div className="contact__left__content__block__text">
            +(1) 123 456 7890
          </div>
        </div>
        <div className="d-flex contact__left__content__block">
          <div className="contact__left__content__block__img">
            <img src="/img/Contact/3.svg" alt="icon" />
          </div>
          <div className="contact__left__content__block__text">
            hi@educrat.com
          </div>
        </div>
      </div>
    </div>
  );
}
