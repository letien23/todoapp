import React from "react";

export default function Banner() {
  return (
    <div>
      <section className="banner">
        <div className="banner__container">
          <div className="banner__container__row">
            <div className="banner__container__row__column">
              <div className="banner__container__row__column__image">
                <img src="/img/Banner/1.png " alt="image" />
              </div>
            </div>
            <div className="banner__container__row__column">
              <div className="banner__container__row__column__content">
                <h2 className="banner__container__row__column__content__title">
                  Learn From
                  <br /> <span className="color">Anywhere</span>
                </h2>
                <p className="banner__container__row__column__content__text">
                  Take classes on the go with the educrat app. Stream or
                  download to watch on the plane, the subway, or wherever you
                  learn best.
                </p>
                <div className="banner__container__row__column__content__buttons">
                  <a href="#">
                    <img src="/img/Banner/buttons/1.svg" alt="button" />
                  </a>
                  <a href="#">
                    <img src="/img/Banner/buttons/2.svg" alt="button" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
