import "../styles/globals.scss";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

console.log(
  "%cWelcome Finnq",
  "color:#731aed;font-weight:bold;font-size:70px; text-shadow: #000 1px 1px;"
);
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
