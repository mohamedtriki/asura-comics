/* eslint-disable no-alert */
/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import Image from 'next/future/image';
import Head from 'next/head';
import { getSession, signIn, useSession } from 'next-auth/react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import generateBlur from '../../utils/generateBlur';
import ComicFilter from '../../components/ComicFilter';
import sortByKey from '../../utils/sortByKey';

const MetaHeader = () => (
  <>
    <title>Bookmarks - Asura Scans</title>
    <meta name="viewport" content="initial-scale=1.0 , minimum-scale=1.0 , maximum-scale=1.0" />
    <meta name="title" content="Bookmarks - Asura Scans" />
    <meta name="description" content="View all your Bookmarks" />
    <meta property="og:site_name" content="Asura Scans" />
    <meta property="og:title" content="Bookmarks - Asura Scans" />
    <meta name="og:description" content="Read Comics" />
    <meta property="og:image" content={`${process.env.NEXT_PUBLIC_IMG_URL}/static/home-cover.jpg`} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta property="twitter:title" content="Bookmarks - Asura Scans" />
    <meta name="twitter:description" content="Read Comics" />
    <meta property="twitter:image" content={`${process.env.NEXT_PUBLIC_IMG_URL}/static/home-cover.jpg`} />
    <meta property="og:url" content={`${process.env.NEXT_PUBLIC_SITE_URL}bookmark`} />
    <link rel="canonical" href={process.env.NEXT_PUBLIC_SITE_URL} />
  </>
);

