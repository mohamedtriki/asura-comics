/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { matchSorter } from 'match-sorter';
import { useEffect, useState } from 'react';
import CloseIcon from '../../asset/svgs/CloseIcon';
import SearchIcon from '../../asset/svgs/SearchIcon';
import SearchBlock from '../SearchBlock';

const SearchModal = () => {
  const [searchInput, setSearchInput] = useState('');

  const onInputChange = (e) => setSearchInput(e.target.value);

  const clearSearch = () => {
    setSearchInput('');
  };

  const [isEmpty, setIsEmpty] = useState(true);

  // is search empty
  useEffect(() => {
    if (searchInput.trim().length > 0) setIsEmpty(false);
    else setIsEmpty(true);
  }, [searchInput]);

  const [series, setSeries] = useState([]);

  // fetch series
  useEffect(() => {
    const fetchSeriesForSearch = async () => {
      const data = await fetch('/api/fetchSeries').then((resp) => resp.json());
      if (data.series) setSeries(data.series);
    };

    fetchSeriesForSearch();
  }, []);

  const [searchResults, setSearchResults] = useState([]);

  // filter series with input
  useEffect(() => {
    if (!isEmpty) {
      const options = series;
      const searched = matchSorter(options, searchInput, {
        keys: ['title'],
      });

      setSearchResults(searched);
    }
  }, [isEmpty, searchInput, series]);

  const onEnter = (e) => {
    if (e.key === 'Enter' || e.key === 13) {
      // alert('enter');
      e.target.blur(); // close keyboard in mobile
    }
  };

  const toggleModal = () => {
    const loginModal = document.getElementById('searchModal');
    loginModal.click();
  };

  return (
    <div
      className="modal fade searchModalWrapper"
      id="searchModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="loginModalTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modalContainer" role="document">
        <div className="modal-content modalContent">
          <div className="heading">
            <div className="input-style d-flex align-items-center">
              <input
                onKeyUp={onEnter}
                autoComplete="off"
                name="search"
                type="search"
                placeholder="Search"
                className="input-inner"
                value={searchInput}
                onChange={onInputChange}
              />

              {isEmpty && <SearchIcon />}

              {!isEmpty && (
                <button
                  type="button"
                  className="btn-icon"
                  style={{
                    width: '24px',
                    height: '24px',
                    background: '#fff',
                    marginLeft: '-2rem',
                    borderRadius: '100%',
                    display: 'grid',
                    placeItems: 'center',
                  }}
                  onClick={clearSearch}
                >
                  <CloseIcon />
                </button>
              )}
            </div>
          </div>

          <div className="modal-body">
            {searchResults.map((data) => (
              <div key={data.id}>
                <SearchBlock {...data} closeModal={toggleModal} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
