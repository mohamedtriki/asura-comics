import Image from 'next/image';
import generateBlur from '../../../utils/generateBlur';
import MobileMainBannerSlider from './MobileMainBannerSlider';

const FeaturedSeriesSliderMobile = ({ content }) => (
  <div className="header featuredSeriesSliderMobile">
    {/* background image */}
    <div className="bannerFilterMob mobile">
      <Image
        id="carousel-Mob-bkg"
        src={`${process.env.NEXT_PUBLIC_IMG_URL}banners/${content[0].uuid}`}
        className="p-0 w-100 mobile banner"
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
    <div className="row m-0 p-0">
      <div className="col">
        <div id="carouselExampleCaptions" className="carousel slide m-0 p-0" data-mdb-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="" style={{ marginTop: '40vh' }}>
                <div className="container caption-container p-0">
                  <div
                    id="carouselinfo"
                    className="items-center d-flex flex-column justify-content-between px-sm-0 px-5 subject"
                  >
                    <h3 id="carousel-Mob-title" className="truncate-text">
                      {content[0].title}
                    </h3>

                    <p id="carousel-Mob-desc" className="color-grey text-t-center truncate-text-desc">
                      {content[0].subtitle}
                    </p>

                    <a id="carousel-Mob-link" href={`${content[0].slug}`}>
                      <button type="button" className="btn theme-btn my-sm-5 my-4">
                        Read now
                      </button>
                    </a>
                  </div>

                  {/* /!* Main  Slider *!/ */}
                  <div className="row m-0 p-0 position-relative slider-sec">
                    <MobileMainBannerSlider slides={content} />
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

export default FeaturedSeriesSliderMobile;
