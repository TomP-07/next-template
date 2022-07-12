import PropTypes from 'prop-types';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

MyApp.propTypes = {
  Component: PropTypes.any,
  Something: PropTypes.any,
  pageProps: PropTypes.pageProps,
};

export default MyApp;
