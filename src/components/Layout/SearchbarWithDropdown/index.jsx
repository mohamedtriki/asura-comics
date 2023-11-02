import { matchSorter } from 'match-sorter';
import { useEffect, useState } from 'react';
import CloseIcon from '../../../asset/svgs/CloseIcon';
import SearchIcon from '../../../asset/svgs/SearchIcon';
import SearchBlock from '../../SearchBlock';

const SearchbarWithDropdown = ({ placeholder }) => {
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

  // control modal
  useEffect(() => {
    const searchModal = document.querySelector('[aria-labelledby="searchbarDropdown"]');

    if (!isEmpty) searchModal.classList.add('show');
    if (isEmpty) searchModal.classList.remove('show');
  }, [isEmpty]);

  return (
    <div className="dropdown searchDropdown">
      {/* <!-- Searchbar --> */}
      <div
        className="input-style d-flex align-items-center"
        aria-label="searchbarDropdown"
        id="searchbarDropdown"
        type="button"
        data-bs-toggle="dropdown" // prevent show dropdown when no input
        aria-expanded="false"
      >
        <input
          autoComplete="off"
          name="search"
          type="search"
          placeholder={placeholder || 'Search'}
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

      {/* <!-- Dropdown menu --> */}
      <ul className="dropdown-menu" aria-labelledby="searchbarDropdown">
        {searchResults.map((data) => (
          <li key={data.id}>
            <SearchBlock {...data} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchbarWithDropdown;
