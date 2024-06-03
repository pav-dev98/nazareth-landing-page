import { ThemeProvider } from "next-themes";
import ReactGA from "react-ga4";
import { useEffect } from "react";
import "../css/tailwind.css";

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
