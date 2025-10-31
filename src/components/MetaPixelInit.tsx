"use client";

import { useEffect } from 'react';
import { initMetaPixel } from '@/lib/metaPixel';

/**
 * Meta Pixel initialization component
 * Initializes the pixel on mount if cookie consent is accepted
 */
export const MetaPixelInit: React.FC = () => {
  useEffect(() => {
    // Initialize Meta Pixel
    initMetaPixel();

    // Re-initialize if user accepts cookies after page load
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'regalo_cookie_consent' && e.newValue === 'accepted') {
        initMetaPixel();
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  // Noscript fallback for Meta Pixel
  return (
    <noscript>
      <img 
        height="1" 
        width="1" 
        style={{ display: 'none' }}
        src="https://www.facebook.com/tr?id=1528497405010554&ev=PageView&noscript=1"
        alt=""
      />
    </noscript>
  );
};
