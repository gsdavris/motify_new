import { useEffect } from "react";
import { useRouter } from "next/router";
import "../styles/global.scss";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import * as ga from "../utils/ga";

function MyApp({ Component, pageProps: { session, ...pageProps }, router }) {
  const myRouter = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
    //When the component is mounted, subscribe to router changes
    //and log those page views
    myRouter.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      myRouter.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [myRouter.events]);

  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} key={router.asPath} />
    </>
  );
}

export default MyApp;
