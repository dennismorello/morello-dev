const { GA_MEASUREMENT_ID } = process.env;

const GoogleAnalyticsScript = () => (
  <>
    <script
      async
      src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
    />
    <script
      dangerouslySetInnerHTML={{
        __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `,
      }}
    />
  </>
);

export default GoogleAnalyticsScript;
