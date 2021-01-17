import { css, Global } from "@emotion/react";

const poppinsFont = css`
  @font-face {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: url("/fonts/poppins-v15-latin/poppins-v15-latin-300.woff2")
        format("woff2"),
      url("/fonts/poppins-v15-latin/poppins-v15-latin-300.woff") format("woff");
  }

  @font-face {
    font-family: "Poppins";
    font-style: italic;
    font-weight: 300;
    font-display: swap;
    src: url("/fonts/poppins-v15-latin/poppins-v15-latin-300italic.woff2")
        format("woff2"),
      url("/fonts/poppins-v15-latin/poppins-v15-latin-300italic.woff")
        format("woff");
  }

  @font-face {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-display: optional;
    src: url("/fonts/poppins-v15-latin/poppins-v15-latin-regular.woff2")
        format("woff2"),
      url("/fonts/poppins-v15-latin/poppins-v15-latin-regular.woff")
        format("woff");
  }

  @font-face {
    font-family: "Poppins";
    font-style: italic;
    font-weight: 400;
    font-display: swap;
    src: url("/fonts/poppins-v15-latin/poppins-v15-latin-italic.woff2")
        format("woff2"),
      url("/fonts/poppins-v15-latin/poppins-v15-latin-italic.woff")
        format("woff");
  }

  @font-face {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url("/fonts/poppins-v15-latin/poppins-v15-latin-500.woff2")
        format("woff2"),
      url("/fonts/poppins-v15-latin/poppins-v15-latin-500.woff") format("woff");
  }

  @font-face {
    font-family: "Poppins";
    font-style: italic;
    font-weight: 500;
    font-display: swap;
    src: url("/fonts/poppins-v15-latin/poppins-v15-latin-500italic.woff2")
        format("woff2"),
      url("/fonts/poppins-v15-latin/poppins-v15-latin-500italic.woff")
        format("woff");
  }

  @font-face {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url("/fonts/poppins-v15-latin/poppins-v15-latin-700.woff2")
        format("woff2"),
      url("/fonts/poppins-v15-latin/poppins-v15-latin-700.woff") format("woff");
  }

  @font-face {
    font-family: "Poppins";
    font-style: italic;
    font-weight: 700;
    font-display: swap;
    src: url("/fonts/poppins-v15-latin/poppins-v15-latin-700italic.woff2")
        format("woff2"),
      url("/fonts/poppins-v15-latin/poppins-v15-latin-700italic.woff")
        format("woff");
  }

  @font-face {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 900;
    font-display: optional;
    src: url("/fonts/poppins-v15-latin/poppins-v15-latin-900.woff2")
        format("woff2"),
      url("/fonts/poppins-v15-latin/poppins-v15-latin-900.woff") format("woff");
  }

  @font-face {
    font-family: "Poppins";
    font-style: italic;
    font-weight: 900;
    font-display: swap;
    src: url("/fonts/poppins-v15-latin/poppins-v15-latin-900italic.woff2")
        format("woff2"),
      url("/fonts/poppins-v15-latin/poppins-v15-latin-900italic.woff")
        format("woff");
  }
`;

const Fonts = () => <Global styles={[poppinsFont]} />;

export default Fonts;
