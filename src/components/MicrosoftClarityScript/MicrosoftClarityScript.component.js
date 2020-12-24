const { MS_CLARITY_MEASUREMENT_ID } = process.env;

const MicrosoftClarityScript = () => (
  <script
    dangerouslySetInnerHTML={{
      __html: `
        (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "${MS_CLARITY_MEASUREMENT_ID}");
      `,
    }}
  />
);

export default MicrosoftClarityScript;
