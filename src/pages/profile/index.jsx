/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import Head from 'next/head';
import Slider from 'react-slick';
import { signIn, useSession } from 'next-auth/react';

const trendingSliderSettings = {
  slidesToShow: 2,
  slidesToScroll: 1,
  centerMode: false,
  variableWidth: true,
  infinite: true,
  autoplay: false,
  autoplaySpeed: 3500,
  arrows: false,
  dots: true,
  pauseOnHover: false,
  responsive: [{
    breakpoint: 1024,
    settings: {
      slidesToShow: 1,
      centerMode: true,

    },
  }, {
    breakpoint: 520,
    settings: {
      slidesToShow: 1,
      centerMode: false, // true,
    },
  }],
};

const InnerSlideBlock = ({
  name, bookmarks, tag, genres, creatorImg, creatorName, slideImages,
}) => {
  const alterSlideImageClassName = (i) => {
    if (i === 0) return '';
    if (i === 3) return 'ms-3 desktop';

    return 'ms-3';
  };

  return (
    <div className="content">
      <div className="d-flex trend-heading">
        {/* Collection Name */}
        <h5 className="font-700 font-20 me-auto pe-sm-0 pe-3">{name}</h5>

        <div className="d-flex ms-auto m-flex-column">
          <div className="d-flex me-sm-4 align-items-center order-12 mt-sm-0 mt-2 ms-4 ms-sm-0">
            <a href="src/pages/profile/index#" className="badge-link">
              <img src="img/badge.svg" className="badge-img" />
              <label className="color-grey font-18 ms-1">{bookmarks}</label>
            </a>
          </div>
          <div className="label-comic order-1">{tag}</div>
        </div>
      </div>

      <div className="color-grey d-flex mt-2 m-flex-column">
        <div className="d-flex me-sauto align-items-center">
          {genres.map((genre, i) => (
            <div key={i}>
              <label className="font-18">{genre}</label>
              {i !== genres.length - 1 && <img src="img/ellipse-purple.png" className="mx-3" />}
            </div>
          ))}
        </div>

        <div className="ms-sm-auto d-flex align-items-center mt-sm-0 mt-2">
          <img src={creatorImg} className="me-2" />
          <label className="font-18">{creatorName}</label>
        </div>
      </div>

      {/* Slides */}
      <div className="d-flex images-sec mt-sm-5 mt-4 pt-sm-0 pt-2">
        {slideImages.slice(0, 4).map((image, i) => (
          <a href="src/pages/profile/index#" key={i}>
            <img src={image} className={alterSlideImageClassName(i)} />
          </a>
        ))}
      </div>

      <div className="d-flex images-sec mt-sm-5 mt-3">
        {slideImages.slice(4).map((image, i) => (
          <a href="src/pages/profile/index#" key={i}>
            <img src={image} className={alterSlideImageClassName(i)} />
          </a>
        ))}
      </div>

      {/* Bottom */}
      <div className="d-flex align-items-center justify-content-center flex-column mt-sm-5 mt-4">
        <button type="button" className="btn theme-btn w-331 h-52">
          View All
        </button>
        <label className="font-16 color-grey mt-2 desktop">8 showing out of 85</label>
      </div>
    </div>
  );
};

const SliderBlock = ({
  name, bookmarks, tag, genres, creatorImg, creatorName, slideImages, type = 'desktop',
}) => {
  const contentProps = {
    name, bookmarks, tag, genres, creatorImg, creatorName, slideImages,
  };

  if (type !== 'desktop') {
    return (
      <div className="slide">
        <div className="slide-content">
          <InnerSlideBlock {...contentProps} />
        </div>
      </div>
    );
  }

  return (
    <div className="col-sm-6 mt-4">
      <InnerSlideBlock {...contentProps} />
    </div>
  );
};

