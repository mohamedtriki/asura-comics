/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/control-has-associated-label */

import Head from 'next/head';
import Image from 'next/image';
import { Fragment } from 'react';
import Slider from 'react-slick';
import SideBarChapterSelector from '../../../components/ChapterSelector/SideBar';
import StandaloneChapterSelector from '../../../components/ChapterSelector/Standalone';
import SocialShareButtons from '../../../components/SocialShareButtons';
import DisqusComments from '../../../components/disqusComments/disqusComments';
// import generateBlur from '../../../utils/generateBlur';
import ComicBlock from '../../../components/ComicBlock';
import LeaderboardBTF from '../../../components/ads/leaderboardBTF';
import MedRectBTF from '../../../components/ads/medRectBTF';
import LeaderboardATF from '../../../components/ads/leaderboardATF';
import MedRectATF from '../../../components/ads/medRectATF';

const seriesComicSliderSettings = {
  slidesToShow: 3,
  slidesToScroll: 1,
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
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 520,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
  className: 'series-comic-slider p-0 slider align-items-center subject',
};

const Chapter = ({
  title, subtitle, seriesTitle, data, description, cover, chapterList, chapterID, seriesID, hash, slug, fullhash, suggestions, size
}) => {
  const fulltitle = subtitle ? `${seriesTitle} ${title} - ${subtitle}` : `${seriesTitle} ${title}`;
  const pageurl = typeof window !== 'undefined' && window.location.href ? window.location.href : '';
  let current;
  chapterList.sort((a, b) => a.order - b.order).map((chapter, i) => {
    if (chapter.id === chapterID) current = i;
    return 0;
  });

  return (
    <div className="chapter-pg">
      <Head>
        <meta name="theme-color" content="#7334AE" />
        <title>{`${fulltitle} - Asura Scans`}</title>
        <meta name="title" content={`${fulltitle} - Asura Scans`} />
        <meta name="description" content={description} />
        <meta property="og:site_name" content="Asura Scans" />
        <meta property="og:title" content={`${fulltitle} - Asura Scans`} />
        <meta name="og:description" content={description} />
        <meta property="og:image" content={cover} />
        <meta name="twitter:card" content="summary" />
        <meta property="twitter:title" content={`${fulltitle} - Asura Scans`} />
        <meta name="twitter:description" content={description} />
        <meta property="twitter:image" content={cover} />
        <meta property="og:url" content={`https://asurascans.com/read/${hash}/${slug}`} />
        <link href={`https://asurascans.com/read/${hash}/${slug}`} />
      </Head>

      <div className="p-0">
        {/* Chapter selector */}
        {/* eslint-disable-next-line max-len */}
        <SideBarChapterSelector title={seriesTitle} chapTitle={title} chapterList={chapterList} hash={hash} chapterID={chapterID} />

        {/* Actual chapter image */}
        <div className="row m-0 p-0 position-relative chapter-section my-3">
          <div className="container main-container p-0">
            <div className="position-relative" />
            <div className="d-flex flex-column justify-content-center position-relative section-margin">

              <div className="asuraads">
                {(size.width !== undefined && size.width > 569) ? <LeaderboardATF /> : <MedRectATF />}
              </div>

              <div className="container">

                <h1 className="h1 justify-content-center align-items-center text-center">
                  <span className="h2">
                    {seriesTitle}
                    {' '}
                    {title}
                  </span>
                  {subtitle && (
                    <span style={{ whiteSpace: 'pre' }} className="h2">
                      {' '}
                      -
                      {' '}
                      {subtitle}
                    </span>
                  )}
                </h1>
                <div className="text-center">
                  <span style={{ whiteSpace: 'pre', color: '#999' }} className="h6">
                    All chapters are in
                    {' '}
                  </span>
                  <a className="h6 text-secondary" href={`/comics/${fullhash}`}>
                    {seriesTitle}
                  </a>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <span style={{ paddingTop: '0.5rem' }} className="h6">
                    <SocialShareButtons url={fullhash} seriesTitle={seriesTitle} title={title} type="read" />
                  </span>
                </div>
                <h3 style={{ color: '#999', marginBottom: '1.5rem' }} className="h6 text-center">{`Read the latest comic ${fulltitle} at Asura Scans . The comic, ${seriesTitle} is always updated at Asura Scans. Don't forget to read the other comic updates. A list of comics collections Asura Scans is in the Comic List menu.`}</h3>
              </div>
            </div>
            <div className="d-flex justify-content-center row m-0 p-0 position-relative">
              <div className="d-flex justify-content-between">

                <a style={{ width: 'fit-content', marginBottom: '1.5rem', borderRadius: '60px' }} href={`/read/${hash}/${chapterList[current - 1]?.slug}`} className={`${current < 1 ? 'btn disabled' : 'btn theme-btn'}`}>
                  prev
                </a>

                <StandaloneChapterSelector chapTitle={title} chapterList={chapterList} hash={hash} chapterID={chapterID} />

                <a style={{ width: 'fit-content', marginBottom: '1.5rem', borderRadius: '60px' }} href={`/read/${hash}/${chapterList[current + 1]?.slug}`} className={`${current === chapterList.length - 1 ? 'btn disabled' : 'btn theme-btn'}`}>
                  next
                </a>
              </div>
              <div className="asuraads">
                {(size.width !== undefined && size.width > 569) ? <LeaderboardBTF /> : <MedRectBTF />}
              </div>
              {data.sort((a, b) => a.order - b.order).map((e) => (
                <Fragment key={e.uuid}>
                  <Image
                    loading="eager"
                    width={e.width}
                    height={e.height}
                    src={`${process.env.NEXT_PUBLIC_IMG_URL}pages/${chapterID}/${e.uuid}.jpg`}
                    // placeholder="blur"
                    // blurDataURL={generateBlur(e.width, e.height)}
                    unoptimized
                  />
                  <div className="asuraads">
                    {(size.width !== undefined && size.width > 569) ? <LeaderboardBTF /> : <MedRectBTF />}
                  </div>
                </Fragment>
              ))}
              <a className="d-flex justify-content-center" href="https://asura.gg/discord">
                <Image
                  loading="lazy"
                  width={720}
                  height={384}
                  src={`${process.env.NEXT_PUBLIC_IMG_URL}static/join-the-discord.jpg`}
                  // placeholder="blur"
                  // blurDataURL={generateBlur(720, 384)}
                  unoptimized
                />
              </a>
              <div className="d-flex justify-content-between my-2">
                <a style={{ background: 'rgb(115, 52, 174)', borderRadius: '16px' }} href={`/read/${hash}/${chapterList[current - 1]?.slug}`} className={`${current < 1 ? 'btn text-white disabled' : 'btn text-white'} my-3`}>
                  prev
                </a>
                <StandaloneChapterSelector chapTitle={title} chapterList={chapterList} hash={hash} chapterID={chapterID} topPadding />

                <a style={{ background: 'rgb(115, 52, 174)', borderRadius: '16px', marginTop: '1.5rem' }} href={`/read/${hash}/${chapterList[current + 1]?.slug}`} className={`${current === chapterList.length - 1 ? 'btn text-white disabled' : 'btn text-white'} my-3`}>
                  next
                </a>
              </div>

              <div className="asuraads">
                {(size.width !== undefined && size.width > 569) ? <LeaderboardBTF /> : <MedRectBTF />}
              </div>

              <DisqusComments url={pageurl} identifier={`${seriesID}/${chapterID}`} title={fulltitle} />

              <div className="asuraads">
                {(size.width !== undefined && size.width > 569) ? <LeaderboardBTF /> : <MedRectBTF />}
              </div>

              {/* Comment Section */}
              {/* <CommentsSection /> */}

              {/* Suggestions */}
              <div className="row m-0 p-0 position-relative recommendation-section latestUpdates-section">
                <div className="container">
                  <h3 className="px-sm-0 px-2">Featured Series</h3>
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
          </div>
        </div>

      </div>
    </div>
  );
};

