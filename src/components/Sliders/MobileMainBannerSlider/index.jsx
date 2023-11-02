/* eslint-disable jsx-a11y/control-has-associated-label */
import Slider from 'react-slick';
import Image from 'next/future/image';
import SliderNextButton from '../../SliderNextButton';
import generateBlur from '../../../utils/generateBlur';

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
    document.querySelector('#carousel-Mob-bkg').src = `${process.env.NEXT_PUBLIC_IMG_URL}poster/${
      document.querySelector(`.carouselinfo option[data-key="${n}"]`).dataset.poster
    }.jpg`;
    document.querySelector('#carousel-Mob-title').innerText = document.querySelector(
      `.carouselinfo option[data-key="${n}"]`,
    ).dataset.title;
    document.querySelector('#carousel-Mob-desc').innerText = document.querySelector(
      `.carouselinfo option[data-key="${n}"]`,
    ).dataset.desc;
    document.querySelector('#carousel-Mob-link').href = `/comics/${
      document.querySelector(`.carouselinfo option[data-key="${n}"]`).dataset.id
    }-${document.querySelector(`.carouselinfo option[data-key="${n}"]`).dataset.slug}`;
  },

  className: 'images-slider p-0 slider p-0 subject',
};

const Block = ({ id, slug, poster }) => (
  <div className="slide">
    <div className="slide-content">
      <a href={`/comics/${id}-${slug}`}>
        <Image
          src={`${process.env.NEXT_PUBLIC_IMG_URL}thumbnail/${poster}.jpg`}
          layout="raw"
          height="400"
          width="279"
          alt={slug}
          placeholder="blur"
          blurDataURL={generateBlur('100vw', '100vh')}
        />
      </a>
    </div>
  </div>
);

const MobileMainBannerSlider = ({ slides }) => (
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

export default MobileMainBannerSlider;
