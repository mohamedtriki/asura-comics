/* eslint-disable quotes */
/* eslint-disable @next/next/no-img-element */
import Slider from 'react-slick';
import Image from 'next/image';

import { leftSeriesSliderSettings } from '../common';

const Block = ({
  image, title, content, link
}) => (
  <a href={link}>
    <div className="slide">
      <div className="slide-content content">
        {/* <img alt="slide" src={image} className="slide-img" /> */}
        <Image
          src={image}
          className="slide-img slideImage"
          alt="slide"
          layout="responsive"
          height="298"
          width="353"
          priority
          unoptimized
        />
        <div className="inner-content d-flex align-items-center justify-content-center flex-column text-center">
          <h3 className="font-24 font-400 clamp">{title}</h3>
          <p className="color-grey font-12 clamp">{content}</p>
        </div>
      </div>
    </div>
  </a>
);

const MobileSeriesSlider = ({ content }) => (
  <Slider {...leftSeriesSliderSettings} dots className="leftSeries-slider p-0 slider align-items-center subject">
    {content.map((slide) => (
      <Block key={slide.title} {...slide} />
    ))}
  </Slider>
);

export default MobileSeriesSlider;
