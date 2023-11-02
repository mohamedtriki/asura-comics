/* eslint-disable @next/next/no-html-link-for-pages */
import DropdownIcon from '../../asset/svgs/DropdownIcon';

const HomepageFilter = () => (
  <div className="dropdown mx-3">
    <a
      className="dropdown-toggle d-flex align-items-center"
      href="/"
      role="button"
      id="dropdownMenuLink"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      <span className="mx-2">Weekly</span>
      <DropdownIcon />
    </a>

    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
      <li>
        <a className="dropdown-item" href="/">
          Daily
        </a>
      </li>
      <li>
        <a className="dropdown-item" href="/">
          Monthly
        </a>
      </li>
      <li>
        <a className="dropdown-item" href="/">
          Yearly
        </a>
      </li>
    </ul>
  </div>
);

export default HomepageFilter;
