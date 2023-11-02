/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/control-has-associated-label */

import Slider from 'react-slick';
import Image from 'next/future/image';
import SliderNextButton from '../../../SliderNextButton';
import generateBlur from '../../../../utils/generateBlur';

const imageSliderSettings = {
  slidesToShow: 3, // 4
  slidesToScroll: 1,
  variableWidth: true,
  centerMode: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 5000, // 1000
  dots: false,
  pauseOnHover: true,
  arrows: true,
  nextArrow: <SliderNextButton />,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 520,
      settings: {
        slidesToShow: 1,
      },
    },
  ],

  beforeChange: (o, n) => {
    document.querySelector('#carouselbkg').src = `${process.env.NEXT_PUBLIC_IMG_URL}poster/${
      document.querySelector(`.carouselinfo option[data-key="${n}"]`).dataset.poster
    }.jpg`;
    document.querySelector('#carouseltitle').innerText = document.querySelector(
      `.carouselinfo option[data-key="${n}"]`,
    ).dataset.title;
    document.querySelector('#carouseldesc').innerText = document.querySelector(
      `.carouselinfo option[data-key="${n}"]`,
    ).dataset.desc;
    document.querySelector('#carousellink').href = `/comics/${
      document.querySelector(`.carouselinfo option[data-key="${n}"]`).dataset.id
    }-${document.querySelector(`.carouselinfo option[data-key="${n}"]`).dataset.slug}`;
  },

  className: 'images-slider p-0 slider align-items-center p-0 subject',
};

const Block = ({ id, slug, poster }) => (
  <div className="slide">
    <div className="slide-content">
      <a href={`/comics/${id}-${slug}`}>
        <Image
          src={`${process.env.NEXT_PUBLIC_IMG_URL}thumbnail/${poster}.jpg`}
          layout="raw"
          height="458"
          width="320"
          alt={slug}
          placeholder="blur"
          blurDataURL={generateBlur('100vw', '100vh')}
        />
      </a>
    </div>
  </div>
);

const MainBannerSlider = ({ slides }) => (
  <>
    <Slider {...imageSliderSettings}>
      {slides.map((slide) => (
        <Block key={slide.id} {...slide} />
      ))}
    </Slider>
    <data style={{ display: 'none' }} className="carouselinfo">
      {slides.map((slide, i) => (
        <option
          key={slide.id}
          data-key={i}
          data-poster={slide.poster}
          data-title={slide.title}
          data-desc={slide.description}
          data-slug={slide.slug}
          data-id={slide.id}
        />
      ))}
    </data>
  </>
);

export default MainBannerSlider;
