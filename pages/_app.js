import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import AppContext from "../components/NewHeader/AppContext";
import { useRef, useState } from "react";

const App = ({ Component, pageProps }) => {
  const [sharedState, setSharedState] = useState({
    portfolio: {
      NavBar: {
        IntervalEvent: null,
        scrolling: null,
        scrollSizeY: null,
      },
      Scrolling: {
        IntervalEvent: null,
      },
    },
    // userdata: {
    //   timerCookieRef: timerCookie,
    //   windowSizeTracker: windowSizeTrackerRef,
    //   mousePositionTracker: mousePositionRef,
    // },
    // typing: {
    //   keyboardEvent: null,
    //   eventInputLostFocus: null,
    // },
    // finishedLoading: false,
  });
  return (
    <AppContext.Provider value={{ sharedState, setSharedState }}>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </AppContext.Provider>
  );
};

export default App;
