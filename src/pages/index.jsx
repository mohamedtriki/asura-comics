import Head from 'next/head';

import {
  AltFeaturedSeriesSlider,
  FeaturedSeriesSliderMobile,
  LatestUpdates,
  PopularSliderLR,
  PopularSliderMobile
} from '../components/Homepage';

import RegisterBanner from '../components/RegisterBanner';
import relativeTime from '../utils/relativeTime';

export default function Home({
  latestUpdates,
  bannerSlides,
  bannerSlidesMobile,
  popularSlides,
  popularContentSlides,
  size
}) {
  const popularSliderLRProps = { size, popularContentSlides, popularSlides };
  const latestUpdatesProps = { size, updates: latestUpdates };
  const popularSliderMobileProps = { size, popularContentSlides };

  return (
    <div className="homepage">
      <Head>
        <title>Asura Scans</title>
        <meta name="viewport" content="initial-scale=1.0 , minimum-scale=1.0 , maximum-scale=1.0" />
        <meta name="title" content="Asura Scans - Read Comics" />
        <meta name="description" content="Read Comics" />
        <meta property="og:site_name" content="Asura Scans" />
        <meta property="og:title" content="Asura Scans - Read Comics" />
        <meta name="og:description" content="Read Comics" />
        <meta property="og:image" content={`${process.env.NEXT_PUBLIC_IMG_URL}/static/home-cover.jpg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Asura Scans - Read Comics" />
        <meta name="twitter:description" content="Read Comics" />
        <meta property="twitter:image" content={`${process.env.NEXT_PUBLIC_IMG_URL}/static/home-cover.jpg`} />
        <meta property="og:url" content={process.env.NEXT_PUBLIC_SITE_URL} />
        <link rel="canonical" href={process.env.NEXT_PUBLIC_SITE_URL} />
      </Head>

      <div className="p-0">
        <AltFeaturedSeriesSlider slides={bannerSlides} />
        <FeaturedSeriesSliderMobile content={bannerSlidesMobile} />

        <div className="ultrawide">
          {/* Desktop Popular Series Sliders (L & R) */}
          <PopularSliderLR {...popularSliderLRProps} />

          {/* Latest Updates Grid */}
          <LatestUpdates {...latestUpdatesProps} />

          {/* Mobile Popular Series Slider */}
          <PopularSliderMobile {...popularSliderMobileProps} />

          {/* Register Banner */}
          <RegisterBanner />
        </div>

        {/* Trending Community Collections */}
        {/* <div className="row m-0 p-0 position-relative trending-section section-margin ">
          <div className="d-flex ps-sm-5 px-3 align-items-center">
            <h3 className="ps-sm-5">Trending Community Collections</h3>

            <HomepageFilter />
          </div>

          <div className="row m-0 p-0 position-relative ps-lg-5 my-4 animation-element bounce-up">
            <TrendingSeriesSlider />
          </div>
        </div> */}
        {/* </div> */}
      </div>
    </div>
  );
}


export async function getStaticProps() {
  const data = await fetch(`${process.env.API_URL}feed`).then((res) => res.json());
  // const myUrl = new URL('http://example.com');
  // const data = await fetch(myUrl + '/api');

  // URL="http://localhost:3000"
  // const data = await fetcher(URL + '/api');


  const currentTime = new Date();

  const chapters = (seriesId, seriesSlug, chaps) => chaps
    .sort((a, b) => b.created_at - a.created_at)
    .map((chapter) => {
      const chapterTime = new Date(chapter.created_at * 1000);
      const date = relativeTime(currentTime, chapterTime);

      return {
        link: `/read/${seriesId}-${seriesSlug}/${chapter.slug}`,
        createdAt: date,
        ...chapter,
      };
    });

  const updates = data.latestUpdates.map((update) => ({
    seriesLink: `/comics/${update.id}-${update.slug}`,
    tag: 'Featured 💥',
    image: `${process.env.NEXT_PUBLIC_IMG_URL}thumbnail/${update.poster_uuid}.jpg`,
    title: update.title,
    chapters: chapters(update.id, update.slug, update.chapter_list),
  }));

  const latestUpdates = updates.sort((a, b) => b.chapters[0].created_at - a.chapters[0].created_at);

  const bannerSlides = data.banners.desktop;
  const bannerSlidesMobile = data.banners.mobile;

  const popular = data.popular.map((item) => ({
    link: `/comics/${item.id}-${item.slug}`,
    image: `${process.env.NEXT_PUBLIC_IMG_URL}thumbnail/${item.poster}.jpg`,
    title: item.title,
    content: item.description,
    id: item.id,
    reviews: item.score,
  }));

  const popularFeatured = data.popular.map((item) => ({
    link: `/comics/${item.id}-${item.slug}`,
    image: `${process.env.NEXT_PUBLIC_IMG_URL}poster/${item.poster}.jpg`,
    title: item.title,
    content: item.description,
    id: item.id,
    rating: item.score,
    reviews: item.reviews
  }));

  const popularSlides = [popular.slice(4, 10), popular.slice(11, 17)];
  const popularContentSlides = popularFeatured.slice(0, 4);

  return {
    props: {
      bannerSlides,
      bannerSlidesMobile,
      popularSlides,
      popularContentSlides,
      latestUpdates,
    },
    revalidate: 5
  };
}