const Block = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  notifications, seriesId, image, title, unread, chapters, rating, type = 'desktop'
}) => {
  const { data: session } = useSession();
  const router = useRouter();
  const deleteBookmark = () => {
    const uid = session.user.userid;
    // if (session) {

    const url = '/api/deleteBookmark';

    axios
      .post(url, {
        seriesId,
        uid,
      })
      .then((res) => {
        if (res.status === 200) {
          alert('Bookmark deleted');
          router.reload(window.location.pathname);
        } else {
          alert('Something went wrong');
        }
      });
  };

  if (type !== 'desktop') {
    return (
      <div className="row m-0 p-0 ultrawide position-relative mt-3">
        <Head>
          <MetaHeader />
        </Head>
        <div className="content p-3">
          <div className="d-flex">
            <div>
              <Image
                src={image}
                className="w-100 mainImage"
                layout="raw"
                height="170"
                width="220"
                placeholder="blur"
                blurDataURL={generateBlur(220, 170)}
                unoptimized
              />
            </div>

            <div style={{ marginLeft: '1rem', width: '100%' }}>
              <div className="d-flex">
                <div className="me-auto" style={{ width: '100%' }}>
                  <h2 className="clamp">{title}</h2>

                  {/* <div className="d-flex"> */}
                  {/*  <div className="me-auto"> */}
                  {/*    <label className="color-grey font-10">Read out</label> */}
                  {/*    <h5 className="color-purple font-14 font-700 mb-0">{`${unread}/${chapters}`}</h5> */}
                  {/*  </div> */}

                  {/*  <div className="ms-auto"> */}
                  {/*    <label className="color-grey font-10">Progress</label> */}

                  {/*    <div className="progress w-129 mt-1"> */}
                  {/*      <div */}
                  {/*        className="progress-bar" */}
                  {/*        role="progressbar" */}
                  {/*        // style={{ width: '75%' }} */}
                  {/*        aria-valuenow="0" */}
                  {/*        aria-valuemin="0" */}
                  {/*        aria-valuemax="100" */}
                  {/*      /> */}
                  {/*    </div> */}
                  {/*  </div> */}
                  {/* </div> */}
                </div>

                {/* Modal */}
                <div className="ms-auto d-flex justify-content-center align-items-center">
                  <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <svg width="3" height="15" viewBox="0 0 3 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z"
                        fill="white"
                      />
                      <path
                        d="M3 7.5C3 8.32843 2.32843 9 1.5 9C0.671573 9 0 8.32843 0 7.5C0 6.67157 0.671573 6 1.5 6C2.32843 6 3 6.67157 3 7.5Z"
                        fill="white"
                      />
                      <path
                        d="M3 13.5C3 14.3284 2.32843 15 1.5 15C0.671573 15 0 14.3284 0 13.5C0 12.6716 0.671573 12 1.5 12C2.32843 12 3 12.6716 3 13.5Z"
                        fill="white"
                      />
                    </svg>
                  </a>

                  <div
                    className="modal fade"
                    id="exampleModal"
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog ">
                      <div className="modal-content bg-drkpurple px-3">
                        <div className="modal-header">
                          <h5 className="modal-title font-20 font-400 " id="exampleModalLabel">
                            {title}
                          </h5>
                        </div>

                        <div className="modal-body">
                          {/* <a href="#" className="d-flex align-items-center"> */}
                          {/*  <img src="img/pause.svg" style={{ width: '17px', height: '17px' }} /> */}
                          {/*  <span className="ms-3 font-20 color-white">Pause</span> */}
                          {/* </a> */}

                          {/* <a href="#" className="d-flex align-items-center my-3" onClick={deleteBookmark}> */}
                          {/*  <img src="img/delete.svg" style={{ width: '17px', height: '17px' }} /> */}
                          {/*  <span className="ms-3 font-20 color-white">Delete</span> */}
                          {/* </a> */}
                          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
                          <span className="d-flex align-items-start my-3 font-20 color-white" onClick={deleteBookmark}>
                            Delete Bookmark
                          </span>

                          <a href="#" data-bs-dismiss="modal">
                            <span className="font-20 color-white">Cancel</span>
                          </a>
                        </div>
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
  }

  return (
    <div className="col-sm-3 mt-4">
      <div className="content p-3 d-flex flex-column">
        {/* <div className="position-relative"> */}
        {/*  <label className="rating position-absolute font-700 font-12">{notifications}</label> */}
        {/* </div> */}

        <div className="mb-4 ">
          <a href={`/comics/${seriesId}`}>
            <Image
              src={image}
              className="w-100 mainImage"
              layout="raw"
              height="170"
              width="220"
              placeholder="blur"
              blurDataURL={generateBlur(220, 170)}
              unoptimized
            />
          </a>
        </div>

        <div className="px-3 d-flex flex-column justify-content-around gap-4">
          <h2 className="font-20 text-center clamp">{title}</h2>

          {/* <div className="d-flex px-5 mt-4 mb-3"> */}
          {/*  <div className="me-auto d-flex flex-column"> */}
          {/*    <label className="color-grey">You have read</label> */}
          {/*    <label className="color-purple font-24">{`${unread}/${chapters}`}</label> */}
          {/*  </div> */}

          {/*  <div className="ms-auto d-flex flex-column"> */}
          {/*    <label className="color-grey">Rating</label> */}
          {/*    <label className="color-purple font-24">{rating}</label> */}
          {/*  </div> */}
          {/* </div> */}

          {/* <div> */}
          <a href={`/comics/${seriesId}`}>
            <button type="button" className="btn w-100 theme-btn-dark me-auto align-self-center">
              Go to series page
            </button>
          </a>

          <button type="button" className="btn w-100 theme-btn-dark me-auto align-self-center" onClick={deleteBookmark}>
            Delete Bookmark
          </button>

          {/* <button type="button" className="btn theme-btn-dark bg-dullPurple  border-dullPurple ms-auto"> */}
          {/*  Pause */}
          {/* </button> */}
          {/* </div> */}

          {/*  <div className="progress mt-4 w-100"> */}
          {/*    <div */}
          {/*      className="progress-bar" */}
          {/*      role="progressbar" */}
          {/*      // style={{ width: '75%' }} */}
          {/*      aria-valuenow="0" */}
          {/*      aria-valuemin="0" */}
          {/*      aria-valuemax="100" */}
          {/*    /> */}
          {/*  </div> */}
        </div>
      </div>
    </div>
  );
};

const headingContent = {
  title: 'Bookmarks',
  content: '',
};

const Bookmark = ({ fetchedSeries, authorized }) => {
  const [series, setSeries] = useState(fetchedSeries);

  const sortFilters = ['Last updated', 'Rating', 'Z-A'];

  const array2Object = (arr) => {
    const obj = arr.reduce((accumulator, value, i) => ({ ...accumulator, [i + 1]: value }), {});
    return obj;
  };

  const sort = array2Object(sortFilters);
  const [selectedSortID, setSelectedSortID] = useState(1);

  useEffect(() => {
    if (authorized) {
      const handleOptionsSort = (options) => {
        const _options = options;

        // enum of sort
        // {1: 'Last updated', 2: 'Rating', 3: 'Z-A'}

        if (Number(selectedSortID) === 0) {
          _options.sort(sortByKey('title', true));
        }

        if (Number(selectedSortID) === 1) {
          _options.sort(sortByKey('updated_at'));
        }

        if (Number(selectedSortID) === 2) {
          _options.sort(sortByKey('rating'));
        }

        if (Number(selectedSortID) === 3) {
          _options.sort(sortByKey('title'));
        }

        return _options;
      };

      const data = [...fetchedSeries];
      handleOptionsSort(data);

      setSeries(data);
    }
  }, [selectedSortID, fetchedSeries, authorized]);

  /* not logged in */
  if (!authorized) {
    return (
      <div className="bookmark-pg">
        <Head>
          <MetaHeader />
        </Head>
        <div className="p-0">
          <div className="header">
            <div className="row m-0 p-0 position-relative" />
          </div>

          <div className="row m-0 p-0 position-relative section-margin bookmark-section">
            <div className="container main-container vh-100">
              {/* Desktop Content */}
              <div className="row m-0 p-0 justify-content-center position-relative desktop my-3">
                <button type="button" className="btn theme-btn signIn" onClick={signIn}>
                  You need to Sign in
                </button>
              </div>

              {/* Mobile Content */}
              <div
                className="row m-0 p-0 justify-content-center  position-relative mobile mt-3"
                style={{ marginTop: '25vh !important' }}
              >
                <button type="button" className="btn theme-btn signIn" onClick={signIn}>
                  You need to Sign in
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* no bookmarks */
  if (series.length === 0) {
    return (
      <div className="bookmark-pg">
        <Head>
          <MetaHeader />
        </Head>

        {/* <img
          src={`${process.env.NEXT_PUBLIC_IMG_URL}img/bookmark-bg.png`}
          className="p-0 desktop w-100 banner"
        />
        <img
          src={`${process.env.NEXT_PUBLIC_IMG_URL}img/bookmark-bg-mb.png`}
          className="p-0 mobile w-100"
        /> */}

        <div className="p-0">
          <div className="header">
            <div className="row m-0 p-0 position-relative" />
          </div>

          <div className="row m-0 p-0 position-relative section-margin bookmark-section">
            <div className="container main-container">
              {/* Title */}
              <div className="row m-0 p-0 position-relative header-content text-center">
                <h2>{headingContent.title}</h2>
                <p className="color-grey px-sm-0 px-3">{headingContent.content}</p>
              </div>

              {/* Desktop Content */}
              <div className="row m-0 p-0 position-relative desktop my-3 vh-100">
                <h6 className="mt-2">No Bookmarks saved</h6>
              </div>

              {/* Mobile Content */}
              <div className="row m-0 p-0 position-relative mobile mt-3 vh-100">
                <h6>No Bookmarks saved</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* normal */
  return (
    <div className="bookmark-pg">
      <Head>
        <MetaHeader />
      </Head>

      <div className="p-0">
        <div className="header">
          <div className="row m-0 p-0 position-relative" />
        </div>

        <div className="row m-0 p-0 position-relative section-margin bookmark-section">
          <div className="container main-container">
            {/* Title */}
            <div className="row m-0 p-0 position-relative header-content text-center">
              <h2>{headingContent.title}</h2>
              <p className="color-grey px-sm-0 px-3">{headingContent.content}</p>
            </div>

            {/* Filter */}
            <div className="row m-0 p-0 position-relative d-flex justify-content-end custom-dropdown sortFilter mt-3">
              <ComicFilter
                filter={sort}
                title="Sort by: (A-Z)"
                selected={selectedSortID}
                setSelected={setSelectedSortID}
              />
            </div>

            {/* Desktop Content */}
            <div className="row m-0 p-0 position-relative desktop my-3">
              {series.map((item, i) => (
                <Block key={i} {...item} />
              ))}
            </div>

            {/* Mobile Content */}
            <div className="row m-0 p-0 position-relative mobile mt-3">
              {series.map((item, i) => (
                <Block key={i} type="mobile" {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      props: {
        authorized: false,
      },
    };
  }

  const { user } = session;

  const uid = user.userid;
  const bookmarkUrl = `${process.env.API_URL}user/${uid}/bookmarks`;

  const bookmarkData = await fetch(bookmarkUrl)
    .then((res) => res.json())
    .catch((err) => {
      console.error(err);
      return {
        notFound: true,
      };
    });

  const { success, series } = bookmarkData;

  const controller = new AbortController();
  if (process.env.node_env === 'production') {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const timeoutId = setTimeout(() => controller.abort(), 100);
  }
  if (process.env.node_env === 'development') {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const timeoutId = setTimeout(() => controller.abort(), 1000);
  }

  const fetchSeriesData = async () => {
    if (!series) return [];

    const seriesData = await Promise.all(
      series.map((seriesID) => {
        const url = `${process.env.API_URL}series/${seriesID}`;
        return fetch(url, { signal: controller.signal })
          .then((res) => res.json())
          .catch((err) => {
            console.error(err);
            return {
              notFound: true,
            };
          });
      }),
    );

    const result = seriesData.map((item) => ({
      notifications: 0,
      image: `${process.env.NEXT_PUBLIC_IMG_URL}thumbnail/${item.poster_uuid}.jpg`,
      title: item.title,
      seriesId: item.id,
      unread: 0,
      updated_at: item.updated_at === null ? 0 : item.updated_at,
      rating: item.score,
      chapters: !item.chapters ? 0 : item.chapters.length,
    }));
    result.sort(sortByKey('updated_at'));
    return result;
  };

  const fetchedSeries = await fetchSeriesData();

  // const historyUrl = `${process.env.API_URL}user/${uid}/history`;

  // const historyData = await fetch(historyUrl)
  //   .then((res) => res.json())
  //   .catch((err) => {
  //     console.error(err);
  //     return {
  //       notFound: true,
  //     };
  //   });

  // console.log(historyData);

  return {
    props: {
      success,
      authorized: true,
      fetchedSeries,
    },
  };
}

export default Bookmark;
