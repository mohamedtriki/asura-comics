/* eslint-disable @next/next/no-img-element */
import Image from 'next/future/image';
import generateBlur from '../../utils/generateBlur';

const ComicBlock = ({
  index, image, title, link, slide
}) => {
  const alterPosterClassName = (i) => {
    if (!slide) {
      if (i % 2 === 0) return 'col-sm-2 col-6 mt-4 ';
      return 'col-sm-2 col-6  mt-4';
    }

    if (i % 2 === 0) return 'col-sm-2 mt-sm-5 mt-4 mx-2';
    return 'col-sm-2 mt-sm-5 mt-4 mx-2';
  };

  return (
    <div className={alterPosterClassName(index)}>
      <div className="content subject">
        <a href={link}>
          {/* <div className="top-icon position-relative">
              <div className="btn-top">{tag}</div>
            </div> */}
          <div className="comicZoom mb-sm-3 mb-2">
            <Image
              src={image}
              layout="raw"
              width={262}
              height={353}
              alt="poster"
              placeholder="blur"
              blurDataURL={generateBlur(262, 353)}
              style={{ borderRadius: '12px' }}
            />
          </div>
          {/* <img className="mb-sm-3 mb-2" src={image} alt="poster"  /> */}
          <h5 className="font-700 font-20 mt-1 color-white clamp text-center">{title}</h5>
        </a>
      </div>
    </div>
  );
};

export default ComicBlock;
