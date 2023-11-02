/* eslint-disable no-console */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable max-len */

import { matchSorter } from 'match-sorter';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState, Fragment } from 'react';
// import Image from 'next/image';
import ComicBlock from '../../components/ComicBlock';
import Searchbar from '../../components/Searchbar';
// import generateBlur from '../../utils/generateBlur';
import ComicFilter from '../../components/ComicFilter';
import sortByKey from '../../utils/sortByKey';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import LeaderboardBTF from '../../components/ads/leaderboardBTF';
import MedRectBTF from '../../components/ads/medRectBTF';
import LeaderboardATF from '../../components/ads/leaderboardATF';
import MedRectATF from '../../components/ads/medRectATF';

const statusFilters = ['Ongoing', 'Dropped', 'Completed', 'Hiatus', 'Season-End'];
const typeFilters = ['Manhwa', 'Manhua'];
const sortFilters = ['Last updated', 'Rating', 'Views', 'Bookmarks', 'Z-A'];

const Series = ({ seriesList, genres, size }) => {
  const router = useRouter();
  const { search, genre: genreQuery } = router.query;

  const array2Object = (arr) => {
    const obj = arr.reduce((accumulator, value, i) => ({ ...accumulator, [i + 1]: value }), {});
    return obj;
  };

  const status = array2Object(statusFilters);
  const type = array2Object(typeFilters);
  const sort = array2Object(sortFilters);

  const [searchInput, setSearchInput] = useState('');
  const [series, setSeries] = useState(seriesList);

  const [selectedGenreID, setSelectedGenreID] = useState(0);
  const [selectedStatusID, setSelectedStatusID] = useState(0);
  const [selectedTypeID, setSelectedTypeID] = useState(0);
  const [selectedSortID, setSelectedSortID] = useState(1);

  // update search input based on query param
  useEffect(() => {
    if (search !== undefined) setSearchInput(search);
    if (search === undefined) setSearchInput('');
  }, [search]);

  // update genre based on query param
  useEffect(() => {
    if (genreQuery !== undefined) setSelectedGenreID(genreQuery);
  }, [genreQuery]);

  // filter series by inputs (search & filters)
  useEffect(() => {
    const handleSearchOptions = () => {
      let _options = seriesList;

      if (selectedGenreID > 0) {
        // TODO: figure how to add this without bugs
        // router.replace(`/comics?genre=${selectedGenreID}`, undefined, { shallow: true });

        _options = _options.filter((option) => {
          const _genres = Object.keys(option.genres);

          const fetchedgenresIDs = _genres.map((id) => Number(id));
          const selected = Number(selectedGenreID);

          return fetchedgenresIDs.includes(selected);
        });
      }

      if (selectedStatusID > 0) {
        _options = _options.filter((option) => {
          const fetched = String(option.status).toLowerCase();
          const selected = String(status[selectedStatusID]).toLowerCase();

          return fetched === selected;
        });
      }

      if (selectedTypeID > 0) {
        _options = _options.filter((option) => {
          const fetched = String(option.type).toLowerCase();
          const selected = String(type[selectedTypeID]).toLowerCase();

          return fetched === selected;
        });
      }

      return _options;
    };

    const handleOptionsSort = (options) => {
      const _options = options;

      // enum of sort
      // {1: 'Last updated', 2: 'Rating', 3: 'Views', 4: 'Bookmarks', 5: 'Z-A'}

      if (Number(selectedSortID) === 1) {
        _options.sort(sortByKey('updated_at'));
      }

      if (Number(selectedSortID) === 2) {
        _options.sort(sortByKey('rating'));
      }

      if (Number(selectedSortID) === 3) {
        _options.sort(sortByKey('views'));
      }

      if (Number(selectedSortID) === 4) {
        _options.sort(sortByKey('bookmarks'));
      }

      if (Number(selectedSortID) === 5) {
        _options.sort(sortByKey('title'));
      }

      return _options;
    };

    const handleSearch = () => {
      const noInput = searchInput.trim().length === 0;

      if (noInput) setSeries(seriesList);

      const options = handleSearchOptions();
      const searched = matchSorter(options, searchInput, {
        keys: ['title'],
      });

      handleOptionsSort(searched);

      setSeries(searched);
    };

    handleSearch();

  // adding status and type to deps would break it
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    searchInput,
    selectedGenreID,
    selectedStatusID,
    selectedTypeID,
    selectedSortID,
    seriesList
  ]);

  const { loadMoreRef, page } = useInfiniteScroll();

  return (
    <div className="comics-pg">
      <Head>
        <title>Asura Scans</title>
      </Head>

      {/* <Image
        src={`${process.env.NEXT_PUBLIC_IMG_URL}img/comics/comic-bg.png`}
        className="p-0 desktop w-100"
        objectFit="contain"
        objectPosition="top"
        layout="fill"
        priority
        alt="background"
        // placeholder="blur"
        // blurDataURL={generateBlur('100vw', '100vh')}
        unoptimized
      />
      <Image
        src={`${process.env.NEXT_PUBLIC_IMG_URL}img/comics/comic-bg-mb.png`}
        alt="background"
        className="p-0 mobile w-100"
        layout="fill"
        objectFit="contain"
        objectPosition="top"
        // placeholder="blur"
        // blurDataURL={generateBlur('100vw', '100vh')}
        priority
        unoptimized
      /> */}

      <div className="p-0 ultrawide">
        <div className="header section-margin">
          <div className="row m-0 p-0 position-relative" />
        </div>

        <div className="row m-0 p-0 position-relative my-3 comics-section latestUpdates-section">
          <div className="col-2 d-xl-block d-none " />
          <div className="container col-xs-12 col-sm-12 col-md-12 col-lg-8 col-xl-8">
            <div className="asuraads">
              {(size.width !== undefined && size.width > 569) ? <LeaderboardATF /> : <MedRectATF />}
            </div>

            {/* Title */}
            <div className="row m-0 p-0 position-relative header-content text-center">
              <h2>Comics</h2>
            </div>

            {/* Filters */}
            <div className="row m-0 p-0 position-relative comic-filter-row mt-sm-5 mt-3 dropdowns-sec">
              <ComicFilter
                filter={genres}
                title="Genres: All"
                selected={selectedGenreID}
                setSelected={setSelectedGenreID}
              />
              <ComicFilter
                filter={status}
                title="Status: All"
                selected={selectedStatusID}
                setSelected={setSelectedStatusID}
              />
              <ComicFilter filter={type} title="Type: All" selected={selectedTypeID} setSelected={setSelectedTypeID} />
              <ComicFilter
                filter={sort}
                title="Sort by: (A-Z)"
                selected={selectedSortID}
                setSelected={setSelectedSortID}
              />

              <Searchbar placeholder="Search comic" />

              <button type="button" className="btn theme-btn filterBtn">
                Filter
              </button>
              <div className="asuraads">
                {(size.width !== undefined && size.width > 569) ? <LeaderboardBTF /> : <MedRectBTF />}
              </div>
            </div>

            {/* Content */}
            <div className="row m-0 p-0 position-relative">
              {series.slice(0, page).map((item, i) => (
                <Fragment key={item.id}>
                  <ComicBlock key={item.id} index={i} {...item} />
                  {(size.width !== undefined && size.width < 569 && (i + 1) % 4) === 0 && (
                    <div id={(i + 1) > 8 ? 'loadmoreads' : ''} className="asuraads">
                      <MedRectBTF />
                    </div>
                  )}
                  {(size.width !== undefined && size.width >= 569 && (i + 1) % 12) === 0 && (
                    <div id={(i + 1) > 12 ? 'loadmoreads' : ''} className="asuraads">
                      <LeaderboardBTF />
                    </div>
                  )}
                </Fragment>
              ))}
            </div>
          </div>

          <div className="col-2 d-xl-block d-none " />
        </div>

        {/* scroll observer */}
        <div className="col-12 h-38" ref={loadMoreRef} />
      </div>
      <div className="asuraads">
        {(size.width !== undefined && size.width > 569) ? <LeaderboardBTF /> : <MedRectBTF />}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  if (typeof window !== 'undefined') return;
  const url = `${process.env.API_URL}series`;

  const fetchedData = await fetch(url)
    .then((res) => res.json())
    .catch((err) => {
      console.error(err);
      return {
        notFound: true,
      };
    });

  if (!fetchedData) {
    return {
      notFound: true,
    };
  }

  const genreUrl = `${process.env.API_URL}series/genres`;

  const fetchedGenres = await fetch(genreUrl)
    .then((res) => res.json())
    .catch((err) => {
      console.error(err);
      return {
        notFound: true,
      };
    });

  const series = fetchedData.map((item) => ({
    link: `/comics/${item.id}-${item.slug}`,
    tag: 'Hot 🔥',
    image: `${process.env.NEXT_PUBLIC_IMG_URL}thumbnail/${item.poster_uuid}.jpg`,
    title: item.title,
    genres: item.genres,
    rating: item.score,
    id: item.id,
    slug: item.slug,
    type: item.type,
    status: item.status,
    views: item.total_views,
    bookmarks: item.total_follows,
    created_at: item.created_at === null ? 0 : item.created_at,
    updated_at: item.updated_at === null ? 0 : item.updated_at,
  }));

  const seriesPreSorted = series.sort(sortByKey('updated_at'));

  return {
    props: {
      seriesList: seriesPreSorted,
      genres: fetchedGenres
    },
    revalidate: 5
  };
}

export default Series;
