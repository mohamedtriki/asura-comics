/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import Slider from 'react-slick';

const trendingSliderSettings = {
  slidesToShow: 1, // 2
  slidesToScroll: 1,
  centerMode: false,
  variableWidth: true,
  infinite: true,
  autoplay: false,
  autoplaySpeed: 3500,
  arrows: false,
  dots: true,
  pauseOnHover: false,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        centerMode: true,
      },
    },
    {
      breakpoint: 520,
      settings: {
        slidesToShow: 1,
        centerMode: false, // true
      },
    },
  ],
  className: 'trending-slider p-0 slider align-items-center subject ps-lg-5',
};

const Block = ({
  name, bookmarks, tag, genres, creatorImg, creatorName, slideImages
}) => {
  const alterSlideImageClassName = (i) => {
    if (i === 0) return '';
    if (i === 3) return 'ms-3 desktop';

    return 'ms-3';
  };

  return (
    <div className="slide">
      <div className="slide-content">
        <div className="content">
          <div className="d-flex trend-heading">
            {/* Collection Name */}
            <h5 className="font-700 font-20 me-auto pe-sm-0 pe-3">{name}</h5>

            <div className="d-flex ms-auto m-flex-column">
              <div className="d-flex me-sm-4 align-items-center order-12 mt-sm-0 mt-2 ms-4 ms-sm-0">
                <a href="#" className="badge-link">
                  <img src={`${process.env.NEXT_PUBLIC_IMG_URL}img/badge.svg`} className="badge-img" />
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
                  {i !== genres.length - 1 && <img src={`${process.env.NEXT_PUBLIC_IMG_URL}img/ellipse-purple.png`} className="mx-3" />}
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
              <a href={image.link} key={i}>
                <a>
                  <img src={image.image} className={alterSlideImageClassName(i)} />
                </a>
              </a>
            ))}
          </div>

          <div className="d-flex images-sec mt-sm-5 mt-3">
            {slideImages.slice(4).map((image, i) => (
              <a href={image.link} key={i}>
                <a>
                  <img src={image.image} className={alterSlideImageClassName(i)} />
                </a>
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
      </div>
    </div>
  );
};

const content = [
  {
    name: 'I am the Fated Fated Villian',
    bookmarks: 4042,
    tag: 'Comics',
    genres: ['Action', 'Martial Arts', 'Vision'],
    creatorImg: '/img/sapicow.png',
    creatorName: 'Sapicow',
    slideImages: [
      {
        image: '/img/slider/img1.png',
        link: '/comics'
      },
      {
        image: '/img/slider/img2.png',
        link: '/comics'
      },
      {
        image: '/img/slider/img3.png',
        link: '/comics'
      },
      {
        image: '/img/slider/img4.png',
        link: '/comics'
      },
      {
        image: '/img/slider/img5.png',
        link: '/comics'
      },
      {
        image: '/img/slider/img6.png',
        link: '/comics'
      },
      {
        image: '/img/slider/img7.png',
        link: '/comics'
      },
      {
        image: '/img/slider/img8.png',
        link: '/comics'
      },
    ]
  },
  {
    name: 'Reincarnation of the Suicidal Battle God',
    bookmarks: 98754,
    tag: 'Manhwa',
    genres: ['Action', 'Martial Arts', 'Vision'],
    creatorImg: '/img/sapicow.png',
    creatorName: 'Sapicow',
    slideImages: [
      {
        image: '/img/slider/img9.png',
        link: '/comics'
      },
      {
        image: '/img/slider/img10.png',
        link: '/comics'
      },
      {
        image: '/img/slider/img11.png',
        link: '/comics'
      },
      {
        image: '/img/slider/img12.png',
        link: '/comics'
      },
      {
        image: '/img/slider/img13.png',
        link: '/comics'
      },
      {
        image: '/img/slider/img14.png',
        link: '/comics'
      },
      {
        image: '/img/slider/img15.png',
        link: '/comics'
      },
      {
        image: '/img/slider/img16.png',
        link: '/comics'
      },
    ]
  },
  {
    name: 'The Time of the Terminally ill Extra',
    bookmarks: 14753,
    tag: 'Comics',
    genres: ['Action', 'Martial Arts', 'Vision'],
    creatorImg: '/img/sapicow.png',
    creatorName: 'Sapicow',
    slideImages: [
      {
        image: '/img/slider/img17.png',
        link: '/comics'
      },
      {
        image: '/img/slider/img18.png',
        link: '/comics'
      },
      {
        image: '/img/slider/img19.png',
        link: '/comics'
      },
      {
        image: '/img/slider/img20.png',
        link: '/comics'
      },
      {
        image: '/img/slider/img21.png',
        link: '/comics'
      },
      {
        image: '/img/slider/img22.png',
        link: '/comics'
      },
      {
        image: '/img/slider/img23.png',
        link: '/comics'
      },
      {
        image: '/img/slider/img24.png',
        link: '/comics'
      },
    ]
  },
];

const TrendingSeriesSlider = () => (
  <Slider {...trendingSliderSettings}>
    {content.map((item, i) => (
      <Block key={i} {...item} />
    ))}
  </Slider>
);

export default TrendingSeriesSlider;
