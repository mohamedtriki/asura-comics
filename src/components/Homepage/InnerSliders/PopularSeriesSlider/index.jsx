/* eslint-disable react/no-array-index-key */
/* eslint-disable @next/next/no-img-element */
import Slider from 'react-slick';
import Image from 'next/future/image';
import SliderNextButton from '../../../SliderNextButton';
import generateBlur from '../../../../utils/generateBlur';

const seriesSliderSettings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: false,
  infinite: true,
  autoplay: false,
  autoplaySpeed: 3000,
  dots: false,
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 769,
    },
    {
      breakpoint: 520,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
  arrows: true,
  nextArrow: <SliderNextButton />,
  draggable: false,
  className: 'series-slider p-0 slider align-items-center',
};

const Block = ({ images }) => (
  <div className="slide">
    <div className="slide-content">
      <div className="content d-flex flex-column justify-content-center align-items-center flamesc">
        <div className="d-flex align-items-center mb-3 flamesc">
          {images.slice(0, 3).map((image) => (
            <a style={{ width: 'calc(100% / 3)' }} href={image.link} key={image.id} className="mx-2 comicZoom">
              <Image
                src={image.image}
                layout="raw"
                height="338"
                width="250"
                alt="popular series"
                placeholder="blur"
                blurDataURL={generateBlur(250, 338)}
              />
            </a>
          ))}
        </div>

        <div className="d-flex align-items-center mt-3">
          {images.slice(3).map((image) => (
            <a style={{ width: 'calc(100% / 3)' }} href={image.link} key={image.id} className="mx-2 comicZoom">
              <Image
                src={image.image}
                layout="raw"
                height="338"
                width="250"
                alt="popular series"
                placeholder="blur"
                blurDataURL={generateBlur(250, 338)}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const PopularSeriesSlider = ({ popular }) => (
  <Slider {...seriesSliderSettings}>
    {popular.map((slides, i) => (
      <Block key={slides[i].id} images={slides} />
    ))}
  </Slider>
);

export default PopularSeriesSlider;
