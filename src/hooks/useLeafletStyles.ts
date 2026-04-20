import { useEffect } from 'react';

/**
 * Hook to dynamically load Leaflet CSS when the map is displayed.
 * This avoids loading large CSS files on pages that don't need it.
 */
export const useLeafletStyles = () => {
  useEffect(() => {
    // Check if the link already exists
    const existingLink = document.getElementById('leaflet-css');
    if (existingLink) return;

    const link = document.createElement('link');
    link.id = 'leaflet-css';
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
    link.integrity = 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=';
    link.crossOrigin = '';

    document.head.appendChild(link);

    return () => {
      // Optional: Remove the link when the component unmounts
      // However, Leaflet markers might still need it if multiple modals open/close.
      // For simplicity and to avoid flashes, we can keep it once loaded, 
      // or remove it if we want strict cleanup.
      // document.head.removeChild(link);
    };
  }, []);
};
