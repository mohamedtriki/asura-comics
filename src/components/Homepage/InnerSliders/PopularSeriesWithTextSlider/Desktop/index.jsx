/* eslint-disable quotes */
/* eslint-disable @next/next/no-img-element */
import Slider from 'react-slick';
import Image from 'next/future/image';
import { useEffect, useState } from 'react';
import { leftSeriesSliderSettings } from '../common';
import generateBlur from '../../../../../utils/generateBlur';
import RatingStar from '../../../../RatingStar';

const Block = ({
  link, image, title, content, reviews, rating
}) => {
  const [fetchedRating, setFetchedRating] = useState(0);

  // fetch rating
  useEffect(() => {
    let tempRating = rating;

    if (tempRating === 0) {
      tempRating = 10;
    }

    tempRating /= 2;
    setFetchedRating(tempRating);
  }, [rating]);
  return (
    <div className="slide">
      <div className="slide-content content">
        <a href={link}>
          <Image
            src={image}
            className="slideImage"
            alt="featured series"
            layout="raw"
            height="611"
            width="723"
            unoptimized
            placeholder="blur"
            blurDataURL={generateBlur(723, 611)}
          />
        </a>
        <div className="inner-content">
          <h3 className="font-50 font-400 clamp">{title}</h3>
          <p className="color-grey clamp" style={{ WebkitLineClamp: '3 !important' }}>
            {content}
          </p>
          <div className="d-flex my-5">
            <a href={link}>
              <button type="button" className="btn theme-btn">
                Read now
              </button>
            </a>

            <div className="d-flex flex-column ms-5">
              <RatingStar count={5} isHalf size={18} edit={false} value={fetchedRating} activeColor="#ffd700" />
              {reviews === 1 && <label className="font-11 mt-1">{`${reviews} review`}</label>}
              {reviews !== 1 && <label className="font-11 mt-1">{`${reviews} reviews`}</label>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DesktopSeriesSlider = ({ content }) => (
  <Slider {...leftSeriesSliderSettings} className="leftSeries-slider ps-sm-0 slider align-items-center">
    {content.map((slide) => (
      <Block key={slide.id} {...slide} />
    ))}
  </Slider>
);

export default DesktopSeriesSlider;
