import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Pushes a virtual pageview to dataLayer for SPA navigation so Google Tag Manager
// can pick up route changes (set up triggers in GTM to listen for 'virtualPageview' events).
const GtmRouteTracker = () => {
  const location = useLocation();

  useEffect(() => {
    const dataLayer = (window as any).dataLayer || [];
    dataLayer.push({
      event: "virtualPageview",
      page: {
        path: location.pathname + location.search,
        title: document.title,
      },
    });
  }, [location]);

  return null;
};

export default GtmRouteTracker;
