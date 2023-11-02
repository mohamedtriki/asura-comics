import Image from 'next/image';
import Slider from 'react-slick';
import styles from './styles.module.scss';

const sliderSettings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  variableWidth: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2500,
  pauseOnHover: true,
};

const Block = ({ slug, uuid }) => (
  <a href={`${slug}`}>
    <div className={styles.slideContainer}>
      <Image
        src={`${process.env.NEXT_PUBLIC_IMG_URL}banners/${uuid}`}
        layout="fill"
        objectFit="contain"
        unoptimized
        priority
        alt={slug}
      />
    </div>
  </a>
);

const AltFeaturedSeriesSlider = ({ slides }) => (
  <div className={`${styles.container}`}>
    <Slider {...sliderSettings} className={`center ${styles.slides}`}>
      {slides.map((slide) => (
        <Block key={slide.order} {...slide} />
      ))}
    </Slider>

    {/* background image */}
    <div className={`${styles.bkgFilter} desktop`}>
      <Image
        src="/img/banner-bkg.png"
        className="p-0 w-100 desktop"
        alt="background banner"
        layout="fill"
        objectFit="cover"
        objectPosition="top"
        unoptimized
      />
    </div>
  </div>
);

export default AltFeaturedSeriesSlider;
