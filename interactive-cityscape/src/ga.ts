export const GA_ID = import.meta.env.VITE_GA_ID || '';

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export const pageview = (path: string) => {
  window.gtag('config', GA_ID, {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  });
};

export const trackEvent = (name: string, params = {}) => {
  window.gtag('event', name, params);
};
