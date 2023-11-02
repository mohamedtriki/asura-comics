function StandaloneChapterSelector({
  chapTitle, chapterList, hash, chapterID, topPadding
}) {
  // let current;
  // chapterList.map((chapter, i) => {
  //   if (chapter.id === chapterID) current = i;
  //   return 0;
  // });

  if (topPadding) {
    return (
      <div className="chapter-section my-2">

        <div className="d-flex">
          <div className="dropdown">
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
              {chapterList.sort((a, b) => b.order - a.order).map((chapter) => (
                chapter.id === chapterID ? (
                  <li key={chapter.id} className="selected">
                    <a
                      className="dropdown-item active"
                      style={{
                        width: '170px',
                      }}
                    >
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
        </div>
      </div>
    );
  }

  return (

    <div className="chapter-section">

      <div className="d-flex">
        <div className="dropdown">
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
            {chapterList.sort((a, b) => b.order - a.order).map((chapter) => (
              chapter.id === chapterID ? (
                <li key={chapter.id} className="selected">
                  <a
                    className="dropdown-item active"
                    style={{
                      width: '170px',
                    }}
                  >
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
      </div>
    </div>
  );
}

export default StandaloneChapterSelector;
