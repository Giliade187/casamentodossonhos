// Facebook Pixel tracking utilities
declare global {
  interface Window {
    fbq: any;
  }
}

export const trackEvent = (eventName: string, parameters?: any) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, parameters);
  }
};

export const trackCustomEvent = (eventName: string, parameters?: any) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('trackCustom', eventName, parameters);
  }
};

// Eventos específicos para a landing page
export const trackButtonClick = (buttonName: string) => {
  trackCustomEvent('ButtonClick', { button_name: buttonName });
};

export const trackCTAClick = () => {
  trackEvent('InitiateCheckout');
  trackCustomEvent('CTA_Click');
};

export const trackOfferView = () => {
  trackCustomEvent('OfferView');
};

export const trackGuaranteeView = () => {
  trackCustomEvent('GuaranteeView');
};

export const trackFAQView = () => {
  trackCustomEvent('FAQView');
};
