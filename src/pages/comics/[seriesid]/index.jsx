/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable max-len */
/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/control-has-associated-label */

import Head from 'next/head';
import Slider from 'react-slick';
import Image from 'next/image';
import { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import { signIn, useSession } from 'next-auth/react';
import Link from 'next/link';
import ComicBlock from '../../../components/ComicBlock';
import styles from './detail.module.scss';
import relativeTime from '../../../utils/relativeTime';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import generateBlur from '../../../utils/generateBlur';
import DisqusComments from '../../../components/disqusComments/disqusComments';
import RatingStar from '../../../components/RatingStar';
import SocialShareButtons from '../../../components/SocialShareButtons';
import MedRectBTF from '../../../components/ads/medRectBTF';
import LeaderboardBTF from '../../../components/ads/leaderboardBTF';
import LeaderboardATF from '../../../components/ads/leaderboardATF';
import MedRectATF from '../../../components/ads/medRectATF';

const seriesComicSliderSettings = {
  slidesToShow: 3,
  slidesToScroll: 3,
  variableWidth: false,
  infinite: true,
  autoplay: false,
  autoplaySpeed: 3500,
  arrows: false,
  dots: true,
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 520,
      settings: {
        slidesToShow: 3,
      },
    },
  ],
  className: 'series-comic-slider p-0 slider align-items-center subject',
};

const ChapterBlock = ({
  link, chapterTitle, thumbnail, createdAt, index,
}) => {
  const alterClassName = () => {
    if (index === 0) return 'col-xl-4 col-sm-6 col-12 mt-sm-4';
    return 'col-xl-4 col-sm-6 col-12 mt-sm-4 mt-3';
  };

  return (
    <a href={link} className={alterClassName()}>
      <div className="container-style d-flex">
        <img className="p-0" src={thumbnail} alt="thumbnail" />
        <div className="d-flex align-items-center ms-4">
          <div className="d-flex justify-content-center flex-column">
            <h5 className="font-24 color-purple mb-0">{chapterTitle}</h5>
            <label className="color-grey">{createdAt}</label>
          </div>
        </div>
      </div>
    </a>
  );
};

const GenreBlock = ({ genre, i, id }) => {
  const alterClassName = () => {
    if (i % 2 !== 0) return 'container-style history-label p-1 px-3';
    return 'container-style history-label p-1 px-3';
  };
  return (
    <Link href={`/comics?genre=${id}`} passHref>
      <a className={alterClassName()}>
        <label className="font-14" style={{ textTransform: 'capitalize', cursor: 'pointer !important' }}>
          {genre}
        </label>
      </a>
    </Link>
  );
};

