import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { DefaultSeo, SocialProfileJsonLd } from "next-seo";
import { useEffect } from "react";

import Fonts from "@/components/Fonts/Fonts.component";
import { pageView } from "@/lib/gtag";

import defaultSeo, { socialProfileJsonLd } from "../next-seo.config";
import theme from "../theme";

const App = ({ Component, pageProps }) => {
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeComplete", pageView);

    return () => {
      router.events.off("routeChangeComplete", pageView);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width, viewport-fit=cover"
        />
      </Head>
      <DefaultSeo {...defaultSeo} />
      <SocialProfileJsonLd {...socialProfileJsonLd} />

      <ChakraProvider theme={theme}>
        <Fonts />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
};

export default App;
