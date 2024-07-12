import { ThemeProvider } from "next-themes";
import ReactGA from "react-ga4";
import { useEffect } from "react";
import "../css/tailwind.css";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the CSS
import '../libs/fontawesome'; // Import the FontAwesome configuration

config.autoAddCss = false;
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    ReactGA.initialize(process.env.NEXT_PUBLIC_GA_ID);
    ReactGA.send("pageview");
  }, []);
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
