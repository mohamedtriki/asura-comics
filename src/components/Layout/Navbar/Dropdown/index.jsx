/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import { signOut } from 'next-auth/react';
import Link from 'next/link';
import NotificationBell from '../../../../asset/svgs/NotificationBell';
import PersonIcon from '../../../../asset/svgs/PersonIcon';

const Dropdown = ({ type, loading, session }) => {
  if (type === 'language') {
    return (
      <li className="nav-item dropdown mx-3 header-dropdown">
        <button
          className="nav-link dropdown-toggle mx-2 btn-icon"
          aria-label="navbarDropdown"
          id="navbarDropdown"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Languages
          {' '}
        </button>

        {/* <!-- Dropdown menu --> */}
        <ul className="dropdown-menu language" aria-labelledby="navbarDropdown">
          <li>
            <Link href="/" passHref>
              <a className="dropdown-item">
                <i className="flag-united-kingdom flag" />
                English
              </a>
            </Link>
          </li>
          <li>
            <a className="dropdown-item" href="https://asurascanstr.com">
              <i className="flag-turkey flag" />
              Turkish
            </a>
          </li>
          {/* <li> */}
          {/*  <a className="dropdown-item" href="/japanese"> */}
          {/*    <i className="flag-japan flag" /> */}
          {/*    Japanese */}
          {/*  </a> */}
          {/* </li> */}
        </ul>
      </li>
    );
  }

  if (type === 'notifications') {
    return (
      <li className="notification-sec header-dropdown dropdown">
        <button
          className="nav-link dropdown-toggle hidden-arrow btn-icon"
          id="navbarDropdownMenuLink"
          aria-label="navbarDropdownMenuLink"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i className="fas fa-bell">
            <NotificationBell />
          </i>
          {/* <span className="badge rounded-pill badge-notification">2</span> */}
        </button>

        <ul className="dropdown-menu dropdown-menu-end color-white" aria-labelledby="navbarDropdownMenuLink">
          <div className="py-3 px-4">
            <h5 className="font-16 mb-4">Notification</h5>

            <div className="d-flex align-items-center">
              <img alt="badge" src={`${process.env.NEXT_PUBLIC_IMG_URL}img/badge.svg`} />
              <a href="/manga" className="font-12 ms-3 mb-0">New Manga is uploaded</a>
            </div>

            <hr className="w-100 bg-purple my-2" />

            <div className="d-flex align-items-center">
              <img alt="star" src={`${process.env.NEXT_PUBLIC_IMG_URL}img/Star.svg`} />
              <a href="/list" className="font-12 ms-3 mb-0">A new chapter is in the list</a>
            </div>

            <hr className="w-100 bg-purple my-2" />

            <div className="d-flex align-items-center">
              <img alt="read" src={`${process.env.NEXT_PUBLIC_IMG_URL}img/read.svg`} />
              <p className="font-12 ms-3 mb-0 color-grey">
                Read the latest chapter of
                <a href="/reread" className="color-purple font-700"> Retrun of the Mount Hua Sect</a>
              </p>
            </div>
            <button type="button" aria-label="view-notifications" className="btn viewNotif theme-btn w-100 my-4">View all notification</button>
          </div>
        </ul>
      </li>
    );
  }

  return (
    <li className="dropdown header-dropdown">
      <button
        type="button"
        className="nav-link btn-icon"
        id="navbarDropdownMenuLink"
        aria-label="navbarDropdownMenuLink"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {loading === 'authenticated' ? (
          // eslint-disable-next-line jsx-a11y/img-redundant-alt
          <img
            alt="profile picture"
            style={{
              width: '42px', height: '42px', borderRadius: '100%', border: '1px solid #7334AE'
            }}
            src={
              session.user.profile_uuid === ''
                ? `${process.env.NEXT_PUBLIC_IMG_URL}static/profile/profile-img.png`
                : `${process.env.NEXT_PUBLIC_IMG_URL}user/${session.user.profile_uuid}.jpg`
            }
          />
        ) : (
          <PersonIcon />
        )}
      </button>

      {loading === 'loading' ? (
        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <li>
            <a className="dropdown-item loading-skeleton">Loading</a>
          </li>
        </ul>
      ) : (
        <ul className="dropdown-menu overflow-hidden accountDropdown" aria-labelledby="navbarDropdownMenuLink">
          {loading === 'authenticated' ? (
            <>
              <li>
                {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                <a href="/profile" className="dropdown-item">My profile</a>
              </li>

              <li>
                {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                <a href="/bookmark" className="dropdown-item">Bookmarks</a>
              </li>

              <li>
                {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                <a href="/history" className="dropdown-item">History</a>
              </li>

              {/* <li>
                <a className="dropdown-item" href="/settings">
                  Settings
                </a>
              </li> */}

              <li>
                {/* eslint-disable-next-line */}
                <button type="button" aria-label="sign out" className="dropdown-item btn-link" onClick={() => signOut()}>
                  Sign Out
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <button
                  aria-label="login"
                  type="button"
                  className="dropdown-item btn-link text-white"
                  data-bs-toggle="modal"
                  id="loginModalBtn"
                  data-bs-target="#loginModal"
                >
                  Login
                </button>
              </li>

              <li>
                <button
                  aria-label="register"
                  type="button"
                  className="dropdown-item btn-link text-white"
                  data-bs-toggle="modal"
                  id="registerModalBtn"
                  data-bs-target="#registerModal"
                >
                  Register
                </button>
              </li>
              {/* <li>
                <a href="/register" >
                  <a className="dropdown-item text-white">Register</a>
                </a>
              </li> */}
            </>
          )}
        </ul>
      )}
    </li>
  );
};

export default Dropdown;
