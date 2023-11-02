/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/control-has-associated-label */

import Head from 'next/head';
import Slider from 'react-slick';
// import Link from 'next/link';
import CommentsSection from '../../components/CommentsSection';

const trendingSliderSettings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  variableWidth: true,
  infinite: true,
  autoplay: false,
  autoplaySpeed: 3500,
  arrows: false,
  dots: true,
  pauseOnHover: false,
  responsive: [{
    breakpoint: 769,
    settings: {
      slidesToShow: 2,
    }
  }, {
    breakpoint: 520,
    settings: {
      slidesToShow: 1,
      centerMode: false, // true
    }
  }],
  className: 'trending-slider p-0 slider align-items-center subject',
};

const comicSliderSettings = {
  slidesToShow: 4,
  slidesToScroll: 1,

  variableWidth: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  dots: false,
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 520,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
  className: 'comic-slider p-0 slider align-items-center',
};

/* posters is always an array of two */
const DesktopSlideBlock = ({ posters }) => (
  <div className="slide py-1">
    <div className="slide-content py-4">
      <div className="content d-flex flex-column justify-content-center align-items-center">
        {posters.map((poster, i) => (
          <div key={i} className="d-flex align-items-center my-3">
            <a href={poster.link}>
              <a>
                <div className="top-icon position-relative">
                  <div className="btn-top">{poster.tag}</div>
                </div>

                <img className="mb-sm-3 mb-2" src={poster.image} />
                <h5 className="font-700 font-20 mt-1 color-white">{poster.text}</h5>
              </a>
            </a>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const desktopSlides = [
  [
    {
      link: '/',
      tag: 'Hot 🔥',
      image: 'img/comics/comic-1.png',
      text: 'Legend of Asura –The Venom Dragon',
    },
    {
      link: '/',
      tag: 'Featured 💥',
      image: 'img/comics/comic-7.png',
      text: 'Heavenly Demon Instructors',
    },
  ],
  [
    {
      link: '/',
      tag: 'Featured 💥',
      image: 'img/comics/comic-2.png',
      text: 'The Max Level Hero has Returned',
    },
    {
      link: '/',
      tag: 'Featured 💥',
      image: 'img/comics/comic-8.png',
      text: 'Worthless Regression',
    },
  ],
  [
    {
      link: '/',
      tag: 'Featured 💥',
      image: 'img/comics/comic-11.png',
      text: 'Return Of The Shattered Constellation',
    },
    {
      link: '/',
      tag: 'Hot 🔥',
      image: 'img/comics/comic-9.png',
      text: 'Rise From The Rubble',
    },
  ],
  [
    {
      link: '/',
      tag: 'Hot 🔥',
      image: 'img/comics/comic-4.png',
      text: 'The World After The End of the Era',
    },
    {
      link: '/',
      tag: 'Hot 🔥',
      image: 'img/comics/comic-10.png',
      text: 'The Return of the Crazy Demon',
    },
  ],
  [
    {
      link: '/',
      tag: 'Featured 💥',
      image: 'img/comics/comic-5.png',
      text: 'Reincarnation of the Suicidal Battle God',
    },
    {
      link: '/',
      tag: 'Featured 💥',
      image: 'img/comics/comic-11.png',
      text: 'The Frenzy Of Evolution',
    },
  ],
  [
    {
      link: '/',
      tag: 'Featured 💥',
      image: 'img/comics/comic-1.png',
      text: 'Maxed Out Leveling In Battle',
    },
    {
      link: '/',
      tag: 'Featured 💥',
      image: 'img/comics/comic-12.png',
      text: 'Super Evolution',
    },
  ],
];

const MobileLinkBlock = ({ i, image }) => {
  const alterClassName = () => {
    if (i === 0) return '';
    if (i === 3) return 'ms-3 desktop';
    return 'ms-3';
  };

  return (
    <a href={image.link}>
      <a>
        <img src={image.image} className={alterClassName()} />
      </a>
    </a>
  );
};

const RecommendationBlock = ({
  title, creator, noComics, images
}) => (
  <div className="content">
    {/* heading */}
    <div className="d-flex trend-heading">
      <div className="me-auto">
        <h5 className="font-700 font-20 pe-sm-0 pe-3">{title}</h5>
        <label className="font-18 color-grey">{`Created by: ${creator} ${noComics} Comics`}</label>
      </div>

      <div className="ms-auto">
        <button type="button" className="btn theme-btn-dark h-40 w-40 p-0">
          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6 10.0244C4.9 10.0244 4 10.9244 4 12.0244C4 13.1244 4.9 14.0244 6 14.0244C7.1 14.0244 8 13.1244 8 12.0244C8 10.9244 7.1 10.0244 6 10.0244ZM18 10.0244C16.9 10.0244 16 10.9244 16 12.0244C16 13.1244 16.9 14.0244 18 14.0244C19.1 14.0244 20 13.1244 20 12.0244C20 10.9244 19.1 10.0244 18 10.0244ZM12 10.0244C10.9 10.0244 10 10.9244 10 12.0244C10 13.1244 10.9 14.0244 12 14.0244C13.1 14.0244 14 13.1244 14 12.0244C14 10.9244 13.1 10.0244 12 10.0244Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </div>

    <div className="d-flex images-sec mt-sm-5 mt-4 pt-sm-0 pt-2">
      {images.slice(0, 4).map((image, i) => (
        <MobileLinkBlock key={i} image={image} i={i} />
      ))}
    </div>

    <div className="d-flex images-sec mt-sm-5 mt-3">
      {images.slice(4).map((image, i) => (
        <MobileLinkBlock key={i} image={image} i={i} />
      ))}
    </div>

    <div className="d-flex align-items-center justify-content-center flex-column mt-sm-5 mt-4">
      <button type="button" className="btn theme-btn w-263 h-52">
        Start Reading
      </button>
    </div>
  </div>
);

/* images always an array of 8 */
const MobileRecommendations = (props) => (
  <div className="slide">
    <div className="slide-content">
      <RecommendationBlock {...props} />
    </div>
  </div>
);

const DesktopRecommendations = (props) => (
  <div className="col-sm-4 mt-4">
    <RecommendationBlock {...props} />
  </div>
);

const recommendations = [
  {
    title: 'I am the Fated Fated Villian',
    creator: 'Rissprino',
    noComics: '26',
    images: [
      {
        link: '/',
        image: 'img/slider/img1.png',
      },
      {
        link: '/',
        image: 'img/slider/img2.png',
      },
      {
        link: '/',
        image: 'img/slider/img3.png',
      },
      {
        link: '/',
        image: 'img/slider/img4.png',
      },
      {
        link: '/',
        image: 'img/slider/img5.png',
      },
      {
        link: '/',
        image: 'img/slider/img6.png',
      },
      {
        link: '/',
        image: 'img/slider/img7.png',
      },
      {
        link: '/',
        image: 'img/slider/img8.png',
      },
    ],
  },
  {
    title: 'Reincarnation of the Suicidal Battle God',
    creator: 'Rissprino',
    noComics: '26',
    images: [
      {
        link: '/',
        image: 'img/slider/img9.png',
      },
      {
        link: '/',
        image: 'img/slider/img10.png',
      },
      {
        link: '/',
        image: 'img/slider/img11.png',
      },
      {
        link: '/',
        image: 'img/slider/img12.png',
      },
      {
        link: '/',
        image: 'img/slider/img13.png',
      },
      {
        link: '/',
        image: 'img/slider/img14.png',
      },
      {
        link: '/',
        image: 'img/slider/img15.png',
      },
      {
        link: '/',
        image: 'img/slider/img16.png',
      },
    ],
  },
  {
    title: 'The Time of the Terminally ill Extra',
    creator: 'Rissprino',
    noComics: '26',
    images: [
      {
        link: '/',
        image: 'img/slider/img17.png',
      },
      {
        link: '/',
        image: 'img/slider/img18.png',
      },
      {
        link: '/',
        image: 'img/slider/img19.png',
      },
      {
        link: '/',
        image: 'img/slider/img20.png',
      },
      {
        link: '/',
        image: 'img/slider/img21.png',
      },
      {
        link: '/',
        image: 'img/slider/img22.png',
      },
      {
        link: '/',
        image: 'img/slider/img23.png',
      },
      {
        link: '/',
        image: 'img/slider/img24.png',
      },
    ],
  },
];

const comicCollection = () => (
  <div className="comic-col-pg">
    <Head>
      <title>Asura Scans - Comic Collection</title>
    </Head>

    <div className="p-0">
      <div className="header">
        <div className="row m-0 p-0 position-relative">
          <img src={`${process.env.NEXT_PUBLIC_IMG_URL}img/comic-collection/comic-col-bg.png`} className="p-0 desktop position-absolute" />
        </div>
      </div>

      {/* Info + Desktop Slide */}
      <div className="row m-0 p-0 position-relative comic-collection-section section-margin">
        <div className="container main-container p-0">
          <div className="row m-0 p-0 position-relative mt-5 py-sm-3">
            {/* Info */}
            <div className="col-sm-4 d-flex ps-sm-5">
              <div className="content d-flex justify-content-center flex-column m-text-center items-center">
                <div className="d-flex align-items-center m-flex-column">
                  <div><img src="img/comic-collection/comic-author.png" className="author" /></div>
                  <h2 className="ms-sm-4 mt-sm-0 mt-2">
                    Kenzo
                    <br />
                    {' '}
                    Nakamura
                  </h2>
                </div>
                <label className="color-grey font-18 mt-sm-4 mt-2">Created by: Rissprino 26 Comics</label>
                <p className="color-grey mt-sm-3 mt-2 px-sm-0 px-4">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  <br />
                  {' '}
                  accusantium doloremque laudantium, totam rem aperiam,
                  <br />
                  {' '}
                  eaque ipsa quae ab illo inventore veritatis et quasi architecto
                  <br />
                  {' '}
                  beatae vitae dicta sunt explicabo.
                </p>
                <div className="d-flex mt-sm-4 mt-2 mb-sm-2">
                  <button type="button" className="btn theme-btn h-40 w-147 bg-dullPurple font-14">Start Reading</button>
                  <button type="button" className="btn theme-btn-dark mx-3 h-40 w-147 font-14 desktop">
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.5 3.02441H7.5C6.4 3.02441 5.51 3.92441 5.51 5.02441L5.5 21.0244L12.5 18.0244L19.5 21.0244V5.02441C19.5 3.92441 18.6 3.02441 17.5 3.02441ZM17.5 18.0244L12.5 15.8444L7.5 18.0244V5.02441H17.5V18.0244Z" fill="white" />
                    </svg>
                    <span className="ms-2">Bookmark</span>

                  </button>
                  <button type="button" className="btn theme-btn-dark mx-3 h-40 w-40 font-14 mobile p-0">
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.5 3.02441H7.5C6.4 3.02441 5.51 3.92441 5.51 5.02441L5.5 21.0244L12.5 18.0244L19.5 21.0244V5.02441C19.5 3.92441 18.6 3.02441 17.5 3.02441ZM17.5 18.0244L12.5 15.8444L7.5 18.0244V5.02441H17.5V18.0244Z" fill="white" />
                    </svg>
                  </button>
                  <button type="button" className="btn theme-btn-dark h-40 w-40 p-0">
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 10.0244C4.9 10.0244 4 10.9244 4 12.0244C4 13.1244 4.9 14.0244 6 14.0244C7.1 14.0244 8 13.1244 8 12.0244C8 10.9244 7.1 10.0244 6 10.0244ZM18 10.0244C16.9 10.0244 16 10.9244 16 12.0244C16 13.1244 16.9 14.0244 18 14.0244C19.1 14.0244 20 13.1244 20 12.0244C20 10.9244 19.1 10.0244 18 10.0244ZM12 10.0244C10.9 10.0244 10 10.9244 10 12.0244C10 13.1244 10.9 14.0244 12 14.0244C13.1 14.0244 14 13.1244 14 12.0244C14 10.9244 13.1 10.0244 12 10.0244Z" fill="white" />
                    </svg>
                  </button>
                </div>
                <svg width="130" height="26" className="mt-4" viewBox="0 0 130 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 0L17.6611 6.5845L25.3637 8.98278L20.5419 15.4505L20.6412 23.5172L13 20.93L5.35879 23.5172L5.45812 15.4505L0.636266 8.98278L8.33886 6.5845L13 0Z" fill="#FFC403" />
                  <path d="M39 0L43.6611 6.5845L51.3637 8.98278L46.5419 15.4505L46.6412 23.5172L39 20.93L31.3588 23.5172L31.4581 15.4505L26.6363 8.98278L34.3389 6.5845L39 0Z" fill="#FFC403" />
                  <path d="M65 0L69.6611 6.5845L77.3637 8.98278L72.5419 15.4505L72.6412 23.5172L65 20.93L57.3588 23.5172L57.4581 15.4505L52.6363 8.98278L60.3389 6.5845L65 0Z" fill="#FFC403" />
                  <path d="M91 0L95.6611 6.5845L103.364 8.98278L98.5419 15.4505L98.6412 23.5172L91 20.93L83.3588 23.5172L83.4581 15.4505L78.6363 8.98278L86.3389 6.5845L91 0Z" fill="#FFC403" />
                  <path d="M117 0L121.661 6.5845L129.364 8.98278L124.542 15.4505L124.641 23.5172L117 20.93L109.359 23.5172L109.458 15.4505L104.636 8.98278L112.339 6.5845L117 0Z" fill="#FFC403" />
                </svg>

              </div>
            </div>

            {/* Slide */}
            <div className="col-sm-8 p-0">
              <div className="row m-0 p-0 position-relative desktop latestUpdates-section">
                <Slider {...comicSliderSettings}>
                  {desktopSlides.map((slide, i) => (
                    <DesktopSlideBlock key={i} posters={slide} />
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile "Slide" */}
      <div className="row m-0 p-0 position-relative recommendation-section latestUpdates-section section-margin mobile">
        <div className="container main-container">
          <div className="row m-0 p-0 position-relative">
            <div className="col-sm-2 col-6 mt-sm-5 mt-4 animation-element bounce-down">
              <div className="content subject">
                <a href="src/post-release-pages/comic-collection/index#">
                  <div className="top-icon position-relative">
                    <div className="btn-top">Hot 🔥</div>
                  </div>
                  <img className="mb-sm-3 mb-2" src="img/comics/comic-1.png" />
                  <h5 className="font-700 font-20 mt-1 color-white">Legend of Asura –The Venom Dragon</h5>
                </a>
              </div>
            </div>
            <div className="col-sm-2 col-6 mt-sm-5 mt-4 animation-element bounce-up">
              <div className="content subject">
                <a href="src/post-release-pages/comic-collection/index#">
                  <div className="top-icon position-relative">
                    <div className="btn-top">Featured 💥</div>
                  </div>
                  <img className="mb-sm-3 mb-2" src="img/comics/comic-2.png" />
                  <h5 className="font-700 font-20 mt-1 color-white">The Max Level Hero has Returned</h5>
                </a>
              </div>
            </div>
            <div className="col-sm-2 col-6 mt-sm-5 mt-4 animation-element bounce-down">
              <div className="content subject">
                <a href="src/post-release-pages/comic-collection/index#">
                  <div className="top-icon position-relative">
                    <div className="btn-top">Featured 💥</div>
                  </div>
                  <img className="mb-sm-3 mb-2" src="img/comics/comic-11.png" />
                  <h5 className="font-700 font-20 mt-1 color-white">Return Of The Shattered Constellation</h5>
                </a>
              </div>
            </div>
            <div className="col-sm-2 col-6 mt-sm-5 mt-4 animation-element bounce-up">
              <div className="content subject">
                <a href="src/post-release-pages/comic-collection/index#">
                  <div className="top-icon position-relative">
                    <div className="btn-top">Hot 🔥</div>
                  </div>
                  <img className="mb-sm-3 mb-2" src="img/comics/comic-4.png" />
                  <h5 className="font-700 font-20 mt-1 color-white">The World After The End of the Era</h5>
                </a>
              </div>
            </div>
            <div className="col-sm-2 col-6 mt-sm-5 mt-4 animation-element bounce-down">
              <div className="content subject">
                <a href="src/post-release-pages/comic-collection/index#">
                  <div className="top-icon position-relative">
                    <div className="btn-top">Featured 💥</div>
                  </div>
                  <img className="mb-sm-3 mb-2" src="img/comics/comic-5.png" />
                  <h5 className="font-700 font-20 mt-1 color-white">Reincarnation of the Suicidal Battle God</h5>
                </a>
              </div>
            </div>
            <div className="col-sm-2 col-6 mt-sm-5 mt-4 animation-element bounce-up">
              <div className="content subject">
                <a href="src/post-release-pages/comic-collection/index#">
                  <div className="top-icon position-relative">
                    <div className="btn-top">Featured 💥</div>
                  </div>
                  <img className="mb-sm-3 mb-2" src="img/comics/comic-6.png" />
                  <h5 className="font-700 font-20 mt-1 color-white">Maxed Out Leveling In Battle</h5>
                </a>
              </div>
            </div>
            <div className="col-sm-2 col-6 mt-sm-5 mt-4 animation-element bounce-down">
              <div className="content subject">
                <a href="src/post-release-pages/comic-collection/index#">
                  <div className="top-icon position-relative">
                    <div className="btn-top">Hot 🔥</div>
                  </div>
                  <img className="mb-sm-3 mb-2" src="img/comics/comic-1.png" />
                  <h5 className="font-700 font-20 mt-1 color-white">Legend of Asura –The Venom Dragon</h5>
                </a>
              </div>
            </div>
            <div className="col-sm-2 col-6 mt-sm-5 mt-4 animation-element bounce-up">
              <div className="content subject">
                <a href="src/post-release-pages/comic-collection/index#">
                  <div className="top-icon position-relative">
                    <div className="btn-top">Featured 💥</div>
                  </div>
                  <img className="mb-sm-3 mb-2" src="img/comics/comic-2.png" />
                  <h5 className="font-700 font-20 mt-1 color-white">The Max Level Hero has Returned</h5>
                </a>
              </div>
            </div>
            <div className="col-sm-2 col-6 mt-sm-5 mt-4 animation-element bounce-down">
              <div className="content subject">
                <a href="src/post-release-pages/comic-collection/index#">
                  <div className="top-icon position-relative">
                    <div className="btn-top">Featured 💥</div>
                  </div>
                  <img className="mb-sm-3 mb-2" src="img/comics/comic-5.png" />
                  <h5 className="font-700 font-20 mt-1 color-white">Reincarnation of the Suicidal Battle God</h5>
                </a>
              </div>
            </div>
            <div className="col-sm-2 col-6 mt-sm-5 mt-4 animation-element bounce-up">
              <div className="content subject">
                <a href="src/post-release-pages/comic-collection/index#">
                  <div className="top-icon position-relative">
                    <div className="btn-top">Featured 💥</div>
                  </div>
                  <img className="mb-sm-3 mb-2" src="img/comics/comic-6.png" />
                  <h5 className="font-700 font-20 mt-1 color-white">Maxed Out Leveling In Battle</h5>
                </a>
              </div>
            </div>
          </div>

          <div className="row m-0 p-0 position-relative my-sm-5 my-4 animation-element bounce-down">
            <div className="d-flex align-items-center justify-content-center flex-column my-sm-4 subject">
              <button type="button" className="btn theme-btn w-331 h-52">Load more</button>
              <label className="font-16 color-grey mt-2">18 showing out of 246</label>
            </div>
          </div>
        </div>
      </div>

      {/* Comments */}
      <CommentsSection />

      {/* Recommended Collections */}
      <div className="row m-0 p-0 position-relative recommended-collection section-margin">
        <div className="container main-container p-0 px-lg-5">
          <h3 className="desktop text-t-center">Recommended Collections</h3>
          <h3 className="mobile px-3">
            Recommended
            <br />
            {' '}
            Collections
          </h3>

          {/* Desktop */}
          <div className="row m-0 p-0 position-relative my-4 animation-element bounce-up desktop trending-slider-sec comic-collection">
            {recommendations.map((slide, i) => (
              <DesktopRecommendations key={i} {...slide} />
            ))}
          </div>

          {/* Mobile */}
          <div className="row m-0 p-0 position-relative my-4 animation-element bounce-up comic-trending mobile">
            <Slider {...trendingSliderSettings}>
              {recommendations.map((slide, i) => (
                <MobileRecommendations key={i} {...slide} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default comicCollection;
