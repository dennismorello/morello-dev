import NextDocument, { Head, Html, Main, NextScript } from "next/document";

import GoogleAnalyticsScript from "@/components/GoogleAnalyticsScript/GoogleAnalyticsScript.component";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <link
            rel="icon"
            sizes="32x32"
            type="image/png"
            href="/favicon-32x32.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link
            rel="preload"
            href="/fonts/Poppins/poppins-v15-latin-regular.woff2"
            as="font"
            type="font/woff2"
            crossOrigin=""
          />
          <GoogleAnalyticsScript />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
