import NextDocument, { Head, Html, Main, NextScript } from "next/document";

import GoogleAnalyticsScript from "@/components/GoogleAnalyticsScript/GoogleAnalyticsScript.component";
import MicrosoftClarityScript from "@/components/MicrosoftClarityScript/MicrosoftClarityScript.component";

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
            href="/fonts/Poppins/Poppins-Regular.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/Poppins/Poppins-Bold.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/Poppins/Poppins-Black.ttf"
            as="font"
            crossOrigin=""
          />
          <GoogleAnalyticsScript />
          <MicrosoftClarityScript />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