const sliderContent = [
  {
    name: 'I am the Fated Fated Villian',
    bookmarks: 4042,
    tag: 'Comics',
    genres: ['Action', 'Martial Arts', 'Vision'],
    creatorImg: 'img/sapicow.png',
    creatorName: 'Sapicow',
    slideImages: [
      'img/slider/img1.png',
      'img/slider/img2.png',
      'img/slider/img3.png',
      'img/slider/img4.png',
      'img/slider/img5.png',
      'img/slider/img6.png',
      'img/slider/img7.png',
      'img/slider/img8.png',
    ],
  },
  {
    name: 'Reincarnation of the Suicidal Battle God',
    bookmarks: 98754,
    tag: 'Manhwa',
    genres: ['Action', 'Martial Arts', 'Vision'],
    creatorImg: 'img/sapicow.png',
    creatorName: 'Sapicow',
    slideImages: [
      'img/slider/img9.png',
      'img/slider/img10.png',
      'img/slider/img11.png',
      'img/slider/img12.png',
      'img/slider/img13.png',
      'img/slider/img14.png',
      'img/slider/img15.png',
      'img/slider/img16.png',
    ],
  },
  {
    name: 'The Time of the Terminally ill Extra',
    bookmarks: 14753,
    tag: 'Comics',
    genres: ['Action', 'Martial Arts', 'Vision'],
    creatorImg: 'img/sapicow.png',
    creatorName: 'Sapicow',
    slideImages: [
      'img/slider/img17.png',
      'img/slider/img18.png',
      'img/slider/img19.png',
      'img/slider/img20.png',
      'img/slider/img21.png',
      'img/slider/img22.png',
      'img/slider/img23.png',
      'img/slider/img24.png',
    ],
  },
  {
    name: 'I am the Fated Fated Villian',
    bookmarks: 4042,
    tag: 'Comics',
    genres: ['Action', 'Martial Arts', 'Vision'],
    creatorImg: 'img/sapicow.png',
    creatorName: 'Sapicow',
    slideImages: [
      'img/slider/img1.png',
      'img/slider/img2.png',
      'img/slider/img3.png',
      'img/slider/img4.png',
      'img/slider/img5.png',
      'img/slider/img6.png',
      'img/slider/img7.png',
      'img/slider/img8.png',
    ],
  },
];

