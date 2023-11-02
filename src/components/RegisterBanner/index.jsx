/* eslint-disable @next/next/no-img-element */

import Image from 'next/future/image';

const content = {
  title: `Register to
see more favorites`,
  content: 'Some text really should go here huh',
};

const RegisterBanner = () => (
  <div className="row m-0 p-0 position-relative register-section " style={{ overflow: 'hidden' }}>
    <div className="row" />
    <div className="col-2 d-xxl-block d-none " />
    <div className="col container main-container p-0">
      <div className="row m-0 p-0 position-relative">
        <div className="col-sm-8 p-0">
          <div className="img-sec subject">
            <Image
              src={`${process.env.NEXT_PUBLIC_IMG_URL}static/register-banner.png`}
              className="desktop"
              layout="raw"
              height="600"
              width="1000"
              priority
              unoptimized
              alt="register now"
            />
            <Image
              src={`${process.env.NEXT_PUBLIC_IMG_URL}static/register-banner-mobile.png`}
              className="mobile"
              layout="raw"
              height="500"
              width="400"
              priority
              unoptimized
              alt="register now"
            />
          </div>
        </div>
        <div className="col-sm-4 d-flex align-items-center justify-content-end p-0 animation-element bounce-up">
          <div className="content items-center m-flex-column m-text-center subject">
            <h3 style={{ whiteSpace: 'pre' }}>{content.title}</h3>
            <p className="color-grey px-sm-0 px-4" style={{ whiteSpace: 'pre' }}>
              {content.content}
            </p>
            <button
              type="button"
              className="btn theme-btn w-186 my-3 h-52"
              data-bs-toggle="modal"
              id="registerModalBtn"
              data-bs-target="#registerModal"
            >
              Register now
            </button>
          </div>
        </div>
      </div>

    </div>
    <div className="col-2 d-xxl-block d-none " />

  </div>
);

export default RegisterBanner;
