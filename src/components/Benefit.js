import React from 'react'

export default function Benefit() {
  return (
    <div>
      <section className="benefit">
        <div className="benefit__container">
          <div className="benefit__container__row">
            <div className="benefit__container__row__left">
              <div className="benefit__container__row__left__content">
                <h2 className="benefit__container__row__left__content__title">
                  <span>Learn</span> new skills when and where you like.
                </h2>
                <p className="benefit__container__row__left__content__text">
                  Use the list below to bring attention to your product’s key
                  <br /> differentiator.
                </p>
                <div className="benefit__container__row__left__content__bottom">
                  <div className="benefit__container__row__left__content__bottom__center">
                    <div className="benefit__container__row__left__content__bottom__center__icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="icon"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div className="benefit__container__row__left__content__bottom__center__small">
                      Hand-picked authors
                    </div>
                  </div>
                  <div className="benefit__container__row__left__content__bottom__center">
                    <div className="benefit__container__row__left__content__bottom__center__icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-check icon"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div className="benefit__container__row__left__content__bottom__center__small">
                      Easy to follow curriculum
                    </div>
                  </div>
                  <div className="benefit__container__row__left__content__bottom__center">
                    <div className="benefit__container__row__left__content__bottom__center__icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-check icon"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div className="benefit__container__row__left__content__bottom__center__small">
                      Free courses
                    </div>
                  </div>
                  <div className="benefit__container__row__left__content__bottom__center">
                    <div className="benefit__container__row__left__content__bottom__center__icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-check icon"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div className="benefit__container__row__left__content__bottom__center__small">
                      Money-back guarantee
                    </div>
                  </div>
                </div>
                
                <div className='submit'>
                  <button type="submit">Join Free</button>
                </div>
              </div>
            </div>
            <div className="benefit__container__row__right">
              <div className="about-image">
                <img src="/img/Benefit/1.png" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
