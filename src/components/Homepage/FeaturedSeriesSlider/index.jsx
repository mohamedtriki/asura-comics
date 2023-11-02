import Image from 'next/image';
import generateBlur from '../../../utils/generateBlur';
import MainBannerSlider from './MainBannerSlider';

const FeaturedSeriesSlider = ({ content }) => (
  <div className="header">
    {/* background image */}
    <div className="bannerFilter desktop">
      <Image
        id="carouselbkg"
        src={`${process.env.NEXT_PUBLIC_IMG_URL}poster/${content[0].poster}.jpg`}
        // src={`${process.env.NEXT_PUBLIC_IMG_URL}img/homepage/header-bg.jpg`}
        className="p-0 w-100 desktop banner"
        alt="background banner"
        layout="fill"
        objectFit="cover"
        objectPosition="top"
        placeholder="blur"
        blurDataURL={generateBlur('100vw', '100vh')}
        unoptimized
      />
    </div>

    {/* content */}
    <div className="row m-0 p-0 position-relative slider-section desktop">
      <div className="col-2 d-xl-block d-none section-margin" />

      {/* Main Banner */}
      <div className="col">
        <div id="carouselExampleCaptions" className="carousel slide m-0 p-0" data-mdb-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className=" d-md-block" style={{ height: 'fit-content' }}>
                <div className="container caption-container p-0">
                  <div
                    id="carouselinfo"
                    className="items-center d-flex flex-column justify-content-between px-sm-0 px-5 subject"
                  >
                    <h3 id="carouseltitle" className="truncate-text">
                      {content[0].title}
                    </h3>

                    <p id="carouseldesc" className="color-grey text-t-center truncate-text-desc">
                      {content[0].description}
                    </p>

                    <a id="carousellink" href={`/comics/${content[0].id}-${content[0].slug}`}>
                      <button type="button" className="btn theme-btn my-sm-5 my-4">
                        Read now
                      </button>
                    </a>
                  </div>

                  {/* Main  Slider */}
                  <div className="row m-0 p-0 position-relative slider-sec">
                    <MainBannerSlider slides={content} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-2 d-xl-block d-none section-margin" />
    </div>
  </div>
);

export default FeaturedSeriesSlider;
