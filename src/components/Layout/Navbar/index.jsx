/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages  */

import { useSession } from 'next-auth/react';
import Image from 'next/future/image';
import SearchbarWithDropdown from '../SearchbarWithDropdown';
import Dropdown from './Dropdown';

const Navbar = () => {
  const { status, data: session, } = useSession();
  return (
    <nav style={{ top: 0 }} className="navbar navbar-expand-lg m-0 desktop">
      <div className="container nav-container">
        <div className="navbar-nav collapse navbar-collapse" id="navbarSupportedContent">
          {/* <!-- Navbar brand --> */}
          <a href="/">
            <Image
              src={`${process.env.NEXT_PUBLIC_IMG_URL}img/logo-icon.png`}
              layout="raw"
              height="53"
              width="53"
              alt="logo"
              priority
              unoptimized
            />
          </a>

          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="/" className="nav-link mx-3">Home</a>
            </li>

            <li className="nav-item">
              <a href="/bookmark" className="nav-link mx-3">
                Bookmarks
              </a>
            </li>

            <li className="nav-item">
              <a href="/comics" className="nav-link mx-3">Comics</a>
            </li>

            <Dropdown type="language" />

            <li className="nav-item">
              <a className="nav-link mx-3 d-flex align-items-center" href="/surprise">
                <img alt="rating" src={`${process.env.NEXT_PUBLIC_IMG_URL}img/Rating%20Star.png`} />
                <span className="font-700 mx-2 color-white">Surprise me</span>
              </a>
            </li>
          </ul>

          <div className="d-flex ms-auto align-items-center notification-section">
            <SearchbarWithDropdown />

            {/* Notification icon */}
            <Dropdown type="notifications" />

            {/* Profile icon */}
            <Dropdown loading={status} session={session} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
