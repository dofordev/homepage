import "../styles/globals.scss";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import {TransitionGroup, CSSTransition, SwitchTransition} from "react-transition-group";


console.log(
  "%cWelcome Finnq",
  "color:#731aed;font-weight:bold;font-size:70px; text-shadow: #000 1px 1px;"
);



function MyApp({ Component, pageProps, router }) {
  return (
      <SwitchTransition mode="out-in">
        <CSSTransition key={router.pathname} classNames="page" timeout={{ enter: 100, exit: 100 }}>
          <Component {...pageProps} />
        </CSSTransition>
      </SwitchTransition>
  );
}

export default MyApp;
