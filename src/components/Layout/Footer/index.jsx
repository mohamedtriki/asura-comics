/* eslint-disable @next/next/no-img-element */
/* eslint-disable max-len */

import Link from 'next/link';
import Script from 'next/script';
import DiscordIcon from '../../../asset/svgs/DiscordIcon';
// import FacebookIcon from '../../../asset/svgs/FacebookIcon';
// import InstagramIcon from '../../../asset/svgs/InstagramIcon';
// import TwitterIcon from '../../../asset/svgs/TwitterIcon';

const Footer = () => (
  <footer className="mt-5">
    <Script src="//cdn.intergient.com/ramp_core.js" />

    <div className="footer-section p-0 mb-sm-0 mb-5 subject container">
      <div className="row m-0 p-0 position-relative px-sm-0 px-2">
        <div className="col-sm-3 col-12 p-0 footer-logo my-sm-5 mb-4 ">
          <img
            style={{ maxWidth: '95%', height: 'auto' }}
            alt="logo"
            src={`${process.env.NEXT_PUBLIC_IMG_URL}img/logo-icon.png`}
            height={235}
            width={234}
          />
        </div>

        {/* Navigations */}
        <div className="col-sm-3 my-sm-5 col-12 p-0 navigate-sec">
          <div className="row m-0 p-0 position-relative">
            <h4 className="my-3 font-20">Navigate</h4>
          </div>

          <div className="row m-0 p-0 position-relative">
            <div className="col-sm-12 col-12 p-0">
              <div className="row m-0 p-0 position-relative">
                {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                <a href="/" className="mt-3 mt-sm-3">
                  Home
                </a>
              </div>

              {/* <div className="row m-0 p-0 position-relative"> */}
              {/*  <a href="/about" className="mt-2"> */}
              {/*    About */}
              {/*  </a> */}
              {/* </div> */}

              {/* <div className="row m-0 p-0 position-relative">
                <a href="/bookmark" >
                  <a className="mt-2">
                    Bookmarks
                  </a>
                </a>
              </div> */}
              {/* </div> */}

              {/* <div className="col-sm col-6"> */}
              <div className="row m-0 p-0 position-relative">
                <Link href="/comics" passHref>
                  <a className="mt-2">Comics</a>
                </Link>
              </div>

              {/* <div className="row m-0 p-0 position-relative">
                <a href="/languages" >
                  <a className="mt-2">
                    Languages
                  </a>
                </a>
              </div> */}

              <div className="row m-0 p-0 position-relative">
                {/* <a > */}
                <a className="mt-2" href="/surprise">
                  Surprise me
                </a>
                {/* </a> */}
              </div>

              {/* <div className="row m-0 p-0 position-relative mobile">
                <a href="/upcoming" className="mt-2">
                  Upcoming
                </a>
              </div> */}
            </div>

            {/* <div className="col-sm col-6 p-0 nav-inner"> */}
            {/*  <div className="row m-0 p-0 position-relative"> */}
            {/*    <a href="/latests" > */}
            {/*      <a className="mt-2 mt-sm-3"> */}
            {/*        Latest Series */}
            {/*      </a> */}
            {/*    </a> */}
            {/*  </div> */}

            {/*  <div className="row m-0 p-0 position-relative desktop"> */}
            {/*    <a href="/upcoming" > */}
            {/*      <a className="mt-2"> */}
            {/*        Upcoming */}
            {/*      </a> */}
            {/*    </a> */}
            {/*  </div> */}

            {/* */}
            {/* </div> */}
          </div>
        </div>

        {/* Socials */}
        <div className="col-sm-3 col-12 my-sm-5 my-2 p-0 social-sec">
          <div className="row m-0 p-0 position-relative mb-2">
            <h4 className="my-3 font-20">Social</h4>
          </div>
          {/* Social Icons */}
          <div className="row m-0 p-0 position-relative">
            <div className="col-sm-12 col-12 p-0">
              <div className="row m-0 p-0 position-relative">
                {/* <div className="col-sm-12 col-6 mt-2"> */}
                {/*  <a href="https://twitter.com" target="_blank" rel="noreferrer"> */}
                {/*    <TwitterIcon /> */}
                {/*    <span className="m-3 my-5">Twitter</span> */}
                {/*  </a> */}
                {/* </div> */}

                {/* <div className="col-sm-12 col-6 mt-3 order-12"> */}
                {/*  <a href="https://facebook.com" target="_blank" rel="noreferrer" className="px-sm-0 mx-sm-0"> */}
                {/*    <FacebookIcon /> */}
                {/*    <span className="m-3 my-5">Facebook</span> */}
                {/*  </a> */}
                {/* </div> */}

                {/* <div className="col-sm-12 col-6 mt-3 order-1"> */}
                {/*  <a href="https://instagram.com" target="_blank" rel="noreferrer"> */}
                {/*    <InstagramIcon /> */}
                {/*    <span className="m-3 my-5">Instagram</span> */}
                {/*  </a> */}
                {/* </div> */}

                <div className="col-sm-12 col-12 mt-2 order-12 ">
                  <a href="https://asura.gg/discord" target="_blank" rel="noreferrer">
                    <DiscordIcon />
                    <span className="m-3 my-5">Discord</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Subscribe & Updates  */}
        {/* <div className="col-sm-4 my-sm-5 my-2 p-0 subscribtion-sec px-sm-0 px-2">
          <div className="mt-sm-0 mt-5">
            <h4 className="font-20">Subscribe for updates on new comics</h4>
          </div>

          <div className="subscribe-sec my-4 mt-sm-4 d-flex">
            <input className="change-size" type="email" id="fname" name="fname" placeholder="Coming soon!" />
            <button type="button" className="btn theme-btn m-sm-2 mx-sm-3 ms-auto m-2 d-flex disabled">Subscribe</button>
          </div>

          <div className="mt-sm-4 mt-4 d-flex">
            <span className="font-14 color-grey">
              By submitting your email you agree to our Terms of Use and Sale and Privacy Policy.
              <br />
              You will receive email communications from us for marketing,
              informational, and promotional
              purposes and can opt-out at any time.
            </span>
          </div>
        </div> */}

        {/* Bottom */}
        <div className="col-sm-3 col-12 my-sm-5 my-2 p-0 misc-col">
          <div className="row m-0 p-0 position-relative mb-2">
            <h4 className="my-3 font-20 p-0">Misc</h4>
          </div>

          <div className="row text-grey mt-3">
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a href="/privacy-policy">Privacy Policy</a>
          </div>
          <div className="row text-grey mt-3">
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a href="/terms">Terms & Conditions</a>
          </div>
          <div className="me-sm-auto mt-3">
            <p className="color-grey">© 2022 Asura Scans, All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
