import { useEffect, useState } from 'react';
import ReactStars from 'react-rating-stars-component';

const RatingStar = ({
  classNames, count, value, onChange, activeColor, isHalf, size, edit
}) => {
  const [starValue, setStarValue] = useState(0);
  const props = {
    classNames,
    count,
    value,
    onChange,
    activeColor,
    isHalf,
    size,
    edit
  };

  // quick solution since package doesn't update value after initial render
  useEffect(() => setStarValue(value), [value]);

  return <ReactStars {...props} key={starValue} />;
};

export default RatingStar;
