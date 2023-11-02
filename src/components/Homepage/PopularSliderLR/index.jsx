import LeaderboardATF from '../../ads/leaderboardATF';
import MedRectATF from '../../ads/medRectATF';
import PopularSeriesSlider from '../InnerSliders/PopularSeriesSlider';
import DesktopSeriesSlider from '../InnerSliders/PopularSeriesWithTextSlider/Desktop';

const PopularSliderLR = ({ size, popularContentSlides, popularSlides }) => {
  const { width } = size;

  return (
    <div className="row m-0 position-relative popularSeries-section section-margin desktop">
      <div className="col-2 d-xl-block d-none section-margin" />

      {/* Sliders */}
      <div className="col-sm-12 col-xl-8 d-flex flex-wrap position-relative my-3">
        <div className="asuraads">
          {width !== undefined && width > 569 ? <LeaderboardATF /> : <MedRectATF />}
        </div>

        <div style={{ marginLeft: '-10px' }} className="container">
          <h4>Popular Series</h4>
        </div>
        {/* Popular Series Dropdown filter */}
        {/* <HomepageFilter /> */}

        {/* Left Slider */}
        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 ps-sm-0 my-5">
          <div className="left-slider subject">
            <DesktopSeriesSlider content={popularContentSlides} />
          </div>
        </div>

        {/* Right Slider */}
        <div className="col-6 d-none d-lg-block pe-sm-0 my-5">
          <div className="right-slider subject">
            <PopularSeriesSlider popular={popularSlides} />
          </div>
        </div>
      </div>
      <div className="col-2 d-xl-block d-none  section-margin" />
    </div>
  );
};

export default PopularSliderLR;
