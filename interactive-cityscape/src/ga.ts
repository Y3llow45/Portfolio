export const GA_ID = import.meta.env.VITE_GA_ID || '';

declare global {
  interface Window { dataLayer: any[]; gtag: (...args:any[]) => void; }
}

export function loadGtag(onReady?: () => void) {
  if (!GA_ID) return;

  if (window.gtag) {
    onReady?.();
    return;
  }

  // Prevent duplicate script appends (key fix for StrictMode double calls)
  const existingScript = document.querySelector(
    `script[src="https://www.googletagmanager.com/gtag/js?id=${GA_ID}"]`
  );
  if (existingScript) {
    // Script already being loaded — if somehow already ready, call callback
    if (window.gtag) onReady?.();
    return; // Otherwise just wait; the first load will handle setup
  }

  const s = document.createElement('script');
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  s.async = true;
  s.onload = () => {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      window.dataLayer!.push(arguments);
    } as any;
    window.gtag('js', new Date());
    window.gtag('config', GA_ID, { send_page_view: false });
    onReady?.();
  };
  document.head.appendChild(s);
}

export const pageview = (path: string) => {
  if (!window.gtag) return;

  window.gtag('config', GA_ID, {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  });
};


export const trackEvent = (name: string, params = {}) => {
  if (!window.gtag) return;
  window.gtag('event', name, params);
};
