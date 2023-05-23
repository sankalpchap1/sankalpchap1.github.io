import { ThemeProvider } from "next-themes";
import { useState } from "react";
import AppContext from "../components/NewHeader/AppContext";
import "../styles/globals.css";

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
