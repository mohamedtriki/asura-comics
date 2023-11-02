/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable @next/next/no-img-element */

import { useEffect } from 'react';

export default function ScrollToTop() {
  function scrollFunction() {
    const mybutton = document.querySelector('#btn-back-to-top');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = 'block';
    } else {
      mybutton.style.display = 'none';
    }
  }

  useEffect(() => window.addEventListener('scroll', scrollFunction), []);

  return (
    <button
      type="button"
      className="btn btn-floating btn-lg"
      id="btn-back-to-top"
      style={{
        position: 'fixed',
        bottom: '40px',
        right: '10px',
        zIndex: '99999',
        background: 'linear-gradient(180deg, #7334AE 0%, #3E0251 100%)'
      }}
      onClick={() => { document.body.scrollTop = 0; document.documentElement.scrollTop = 0; }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        role="img"
        id="footer-icon-name"
        width="0.8em"
        height="1em"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 1024 1280"
        style={{
          width: '45%',
          height: '45%',
          transform: 'translateY(-2.5px)'
        }}
      >
        <path fill="white" d="M1011 928q0 13-10 23l-50 50q-10 10-23 10t-23-10L512 608l-393 393q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l466 466q10 10 10 23z" />
      </svg>
    </button>
  );
}
