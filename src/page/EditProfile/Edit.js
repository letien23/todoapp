import React from 'react'

export default function editsp() {
  return (
    <div>
      <div className="tabs__pane -tab-item-1 is-active">
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
                    class="feather feather-activity"
                  >
                    <path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path>
                    <line x1="18" y1="9" x2="12" y2="15"></line>
                    <line x1="12" y1="9" x2="18" y2="15"></line>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-top-light pt-30 mt-30">
          <form action="#" className="contact-form row y-gap-30">
            <div className="col-md-6">
              <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                First Name
              </label>
              <input type="text" placeholder="First Name" />
            </div>
            <div className="col-md-6">
              <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                Last Name
              </label>
              <input type="text" placeholder="Last Name" />
            </div>
            <div className="col-md-6">
              <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                Phone
              </label>
              <input type="text" placeholder="Phone" />
            </div>
            <div className="col-md-6">
              <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                Birthday
              </label>
              <input type="text" placeholder="Birthday" />
            </div>
            <div className="col-md-6">
              <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                Address Line 1
              </label>
              <input type="text" placeholder="Address Line 1" />
            </div>
            <div className="col-md-6">
              <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                Address Line 2
              </label>
              <input type="text" placeholder="Address Line 2" />
            </div>
            <div className="col-md-6">
              <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                State
              </label>
              <input type="text" placeholder="State" />
            </div>
            <div className="col-md-6">
              <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                Country
              </label>
              <input type="text" placeholder="Country" />
            </div>
            <div className="col-12">
              <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                Personal info
              </label>
              <textarea placeholder="Text..." rows={7} defaultValue={""} />
            </div>
            <div className="col-12">
              <button className="button -md -purple-1 text-white">
                Update Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
