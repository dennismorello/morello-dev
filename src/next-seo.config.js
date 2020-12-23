const defaultSeo = {
  titleTemplate:
    "%s | Dennis Morello – Front-End Engineer and Open Source Contributor",
  description:
    "Personal website of a passionate Front-End Engineer and Open Source Contributor.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.VERCEL_URL,
    site_name: "Dennis Morello",
    title: "Dennis Morello",
    images: [
      {
        url: "https://morello.dev/images/profile.png",
        width: 400,
        height: 400,
        alt: "Dennis Morello",
      },
    ],
  },
  twitter: {
    handle: "@dennismorello",
    cardType: "summary_large_image",
  },
};

const socialProfileJsonLd = {
  type: "Person",
  name: "Dennis Morello",
  url: process.env.VERCEL_URL,
  sameAs: [
    "https://twitter.com/dennismorello",
    "https://instagram.com/dennismrl",
    "https://linkedin.com/in/dennismorello",
  ],
};

export default defaultSeo;

export { socialProfileJsonLd };
