import "../styles/globals.scss";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
