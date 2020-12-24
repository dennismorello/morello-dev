const { GA_MEASUREMENT_ID } = process.env;

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageView = (url) => {
  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
  });
};
