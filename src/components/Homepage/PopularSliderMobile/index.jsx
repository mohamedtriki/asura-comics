import LeaderboardBTF from '../../ads/leaderboardBTF';
import MedRectBTF from '../../ads/medRectBTF';
import MobileSeriesSlider from '../InnerSliders/PopularSeriesWithTextSlider/Mobile';

const PopularSliderMobile = ({ size, popularContentSlides }) => {
  const { width } = size;

  return (
    <div className="row m-0 p-0 position-relative mobile">
      <div className="asuraads">
        {width !== undefined && width > 569 ? <LeaderboardBTF /> : <MedRectBTF />}
      </div>

      {/* Mobile Popular Series Slider */}
      <MobileSeriesSlider content={popularContentSlides} />
    </div>
  );
};

export default PopularSliderMobile;