const SeriesDetail = ({ series, suggestions, size }) => {
  const { data: session } = useSession();
  const pageurl = typeof window !== 'undefined' && window.location.href ? window.location.href : '';

  const [truncated, setTruncated] = useState(false);
  const toggleTruncate = () => setTruncated((prev) => !prev);

  const useMobile = useMediaQuery(768);

  const bookmarkSeries = () => {
    const seriesID = series.seriesid;
    if (session) {
      const uid = session.user.userid;

      const url = '/api/bookmarkSeries';

      axios
        .post(url, {
          seriesID,
          uid,
        })
        .then((res) => {
          if (res.status === 200) {
            alert('Series bookmarked');
          } else {
            alert('Already bookmarked!');
          }
        });

      return;
    }

    alert('Please sign in');
    return signIn();
  };

  const [fetchedRating, setFetchedRating] = useState(0);

  // fetch rating
  useEffect(() => {
    if (!session) {
      let tempRating = series.rating;

      if (tempRating === 0) {
        tempRating = 10;
      }

      tempRating /= 2;
      setFetchedRating(tempRating);
    }

    if (session) {
      const uid = session.user.userid;
      const seriesId = series.seriesid;

      axios.post('/api/getRating', { seriesId, uid }).then((res) => {
        let { rating: tempRating } = res.data;

        if (tempRating === 0) {
          tempRating = 10;
        }

        tempRating /= 2;
        setFetchedRating(tempRating);
      });
    }
  }, [series.rating, series.seriesid, session]);

  const rateSeries = (rating) => {
    const seriesId = series.seriesid;
    if (session) {
      const uid = session.user.userid;
      const url = '/api/rateSeries';

      axios
        .put(url, {
          seriesId,
          uid,
          rating: rating * 2
        })
        .then((res) => {
          if (res.status === 200) {
            alert('Series rated');
          } else {
            alert('Something went wrong');
          }
        });

      return;
    }

    alert('Please sign in');
    return signIn();
  };

  const [sortChapterOrder, setSortChapterOrder] = useState(false);
  const toggleChapterOrder = () => setSortChapterOrder((prev) => !prev);

  const sortBy = (key) => (a, b) => {
    if (a[key] < b[key]) return sortChapterOrder ? -1 : 1;
    if (a[key] > b[key]) return sortChapterOrder ? 1 : -1;
    return 0;
  };

  // load more functionality
  const chapterIncrease = 12;
  const [shownchapters, setShownChapters] = useState(chapterIncrease);

  const loadMore = () => setShownChapters((prev) => {
    const result = prev + chapterIncrease;
    console.log('Result:', result);
    console.log('Length:', series.chapters.length);
    if (result >= series.chapters.length) {
      console.log(document.querySelector('#flameload'));
      document.querySelector('#flameload').style.display = 'none';
    }
    return result;
  });

  return (
    <div className="series-pg">
      <Head>
        <title>{`${series.title} - Asura Scans`}</title>
        <meta name="viewport" content="initial-scale=1.0 , minimum-scale=1.0 , maximum-scale=1.0" />
        <meta name="title" content={`${series.title} - Asura Scans`} />
        <meta name="description" content="Read Comics" />
        <meta property="og:site_name" content="Asura Scans" />
        <meta property="og:title" content={`${series.title} - Asura Scans`} />
        <meta name="og:description" content="Read Comics" />
        <meta property="og:image" content={`${process.env.NEXT_PUBLIC_IMG_URL}/static/home-cover.jpg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={`${series.title} - Asura Scans`} />
        <meta name="twitter:description" content="Read Comics" />
        <meta property="twitter:image" content={`${process.env.NEXT_PUBLIC_IMG_URL}/static/home-cover.jpg`} />
        <meta property="og:url" content="asura-beta.gify.dev/" />
        <link rel="canonical" href={process.env.NEXT_PUBLIC_SITE_URL} />
      </Head>

      <div className="row p-0 m-0 justify-content-center ultrawide">
        <div className="header">
          <div className="row section-margin m-0 p-0 position-relative" />
        </div>

        {/* Series Info */}
        <div className="row  p-0 position-relative series-details ultrawide" style={{ marginTop: '50px' }}>
          <div className="container my-3">
            <div className="row m-0 p-0 position-relative">
              <div className="col-2 d-xl-block d-none " />
              {/* check here later */}
              <div className="col-lg-8 col-12 container">
                <div className="asuraads">
                  {(size.width !== undefined && size.width > 569) ? <LeaderboardATF /> : <MedRectATF /> }
                </div>

                <div className="row">

                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                    <div className="comic-img items-center p-0">
                      {/* desktop play button */}
                      {/* <div className="position-relative d-flex align-items-center justify-content-center">
                        <a href="#">
                          <img
                            src={`${process.env.NEXT_PUBLIC_IMG_URL}img/play-btn.svg`}
                            className="position-absolute desktop play-s-btn"
                            style={{ top: '350px', left: '40%' }}
                          />
                        </a>
                      </div> */}

                      {/* series image */}
                      <div style={{ width: '100%', height: '100%' }} className={styles.cover}>
                        <Image
                          src={series.image}
                          alt="cover"
                          width="720px"
                          height="972px"
                          unoptimized
                          placeholder="blur"
                          blurDataURL={generateBlur(720, 972)}
                        />
                      </div>
                    </div>
                  </div>

                  {/* series info */}
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 p-0">
                    {/* link for home. title */}
                    <div className="content ps-sm-4 mt-sm-0 mt-3">
                      <nav aria-label="breadcrumb mb-0">
                        <ol className="breadcrumb mb-0 navSeriesDetails">
                          <li className="breadcrumb-item font-24 home">
                            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                            <a href="/" className="color-grey font-24">
                              Asura Scans
                            </a>
                          </li>
                          <li className="breadcrumb-item active font-24 current" aria-current="page">
                            {series.title}
                          </li>
                        </ol>
                      </nav>

                      {/* Title & share button */}
                      <div className="d-flex align-items-center center">
                        <h2 className="seriesTitle" style={{ fontSize: 'calc(2.2rem + 0.6vw)' }}>
                          {series.title}
                        </h2>
                      </div>
                      {/* <a href="#" className="">
                        <img src={`${process.env.NEXT_PUBLIC_IMG_URL}img/share.svg`} className="share" alt="share" />
                      </a> */}
                      <div className="flameshareseries">
                        <span style={{ paddingTop: '0.5rem' }} className="h6">
                          <SocialShareButtons url={`${series.seriesid}-${series.slug}`} seriesTitle={series.title} title="" type="comics" />
                        </span>
                      </div>

                      {/* Description */}
                      <h5 className="color-purple font-24 mt-4">Description</h5>
                      <p className={`${!truncated && useMobile && 'truncate'} color-grey font-16`}>{series.description}</p>

                      {useMobile && !truncated && (
                        <p type="button" className="truncater truncBtn mr-3" onClick={toggleTruncate}>
                          More
                        </p>
                      )}

                      {/* Meta Info */}

                      <div className={`row m-0 p-0 position-relative metaInfo ${useMobile && !truncated && 'desktop'}`}>
                        {/* Authors */}
                        <div className="d-flex gap-3 mt-4 pt-sm-2 m-0 p-0">
                          <div className="container-style history-label p-2 px-3">
                            <h5 className="font-12 font-400 color-purple font-uppercase mb-0">Author</h5>
                            <label className="font-14">{series.authors}</label>
                          </div>

                          {/* Status */}
                          <div className="container-style history-label p-2 px-3">
                            <h5 className="font-12 font-400 color-purple font-uppercase mb-0">Status</h5>
                            <label className="font-14">{series.status}</label>
                          </div>

                          {/* Type */}
                          <div className="container-style history-label p-2 px-3">
                            <h5 className="font-12 font-400 color-purple font-uppercase mb-0">Type</h5>
                            <label className="font-14">{series.type}</label>
                          </div>
                        </div>

                        {/* Rating & Bookmark */}
                        <h5 className="color-purple font-24 mt-4 pt-sm-2 m-0 p-0">Rating</h5>
                        <div className="d-flex align-items-center color-grey rating m-0 p-0 mt-3">
                          <label className="font-24">{series.rating}</label>

                          {/* rating */}
                          <RatingStar
                            classNames="mx-2 ratingStar"
                            count={5}
                            isHalf
                            value={fetchedRating}
                            onChange={rateSeries}
                            activeColor="#ffd700"
                          />

                          <label className="font-24">{`${series.noBookmarks} Following`}</label>
                        </div>

                        {/* Genres */}
                        <h5 className="color-purple font-24 mt-4 pt-sm-2 m-0 p-0">Genres</h5>

                        <div className="d-flex flex-wrap gap-3 mt-3 m-0 p-0">
                          {Object.values(series.genres).map((genre, i) => {
                            function getKeyByValue(object, value) {
                              return Object.keys(object).find((key) => object[key] === value);
                            }

                            return <GenreBlock key={i} genre={genre} i={i} id={getKeyByValue(series.genres, genre)} />;
                          })}
                        </div>

                        <h5 className="color-purple font-24 mt-4 pt-sm-2 m-0 p-0 desktop">Read now</h5>

                        {useMobile && truncated && (
                          <p className="truncater mt-3 truncBtn" onClick={toggleTruncate}>
                            Less
                          </p>
                        )}
                      </div>

                      {/* buttons */}
                      <div className="d-flex mt-3 items-center">
                        {series.chapters.length > 0 ? (
                          <a href={Array.from(series.chapters).pop().link}>
                            <button type="button" className="btn theme-btn-dark w-247 h-52 desktop">
                              Start Reading
                            </button>
                          </a>
                        ) : (
                          <button type="button" className="btn theme-btn-dark w-247 h-52 desktop">
                            Start Reading
                          </button>
                        )}
                        <button type="button" className="btn theme-btn w-247 h-52 ms-sm-3" onClick={bookmarkSeries}>
                          Bookmark
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="asuraads">
                    {(size.width !== undefined && size.width > 569) ? <LeaderboardBTF /> : <MedRectBTF />}
                  </div>

                </div>
              </div>
              <div className="col-2 d-xl-block d-none " />
            </div>
          </div>
        </div>

        {/* List of chapters */}
        <div className="row p-0 position-relative chapters-section my-3 ultrawide">
          <div className="col-2 d-xl-block d-none " />
          <div className="container col-xs-12 col-sm-12 col-md-12 col-lg-8 col-xl-8">
            <div className="d-flex heading px-sm-0 px-2">
              <div className="me-auto">
                {series.chapters.length > 0 && <h3 className="px-sm-3">All Chapters</h3>}
                {series.chapters.length === 0 && <h3 className="px-sm-3">No Chapters</h3>}
              </div>
              <div className="ms-auto d-flex align-items-center">
                <button
                  type="button"
                  className="btn chapterSwap"
                  style={{ boxShadow: 'none' }}
                  onClick={toggleChapterOrder}
                >
                  <img src={`${process.env.NEXT_PUBLIC_IMG_URL}img/swap_vert.svg`} />
                </button>
              </div>
            </div>

            {/* chapters */}
            {series.chapters.length > 0 && (
            <>
              {/* desktop */}
              <div className="row m-0 p-0 position-relative mt-sm-0 mt-3 desktop">
                {series.chapters
                  .sort(sortBy('order'))
                  .slice(0, shownchapters)
                  .map((chapter, i) => (
                    <Fragment key={i}>
                      <ChapterBlock {...chapter} />
                      {(i + 1) % 6 === 0 && (
                      <div id={(i + 1) > 12 ? 'loadmoreads' : ''} className="asuraads">
                        {(size.width !== undefined && size.width > 569) ? <LeaderboardBTF /> : <MedRectBTF />}
                      </div>
                      )}
                    </Fragment>
                  ))}
              </div>

              {/* mobile */}
              <div className="row m-0 p-0 position-relative scrolled-sec my-sm-5 my-4 mobile">
                {series.chapters
                  .sort(sortBy('order'))
                  .map((chapter, i) => (
                    <Fragment key={i}>
                      <ChapterBlock {...chapter} />
                      {(i + 1) % 6 === 0 && (
                      <div id={(i + 1) > 12 ? 'loadmoreads' : ''} className="asuraads">
                        {(size.width !== undefined && size.width > 569) ? <LeaderboardBTF /> : <MedRectBTF />}
                      </div>
                      )}
                    </Fragment>
                  ))}
              </div>
            </>
            )}

            {/* comments, load more, some ads */}
            <div className="row m-0 p-0 position-relative my-sm-5 my-4 animation-element bounce-down">
              <div className="d-flex align-items-center justify-content-center flex-column my-sm-4 subject desktop">
                {
                    series.chapters.length > 12
                    && (
                      <button id="flameload" type="button" className="btn theme-btn w-331 h-52" onClick={loadMore}>
                        Load more
                      </button>
                    )
                  }
              </div>

              <div className="asuraads">
                {(size.width !== undefined && size.width > 569) ? <LeaderboardBTF /> : <MedRectBTF />}
              </div>

              <DisqusComments url={pageurl} identifier={series.seriesid} title={series.title} />

              <div className="asuraads">
                {(size.width !== undefined && size.width > 569) ? <LeaderboardBTF /> : <MedRectBTF />}
              </div>
            </div>

            {/* Featured series */}
            <div className="row m-0 p-0 position-relative recommendation-section latestUpdates-section">
              <div className="container">
                <h4 className="px-sm-0 px-2">Featured Series</h4>
                <div className="row m-0 p-0 position-relative desktop">
                  {suggestions.map((item, i) => (
                    <ComicBlock key={i} index={i} {...item} />
                  ))}
                </div>

                <div className="row m-0 p-0 position-relative mobile mt-4">
                  <Slider {...seriesComicSliderSettings}>
                    {suggestions.map((item, i) => (
                      <ComicBlock slide key={i} {...item} />
                    ))}
                  </Slider>
                </div>
              </div>
            </div>

            <div className="asuraads">
              {(size.width !== undefined && size.width > 569) ? <LeaderboardBTF /> : <MedRectBTF />}
            </div>

          </div>
          <div className="col-2 d-xl-block d-none " />
        </div>
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const data = await fetch(`${process.env.API_URL}series/`);
  const posts = await data.json();

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { seriesid: `${post.id}-${post.slug}` },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: blocking } will server-render pages
  // on-demand if the path doesn't exist.
  return { paths, fallback: 'blocking' };
}

export async function getStaticProps(ctx) {
  if (typeof window !== 'undefined') return;

  const seriesid = ctx.params.seriesid.includes('-') ? ctx.params.seriesid.split('-')[0] : ctx.params.seriesid;
  const url = `${process.env.API_URL}series/${seriesid}`;

  const controller = new AbortController();
  if (process.env.node_env === 'production') {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const timeoutId = setTimeout(() => controller.abort(), 2000);
  }

  if (process.env.node_env === 'development') {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const timeoutId = setTimeout(() => controller.abort(), 2000);
  }

  await fetch(`${process.env.API_URL}series/${seriesid}`, { signal: controller.signal, method: 'POST' });

  let seriesFound = true;

  const data = await fetch(url, { signal: controller.signal })
    .then((res) => {
      // console.log('😔', res.status);
      if (res.status === 404 || res.status === 404) {
        seriesFound = false;
      } else {
        return res.json();
      }
    })
    .catch((err) => {
      console.error(err);
      return {
        notFound: true,
      };
    });

  if (!seriesFound) {
    return {
      notFound: true,
    };
  }

  const featuredData = await fetch(`${process.env.API_URL}feed`, { signal: controller.signal })
    .then((res) => res.json())
    .catch((err) => {
      console.error(err);
      return {
        notFound: true,
      };
    });

  let suggestions = featuredData.featured.map((item) => ({
    link: `/comics/${item.id}-${item.slug}`,
    tag: 'Hot 🔥',
    image: `${process.env.NEXT_PUBLIC_IMG_URL}thumbnail/${item.poster}.jpg`,
    title: item.title
  }));

  suggestions = suggestions.slice(0, 6);

  if (!(ctx.params.seriesid === `${seriesid}-${data.slug}`)) {
    return {
      redirect: {
        destination: `${seriesid}-${data.slug}`,
        permanent: true,
      },
    };
  }

  const currentTime = new Date();

  const chapters = data.chapters
    ? data.chapters
      .sort((a, b) => b.created_at - a.created_at)
      .map((chapter) => {
        const chapterTime = new Date(chapter.created_at * 1000);
        const date = relativeTime(currentTime, chapterTime);

        return {
          link: `/read/${chapter.series_id}-${chapter.series_slug}/${chapter.slug}`,
          chapterTitle: chapter.title,
          thumbnail:
                chapter.thumbnail_uuid === ''
                  ? `${process.env.NEXT_PUBLIC_IMG_URL}static/chapter-thumbnail.jpg`
                  : `${process.env.NEXT_PUBLIC_IMG_URL}thumbnail/${chapter.thumbnail_uuid}.jpg`,
          createdAt: date,
          order: chapter.order,
        };
      })
    : [];

  const series = {
    image: `${process.env.NEXT_PUBLIC_IMG_URL}poster/${data.poster_uuid}.jpg`,
    title: data.title,
    description: data.description,
    authors: data.authors,
    status: data.status,
    type: data.type,
    rating: data.score,
    noBookmarks: data.total_follows,
    genres: data.genres,
    chapters,

    alt_title: data.alt_title,
    total_views: data.total_views,
    artists: data.artists,
    serialization: data.serialization,
    slug: data.slug,
    seriesid,
  };

  return {
    props: {
      series,
      suggestions
    },
    revalidate: 5
  };
}

export default SeriesDetail;
