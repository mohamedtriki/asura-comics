import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import CloseIcon from '../../asset/svgs/CloseIcon';
import SearchIcon from '../../asset/svgs/SearchIcon';

const Searchbar = ({ placeholder }) => {
  const router = useRouter();
  const [searchInput, setSearchInput] = useState('');

  const onInputChange = (e) => setSearchInput(e.target.value);

  const removeQueryParams = () => router.pathname === '/comics'
    && router.query.genre === undefined
    && router.replace('/comics', undefined, { shallow: true });

  // alter route query params when input is present
  useEffect(() => {
    const handleSearchWithRouting = () => {
      if (searchInput.trim().length === 0) return removeQueryParams();
      router.push(`/comics?search=${searchInput}`, undefined, { shallow: true });
    };

    handleSearchWithRouting();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchInput]); // no router, would cause rerender

  const clearSearch = () => {
    setSearchInput('');
    removeQueryParams();
  };

  const onEnter = (e) => {
    if (e.key === 'Enter' || e.key === 13) {
      // alert('enter');
      e.target.blur(); // close keyboard in mobile
    }
  };

  return (
    <div className="input-style d-flex align-items-center w-100">
      <input
        onKeyUp={onEnter}
        autoComplete="off"
        name="search"
        type="search"
        placeholder={placeholder || 'Search'}
        className="input-inner"
        value={searchInput}
        onChange={onInputChange}
      />

      {searchInput.trim().length === 0 && <SearchIcon />}

      {searchInput.trim().length > 0 && (
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
  );
};

export default Searchbar;
