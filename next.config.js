module.exports = {
  images: {
    domains: ["avatars0.githubusercontent.com"],
  },
  async headers() {
    return [
      {
        source: "/fonts/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/dennismorello",
        permanent: true,
      },
      {
        source: "/instagram",
        destination: "https://instagram.com/dennismrl",
        permanent: true,
      },
      {
        source: "/linkedin",
        destination: "https://linkedin.com/in/dennismorello",
        permanent: true,
      },
      {
        source: "/twitter",
        destination: "https://twitter.com/dennismorello",
        permanent: true,
      },
    ];
  },
};
