import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { SessionProvider } from 'next-auth/react';
import { useEffect, useState } from 'react';

import '../styles/mods/slick.css';
import '../styles/globals.scss';

import Layout from '../components/Layout';
import { useEffectOnce } from '../hooks/useEffectOnce';

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== 'undefined') {
      // Handler to call on window resize

      // Add event listener
      window.addEventListener('resize', () => {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      });

      // Call handler right away so state gets updated with initial window size
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      // Remove event listener on cleanup
      return () => window.removeEventListener('resize', () => {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      });
    }
  }, []);
  return windowSize;
}

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  useEffectOnce(() => {
    import('bootstrap/dist/js/bootstrap');
  }, []);

  const checkIfInView = () => {
    const animationElements = document.querySelectorAll('.animation-element');
    const windowHeight = window.innerHeight;

    animationElements.forEach((element) => {
      const position = element.getBoundingClientRect();
      const isInPartialView = () => position.top < windowHeight && position.bottom >= 0;

      if (isInPartialView()) element.classList.add('in-view');
      else element.classList.remove('in-view');
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkIfInView);
    window.addEventListener('resize', checkIfInView);

    return () => {
      window.removeEventListener('scroll', checkIfInView);
      window.removeEventListener('resize', checkIfInView);
    };
  }, []);

  return (
    <SessionProvider session={session}>
      <Layout>
        <Component size={useWindowSize()} {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}

export default MyApp;