export default function Profile() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return (
      <div className="profile-pg">
        <Head>
          <title>Asura Scans - Profile</title>
        </Head>

        {/* <img src="img/profile/profile-bg.png" className="p-0 desktop w-100 banner" />
        <img src="img/profile/profile-bg-mb.png" className="p-0 mobile w-100 " /> */}

        <div className="p-0">
          <div className="header">
            <div className="row m-0 p-0 position-relative header-content">

              <div className="row m-0 p-0 position-relative px-sm-0 px-3">
                <div className="container main-container container-style p-0 m-top">
                  <div className="d-flex inner-sec m-flex-column">
                    <div className="me-auto">
                      <img className="pe-sm-2 desktop" style={{ width: '125px', height: '130px' }} />
                      <img className="mobile w-100" style={{ height: '260px' }} />
                    </div>

                    {/* User profile */}
                    <div className="ms-auto d-flex align-items-center">
                      <div className="d-flex justify-content-center flex-column px-4 pb-4 pb-sm-0 m-text-center m-md-top-mb">
                        <h4>Loading...</h4>
                        <p className="font-14 color-grey mt-2">
                          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                          totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                          sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (status === 'authenticated') {
    return (

      <div className="profile-pg">
        <Head>
          <title>Asura Scans - Profile</title>
        </Head>
        <div className="p-0">
          <div className="header">
            <div className="row m-0 p-0 position-relative header-content">

              <div className="row m-0 p-0 position-relative px-sm-0 px-3">
                <div className="container main-container container-style p-0 m-top">
                  <div className="d-flex inner-sec m-flex-column">
                    <div className="me-md-auto d-flex align-items-center">
                      <img style={{ width: '200px', height: 'auto' }} src={session.user.profile_uuid === '' ? '/img/profile/profile-img.png' : `${process.env.NEXT_PUBLIC_IMG_URL}user/${session.user.profile_uuid}.jpg`} className="pe-sm-2 desktop" />
                      <img style={{ maxWidth: '200px', margin: '10px auto' }} src={session.user.profile_uuid === '' ? '/img/profile/profile-img.png' : `${process.env.NEXT_PUBLIC_IMG_URL}user/${session.user.profile_uuid}.jpg`} className="mobile w-100" />
                    </div>

                    {/* User profile */}
                    <div className="ms-auto d-flex align-items-center">
                      <div className="d-flex justify-content-center flex-column px-4 pb-4 pb-sm-0 m-text-center m-md-top-mb">
                        <h4>{session.user.username}</h4>
                        <p className="font-14 color-grey mt-2">
                          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                          totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                          sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                        </p>
                        {/* <div className="d-flex mt-3 m-flex-column m-align-center buttons-sec">
                          <div className="d-flex">
                            <button type="button" className="btn theme-btn-dark">
                              Follow
                            </button>
                            <button type="button" className="btn theme-btn-dark ms-3">
                              Message
                            </button>
                          </div>
                          <div className="d-flex mt-sm-0 mt-2">
                            <button type="button" className="btn theme-btn-dark ms-sm-3">
                              Block
                            </button>
                            <button type="button" className="btn theme-btn-dark ms-3">
                              Report
                            </button>
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="d-none row m-0 p-0 position-relative trending-slider-section">
            <div className="container main-container profile-tabs">
              {/* <!-- Tabs navs --> */}
              <ul className="nav nav-tabs mb-3 justify-content-center mt-4" id="ex1" role="tablist">
                {/* Tab 1 */}
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link active"
                    id="ex1-tab-1"
                    data-bs-toggle="tab"
                    href="src/pages/profile/index#ex1-tabs-1"
                    role="tab"
                    aria-controls="ex1-tabs-1"
                    aria-selected="true"
                  >
                    <h5 className="">Community Collection</h5>
                  </a>
                </li>

                {/* Tab 2 */}
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link"
                    id="ex1-tab-2"
                    data-bs-toggle="tab"
                    href="src/pages/profile/index#ex1-tabs-2"
                    role="tab"
                    aria-controls="ex1-tabs-2"
                    aria-selected="false"
                  >
                    <h5 className="">Latest Comments</h5>
                  </a>
                </li>
              </ul>
              {/* <!-- Tabs navs --> */}

              {/* <!-- Tabs content --> */}
              <div className="tab-content" id="ex1-content">
                {/* Tab 1 */}
                <div className="tab-pane fade show active" id="ex1-tabs-1" role="tabpanel" aria-labelledby="ex1-tab-1">
                  <div className="row m-0 p-0 position-relative trending-slider-sec desktop">
                    {sliderContent.map((item, i) => (
                      <SliderBlock key={i} {...item} />
                    ))}
                  </div>

                  <div className="row m-0 p-0 position-relative mt-sm-5 mt-3 animation-element bounce-up mobile">
                    <Slider {...trendingSliderSettings} className="trending-slider p-0 slider align-items-center subject">
                      {sliderContent.map((item, i) => (
                        <SliderBlock type="mobile" key={i} {...item} />
                      ))}
                    </Slider>
                  </div>
                </div>

                {/* Tab 2 */}
                <div className="tab-pane fade" id="ex1-tabs-2" role="tabpanel" aria-labelledby="ex1-tab-2">
                  <h5 className="text-center color-white">Working on comments section</h5>
                </div>
              </div>
              {/* <!-- Tabs content --> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="flamecenter">
      <Head>
        <title>Asura Scans - Profile</title>
      </Head>
      <style>
        {`
          .flamecenter {
            padding-top: 150px;
            display: flex;
            justify-content: center;
            align-self: center;
            flex-direction: column;
          }

          .flamecenter p {
            text-align: center;
            font-size: 24px;
          }

          .flamecenter button {
            width: 150px;
            margin: 0 auto;
          }
        `}
      </style>
      <p>Not signed in </p>
      <br />
      {/* eslint-disable-next-line react/button-has-type */}
      <button onClick={() => signIn()}>Sign in</button>
    </div>

  );
}
