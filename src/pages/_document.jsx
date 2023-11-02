import Document, {
  Head, Html, Main, NextScript
} from 'next/document';
import Script from 'next/script';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* <!-- Site icon --> */}
          <link rel="icon" href="/img/logo-icon.png" type="image/x-icon" />
          {/* <!-- Font Awesome --> */}
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.2/css/all.css" />
          {/* <!-- Google Fonts Roboto --> */}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap"
          />
          <Script strategy="beforeInteractive" src="//cdn.intergient.com/1024478/73256/ramp_config.js" />
          <Script strategy="beforeInteractive" id="rampscript" dangerouslySetInnerHTML={{ __html: 'window.ramp = window.ramp || {};window.ramp.que = window.ramp.que || [];' }} />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script defer src="https://static.cloudflareinsights.com/beacon.min.js" data-cf-beacon='{"token": "b467b44511a6412a94f7a0577e4c469a"}' />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
