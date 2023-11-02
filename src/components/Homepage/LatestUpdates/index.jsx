import Image from 'next/future/image';
import { useState, Fragment } from 'react';
import LeaderboardBTF from '../../ads/leaderboardBTF';
import MedRectBTF from '../../ads/medRectBTF';
import generateBlur from '../../../utils/generateBlur';
import LeaderboardATF from '../../ads/leaderboardATF';
import MedRectATF from '../../ads/medRectATF';

const Poster = ({
  seriesLink, image, title, chapters, index
}) => {
  const alterChapterClassName = (i) => {
    if (i % 2 !== 0) return 'd-flex align-items-center mb-1';
    return 'd-flex align-items-center mb-1';
  };

  return (
    // <div className={alterPosterClassName(index)}>
    <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 mt-sm-5 mt-4">
      <div className="content subject">
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a href={seriesLink}>
          {/* <div className="top-icon position-relative">
            <div className="btn-top">{tag}</div>
          </div> */}
          <div className="comicZoom mb-sm-2 mb-1">
            <Image
              src={image}
              alt={title}
              layout="raw"
              height="353"
              width="262"
              loading="lazy"
              unoptimized
              placeholder="blur"
              blurDataURL={generateBlur(262, 353)}
            />
          </div>
          <h6
            className="font-700 h6 uw-h5 mt-1 color-white clamp text-center"
            style={{ height: '2.6rem', lineHeight: '21px' }}
          >
            {title}
          </h6>
        </a>

        {/* always 3 chapters */}
        {chapters.map((chapter, i) => (
          <div key={chapter.id} className={alterChapterClassName(i)}>
            <a href={chapter.link} className="me-auto truncate-text chapterTitle">
              {chapter.title}
            </a>
            <label className="font-11 ms-auto color-grey">{chapter.createdAt}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

const LatestUpdates = ({ updates, size }) => {
  const latestIncrease = 12;

  const [shownUpdates, setShownUpdates] = useState(latestIncrease);

  const loadMore = () => setShownUpdates((prev) => {
    const result = prev + latestIncrease;

    if (result >= updates.length) {
      const loaders = document.querySelectorAll('#flameload');

      loaders.forEach((loader) => {
        loader.classList.add('disableLoader');
      });
    }

    window.scrollBy(0, 100);
    return result;
  });

  return (
    <div className="row m-0 p-0 position-relative latestUpdates-section section-margin">
      <div className="col-2 d-xl-block d-none " />
      <div className="col">
        <div className="asuraads">
          {size.width !== undefined && size.width > 569 ? <LeaderboardATF /> : <MedRectATF />}
        </div>
        <h4 className="px-sm-0 px-3">Latest Updates</h4>
        <div className="row">
          {updates.slice(0, shownUpdates).map((update, i) => (
            <Fragment key={update.title}>
              <Poster {...update} index={i} />
              {(size.width !== undefined && size.width < 569 && (i + 1) % 4) === 0 && (
                <div id={i + 1 > 8 ? 'loadmoreads' : ''} className="asuraads">
                  <MedRectBTF />
                </div>
              )}
              {(size.width !== undefined && size.width >= 569 && (i + 1) % 12) === 0 && (
                <div id={i + 1 > 12 ? 'loadmoreads' : ''} className="asuraads">
                  <LeaderboardBTF />
                </div>
              )}
            </Fragment>
          ))}
        </div>
      </div>
      <div className="col-2 d-xl-block d-none col-0 " />

      <div className="row m-0 p-0 position-relative my-sm-5 my-4 animation-element bounce-down">
        <div className="d-flex align-items-center justify-content-center flex-column my-sm-4 subject">
          {updates.length > 12 && (
            <>
              <button id="flameload" type="button" className="btn theme-btn w-331 h-52" onClick={loadMore}>
                Load more
              </button>

              <p id="flameload" className="mt-2 color-grey">{`${shownUpdates} out of ${updates.length}`}</p>
            </>
          )}
        </div>
      </div>
      <div className="asuraads">
        {size.width !== undefined && size.width > 569 ? <LeaderboardBTF /> : <MedRectBTF />}
      </div>
    </div>
  );
};

export default LatestUpdates;
