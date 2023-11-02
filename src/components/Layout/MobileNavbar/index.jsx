/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */

import { useSession } from 'next-auth/react';
import { useEffect, useRef, useState } from 'react';

// import ForwardArrow from '../../../asset/svgs/ForwardArrow';
import MobileHamBurger from '../../../asset/svgs/MobileHamBurger';
import SearchIcon from '../../../asset/svgs/SearchIcon';
import { useEffectOnce } from '../../../hooks/useEffectOnce';
import Dropdown from '../Navbar/Dropdown';

const MobileNavbar = () => {
  const { status, data: session, } = useSession();

  const [isOpen, setOpen] = useState(false);

  const toggleNav = () => {
    document.body.classList.toggle('nav-is-toggled');
    setOpen((prev) => !prev);
  };

  const containedRef = useRef(null);

  // add sub dropdowns in nav
  useEffectOnce(() => {
    const navExpand = [].slice.call(document.querySelectorAll('.nav-expand'));
    const backLink = `<li class="nav-item">
                          <a class="nav-link nav-back-link" href="javascript:;">
                     <svg class="mx-1" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.59 8.59009L12 13.1701L7.41 8.59009L6 10.0001L12 16.0001L18 10.0001L16.59 8.59009Z" fill="white"></path>
                                </svg> Back
                      </a>
</li>`;

    navExpand.forEach((item) => {
      item.querySelector('.nav-expand-content').insertAdjacentHTML('afterbegin', backLink);
      item.querySelector('.nav-link').addEventListener('click', () => item.classList.add('active'));
      item.querySelector('.nav-back-link').addEventListener('click', () => item.classList.remove('active'));
    });
  }, []);

  // disable scroll
  useEffect(() => {
    if (isOpen) document.body.classList.add('noScroll');
    if (!isOpen) document.body.classList.remove('noScroll');
  }, [isOpen]);

  // close nav if mouse is outside
  const useOutsideContainer = (ref) => {
    useEffect(() => {
      const handleClickOutside = (e) => {
        if (
          ref.current // ref is not null
          && !ref.current.contains(e.target) // is outside
          && e.target.parentNode.id !== 'ham' // not clicking hamburger
          && document.body.classList.contains('nav-is-toggled')) { // has the class
          toggleNav();
        }
      };
      window.addEventListener('mousedown', handleClickOutside);

      return () => {
        window.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  };

  useOutsideContainer(containedRef);

  return (
    <div style={{ top: 0, width: '100%' }} className="row m-0 position-absolute mobile-menu-cont mobile">
      <header className="nav-top d-flex align-items-center">
        <a href="/">
          <img
            style={{ width: '53px', marginTop: 'unset' }}
            src={`${process.env.NEXT_PUBLIC_IMG_URL}img/logo-icon.png`}
            alt="Logo"
            loading="lazy"
          />
        </a>

        {/* Right Header */}
        <span className="mobileNavRightHeader hamburger d-flex gap-4 align-items-center  material-icons px-2 ms-auto">
          <div
            className="searchIcon"
            data-bs-toggle="modal"
            id="searchModalBtn"
            data-bs-target="#searchModal"
          >
            <SearchIcon />
          </div>

          <Dropdown type="notifications" />

          <Dropdown loading={status} session={session} />

          <div id="ham" aria-hidden="true" onClick={toggleNav}>
            <MobileHamBurger />
          </div>
        </span>
      </header>

      <nav className="nav-drill" ref={containedRef} role="dialog">
        <ul className="nav-items nav-level-1">
          <li className="nav-item" onClick={toggleNav}>
            <a href="/" className="nav-link">Home</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/bookmark">
              Bookmarks
            </a>
          </li>

          <li className="nav-item" onClick={toggleNav}>
            <a href="/comics" className="nav-link">Comics</a>
          </li>

          {/* <li className="nav-item nav-expand">
            <a className="nav-link nav-expand-link" href="#">
              Languages
              <ForwardArrow />
            </a>

            <ul className="nav-items nav-expand-content">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <i className="flag-united-kingdom flag" />
                  English
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <i className="flag-china flag" />
                  Chinese
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <i className="flag-japan flag" />
                  Japanese
                </a>
              </li>
            </ul>
          </li> */}

          <li className="nav-item" onClick={toggleNav}>
            {/* <a href="/surprise"> */}
            <a className="nav-link" href="/surprise">
              <img alt="rating" src={`${process.env.NEXT_PUBLIC_IMG_URL}img/Rating%20Star.png`} />
              <span className="font-700 mx-2 color-white">Surprise me</span>
            </a>
            {/* </a> */}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileNavbar;
