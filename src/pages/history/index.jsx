/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/control-has-associated-label */

import Head from 'next/head';
import ComicBlock from '../../components/ComicBlock';

/* 9 arrays */
const HistoryBlock = ({
  image, title, text, currentChapter, readOn, index
}) => {
  const alterClassName = () => {
    if (index === 6) return 'col-sm-4 mt-sm-5 mt-4 desktop';
    if (index === 0) return 'col-sm-4 mt-sm-3 mt-4';
    if (index === 1) return 'col-sm-4 mt-sm-3 mt-4';
    if (index === 2) return 'col-sm-4 mt-sm-3 mt-4';
    return 'col-sm-4 mt-sm-5 mt-4';
  };

  return (
    <div className={alterClassName()}>
      <div className="content">
        <div className="d-flex">
          <div className="me-auto">
            <img src={image} className="comic-img" />
          </div>

          <div className="ms-auto ps-sm-4 ps-3">
            <h4>{title}</h4>

            <p className="font-14 color-grey my-3">{text}</p>

            <div className="d-flex mt-sm-4">
              <div className="container-style history-label p-2 px-sm-3 me-3">
                <h5 className="font-12 font-400 color-purple font-uppercase mb-0">chapter</h5>
                <label className="font-14">{currentChapter}</label>
              </div>

              <div className="container-style history-label p-2 px-sm-3">
                <h5 className="font-12 font-400 color-purple font-uppercase mb-0">viewed on</h5>
                <label className="font-14">{readOn}</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const historyContent = [
  {
    image: 'img/slider/img2.png',
    title: 'Blue-Deep',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    currentChapter: 43,
    readOn: '13 Apr 2022',
  },
  {
    image: 'img/slider/img4.png',
    title: 'Euwen',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    currentChapter: 78,
    readOn: '28 Apr 2022',
  },
  {
    image: 'img/slider/img30.png',
    title: 'Manhawo Chaplin',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    currentChapter: 26,
    readOn: '13 Apr 2022',
  },
  {
    image: 'img/slider/img12.png',
    title: 'Asura',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    currentChapter: 114,
    readOn: '16 Apr 2022',
  },
  {
    image: 'img/slider/img31.png',
    title: 'Sen',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    currentChapter: 43,
    readOn: '13 Apr 2022',
  },
  {
    image: 'img/slider/img2.png',
    title: 'Blue-Deep',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    currentChapter: 43,
    readOn: '13 Apr 2022',
  },
  {
    image: 'img/slider/img2.png',
    title: 'Blue-Deep',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    currentChapter: 43,
    readOn: '13 Apr 2022',
  },
  {
    image: 'img/slider/img4.png',
    title: 'Euwen',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    currentChapter: 78,
    readOn: '28 Apr 2022',
  },
  {
    image: 'img/slider/img30.png',
    title: 'Manhawo Cghaplin',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    currentChapter: 26,
    readOn: '13 Apr 2022',
  },
];

const LastReadBlock = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  image, title, link, text, currentChapter, readOn
}) => (
  <div className="row m-0 p-0 position-relative">
    <div className="d-flex p-0 m-0 inner-sec">
      <img src={image} className="p-0 profile-img" />

      <div className="m-left d-flex align-items-center py-3">
        <div className="d-flex justify-content-center flex-column">
          <h2 className="mb-0">{title}</h2>

          {/* <a href={link}> */}
          {/*  <a className="color-purple font-24 m-0">Last Read</a> */}
          {/* </a> */}

          <p className="color-grey font-14 mt-sm-3 chapt-desc desktop" style={{ whiteSpace: 'pre' }}>
            {text}
          </p>
          <p className="color-grey font-14 mt-sm-3 chapt-desc mobile">{text}</p>

          <div className="d-flex my-2">
            <button type="button" className="btn theme-btn h-52 w-193">
              Read now
            </button>
            <div className="container-style history-label p-2 px-3 mx-3">
              <h5 className="font-12 font-400 color-purple font-uppercase mb-0">chapter</h5>
              <label className="font-14">{currentChapter}</label>
            </div>
            <div className="container-style history-label p-2 px-3">
              <h5 className="font-12 font-400 color-purple font-uppercase mb-0">viewed on</h5>
              <label className="font-14">{readOn}</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const lastReadContent = {
  image: 'img/profile/history-profile.png',
  title: 'Grappler Baki',
  link: '/',
  text: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
  laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
  architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
  voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
  ratione voluptatem sequi nesciunt.
  
  Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
  velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam
  aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
  ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur
  Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae
  consequatur
  `,
  currentChapter: 78,
  readOn: '28 Apr 2022',
};

const recommendationContent = [
  {
    link: '/comics',
    tag: 'Hot 🔥',
    image: 'img/comics/comic-1.png',
    title: 'Legend of Asura –The Venom Dragon',
  },
  {
    link: '/comics',
    tag: 'Featured 💥',
    image: 'img/comics/comic-2.png',
    title: 'The Max Level Hero has Returned',
  },
  {
    link: '/comics',
    tag: 'Featured 💥',
    image: 'img/comics/comic-11.png',
    title: 'Return Of The Shattered Constellation',
  },
  {
    link: '/comics',
    tag: 'Hot 🔥',
    image: 'img/comics/comic-4.png',
    title: 'The World After The End of the Era',
  },
  {
    link: '/comics',
    tag: 'Featured 💥',
    image: 'img/comics/comic-5.png',
    title: 'Reincarnation of the Suicidal Battle God',
  },
  {
    link: '/comics',
    tag: 'Featured 💥',
    image: 'img/comics/comic-6.png',
    title: 'Maxed Out Leveling In Battle',
  },
];

const history = () => (
  <div className="history-pg">
    <Head>
      <title>Asura Scans - History</title>
    </Head>

    {/* <img
      src={`${process.env.NEXT_PUBLIC_IMG_URL}img/history/history-bg.png`}
      className="p-0 desktop w-100 banner"
    />
    <img
      src={`${process.env.NEXT_PUBLIC_IMG_URL}img/history/history-bg-mb.png`}
      className="p-0 mobile w-100"
    /> */}

    <div className="p-0">
      <div className="header">
        <div className="row m-0 p-0 position-relative" />
      </div>

      {/* Main content  */}
      <div className="row m-0 p-0 position-relative history-section">
        {/* Title */}
        <div className="row m-0 p-0 position-relative header-content text-center">
          <h2 className="">Reading History</h2>

          <p className="color-grey px-5 mb-0">
            Reading history is tied to your account,
            {' '}
            and will be retained across devices
          </p>
        </div>

        <div className="main-container">
          {/* Last Read */}
          <div className="container  con-history-style p-0 my-5 desktop">
            <LastReadBlock {...lastReadContent} />
          </div>

          {/* History */}
          <div className="container  p-0">
            <div className="row m-0 p-0 position-relative px-sm-0 px-2 mt-3 mt-sm-0">
              {historyContent.map((item, i) => (
                <HistoryBlock key={i} {...item} index={i} />
              ))}
            </div>

            <div className="row m-0 p-0 position-relative desktop section-margin">
              <div className="d-flex buttons-sec">
                <a href="src/pages/history/index#" className="me-auto">
                  <svg width="71" height="57" viewBox="0 0 71 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect
                      x="0.7"
                      y="-0.7"
                      width="68.4"
                      height="54.4"
                      rx="6.7"
                      transform="matrix(-1 0 0 1 70.4 1.97559)"
                      fill="#5B44B0"
                      fillOpacity="0.1"
                    />
                    <path
                      d="M40.252 36.8906L31.8553 28.4756L40.252 20.0606L37.667 17.4756L26.667 28.4756L37.667 39.4756L40.252 36.8906Z"
                      fill="white"
                    />
                    <rect
                      x="0.7"
                      y="-0.7"
                      width="68.4"
                      height="54.4"
                      rx="6.7"
                      transform="matrix(-1 0 0 1 70.4 1.97559)"
                      stroke="#7334AE"
                      strokeWidth="1.4"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <a href="src/pages/history/index#" className="ms-auto">
                  <svg width="71" height="57" viewBox="0 0 71 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1.3" y="1.27559" width="68.4" height="54.4" rx="6.7" fill="#5B44B0" fillOpacity="0.1" />
                    <path
                      d="M30.748 36.8906L39.1447 28.4756L30.748 20.0606L33.333 17.4756L44.333 28.4756L33.333 39.4756L30.748 36.8906Z"
                      fill="white"
                    />
                    <rect
                      x="1.3"
                      y="1.27559"
                      width="68.4"
                      height="54.4"
                      rx="6.7"
                      stroke="#7334AE"
                      strokeWidth="1.4"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="row m-0 p-0 position-relative d-flex justify-content-center my-4 mobile">
              <button type="button" className="btn theme-btn w-90">
                Load more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default history;