export async function getStaticPaths() {
  return {
    paths: [], fallback: 'blocking'
  };
}

export async function getStaticProps({ params }) {
  if (typeof window !== 'undefined') return;

  const hash = params.seriesID;
  const { slug } = params;
  const seriesId = hash.includes('-') ? hash.split('-')[0] : hash;

  const url = `${process.env.API_URL}series/${seriesId}/chapters/${slug}`;
  const data = await fetch(url).then((res) => res.json()).catch((err) => {
    console.error(err);
    return {
      notFound: true
    };
  });

  const listUrl = `${process.env.API_URL}series/${seriesId}/chapters/list`;
  const chapterList = await fetch(listUrl).then((res) => res.json()).catch((err) => {
    console.error(err);
    return {
      notFound: true
    };
  });
  if (!data.series_id) {
    return {
      notFound: true
    };
  }

  const fullhash = `${data.series_id}-${data.series_slug}`;

  if (!(hash === fullhash)) {
    return {
      redirect: {
        destination: `/read/${fullhash}/${slug}`,
        permanent: true
      }
    };
  }

  const featuredData = await fetch(`${process.env.API_URL}feed`)
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

  return {
    props: {
      title: data.title,
      subtitle: data.subtitle,
      seriesTitle: data.series_title,
      data: data.data,
      description: data.series_description,
      cover: data.series_poster_uuid,
      chapterList,
      chapterID: data.id,
      seriesID: data.series_id,
      hash,
      slug,
      fullhash,
      suggestions
    },
    revalidate: 5
  };
}

export default Chapter;
