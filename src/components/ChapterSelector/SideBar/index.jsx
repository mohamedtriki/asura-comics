/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/control-has-associated-label */

import { useEffect } from 'react';

function SideBarChapterSelector({
  title, chapTitle, chapterList, hash, chapterID
}) {
  let current;
  chapterList.map((chapter, i) => {
    if (chapter.id === chapterID) current = i;
    return 0;
  });

  const closeSelector = () => {
    const ChapterSelectionContainer = document.querySelector('.d-flex.chapter-selection');
    const ChapterSelection = document.querySelector('.chapterselectmain');
    const ChapterSelectionAtag = document.querySelector('.chapterselectbtn a');
    const ChapterSelectionBtnContainer = document.querySelector('.chapterselectbtn');
    const ChapterSelectionImg = document.querySelector('.chapterselectbtn img');
    if (ChapterSelectionContainer.dataset.open === 'yes') {
      ChapterSelectionContainer.dataset.open = 'no';
      ChapterSelectionBtnContainer.style.height = `${ChapterSelection.offsetHeight}px`;
      ChapterSelectionContainer.style.right = `-${ChapterSelection.offsetWidth}px`;
      ChapterSelectionContainer.style.bottom = 'unset';
      ChapterSelectionImg.style.display = 'none';
      if (ChapterSelectionAtag.querySelector('svg')) {
        ChapterSelectionAtag.querySelector('svg').style.display = 'initial';
      } else {
        ChapterSelectionAtag.innerHTML += `<svg style="width: 70px;" xmlns="http://www.w3.org/2000/svg" width="94" height="85" viewBox="0 0 94 85" fill="none">
        <path d="M0 16.0244C0 7.18786 7.16344 0.0244141 16 0.0244141H94V84.0244H16C7.16344 84.0244 0 76.861 0 68.0244V16.0244Z" fill="#7334AE"/>
        <path d="M37.749 50.4394L46.1457 42.0244L37.749 33.6094L40.334 31.0244L51.334 42.0244L40.334 53.0244L37.749 50.4394Z" fill="white" style="transform: rotate(180deg);transform-origin: 47.5% 50%;"/>
        </svg>`;
      }
    } else {
      ChapterSelectionContainer.dataset.open = 'yes';
      ChapterSelectionBtnContainer.style.height = '';
      ChapterSelectionAtag.querySelector('svg').style.display = 'none';
      ChapterSelectionImg.style.display = 'initial';
      ChapterSelectionContainer.style.right = 0;
      ChapterSelectionContainer.style.bottom = 'unset';
      ChapterSelection.style.border = 'none';
      setInterval(() => { ChapterSelection.style.border = '1.4px solid #7334AE'; }, 100);
    }
  };

  function mobile() {
    if (window.outerWidth >= 768) return;
    console.log(window.outerWidth);
    const BackToTopBtn = document.querySelector('#btn-back-to-top');
    window.addEventListener('scroll', () => {
      const ChapterSelectionContainer = document.querySelector('.d-flex.chapter-selection');
      const ChapterSelection = document.querySelector('.chapterselectmain');
      ChapterSelectionContainer.style.top = 'unset';
      ChapterSelectionContainer.style.bottom = `-${ChapterSelection.offsetWidth}px`;
      BackToTopBtn.style.bottom = '40px';
    });

    window.addEventListener('click', () => {
      const ChapterSelectionContainer = document.querySelector('.d-flex.chapter-selection');
      ChapterSelectionContainer.style.bottom = 0;
      ChapterSelectionContainer.style.top = 'unset';
      ChapterSelectionContainer.style.right = 0;
      BackToTopBtn.style.bottom = '80px';
    });
  }

  useEffect(() => {
    if (window.outerHeight > 768) {
      window.addEventListener('scroll', () => {
        const ChapterSelectionContainer = document.querySelector('.d-flex.chapter-selection');
        if (ChapterSelectionContainer.dataset.open === 'yes') {
          document.querySelector('.chapterselectbtn a').click();
        }
      });
    }
    mobile();
  }, []);
  return (
    <div className="chapter-section">
      <div className="d-flex chapter-selection" style={{ transition: 'right 500ms' }} data-open="yes">
        <div className="d-md-flex d-none align-items-center chapterselectbtn">
          <a className="side-btn" onClick={closeSelector}>
            <img width={70} src={`${process.env.NEXT_PUBLIC_IMG_URL}img/chapter/big-next-btn-dark.svg`} />
          </a>
        </div>
        <div className="container-style bg-purplish p-4 w-374 px-sm-4 px-5 chapterselectmain">
          <h5 className="mt-1">{title}</h5>
          <h4 className="font-16 mt-sm-5 mt-4">Chapters</h4>
          <div className="d-flex mt-3">
            <a href={`/read/${hash}/${chapterList[current - 1]?.slug}`} className={`${current < 1 ? 'disabled' : ''}`}>
              <svg width="40" height="43" viewBox="0 0 40 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="0.0244141" width="40" height="42" rx="8" fill="#7334AE" />
                <path
                  d="M23.1265 25.2319L18.9282 21.0244L23.1265 16.8169L21.834 15.5244L16.334 21.0244L21.834 26.5244L23.1265 25.2319Z"
                  fill="white"
                />
              </svg>
            </a>
            <div className="dropdown mx-3 ">
              <button
                type="button"
                className="btn dropdown-toggle"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onClick={() => {
                  document.querySelector('ul.dropdown-menu li.selected')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span className="me-3">{chapTitle}</span>
                <svg
                  width="10"
                  height="6"
                  className="ms-sm-5"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    position: 'absolute',
                    right: '12px',
                    top: '45%'
                  }}
                >
                  <path d="M0 0.0244141L5 5.02441L10 0.0244141H0Z" fill="white" />
                </svg>
              </button>
              <ul
                className="dropdown-menu"
                style={{
                  overflowY: `${chapterList.length > 5 ? 'scroll' : ''}`,
                  height: `${chapterList.length > 5 ? '300px' : ''}`
                }}
                aria-labelledby="dropdownMenuButton"
              >
                {chapterList.map((chapter) => (
                  chapter.id === chapterID ? (
                    <li
                      key={chapter.id}
                      className="selected"
                      style={{
                        width: '170px',
                      }}
                    >
                      <a className="dropdown-item active">
                        {chapter.title}
                      </a>
                    </li>
                  ) : (
                    <li key={chapter.id}>
                      <a
                        className="dropdown-item"
                        style={{
                          width: '170px',
                        }}
                        href={`/read/${hash}/${chapter.slug}`}
                      >
                        {chapter.title}
                      </a>
                    </li>
                  )
                ))}
              </ul>
            </div>
            <a href={`/read/${hash}/${chapterList[current + 1]?.slug}`} className={`${current === chapterList.length - 1 ? 'disabled' : ''}`}>
              <svg width="40" height="43" viewBox="0 0 40 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect
                  x="40"
                  y="42.0244"
                  width="40"
                  height="42"
                  rx="8"
                  transform="rotate(-180 40 42.0244)"
                  fill="#7334AE"
                />
                <path
                  d="M16.8735 16.8169L21.0718 21.0244L16.8735 25.2319L18.166 26.5244L23.666 21.0244L18.166 15.5244L16.8735 16.8169Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
          {/* Quality */}
          {/* <h4 className="font-16 mt-4">Quality</h4>
          <div className="d-flex py-2">
            <button type="button" className="btn theme-btn-dark left-half-radius h-42">
              LQ
            </button>
            <button type="button" className="btn theme-btn right-half-radius h-42">
              HQ
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default SideBarChapterSelector;
