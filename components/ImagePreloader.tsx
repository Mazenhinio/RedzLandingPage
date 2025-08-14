"use client";
import { useEffect } from 'react';

interface ImagePreloaderProps {
  images: string[];
  onLoadComplete?: () => void;
  onLoadProgress?: (loaded: number, total: number) => void;
}

export default function ImagePreloader({ 
  images, 
  onLoadComplete, 
  onLoadProgress 
}: ImagePreloaderProps) {

  useEffect(() => {
    if (images.length === 0) {
      onLoadComplete?.();
      return;
    }

    let loaded = 0;
    const total = images.length;

    const preloadImage = (src: string): Promise<void> => {
      return new Promise((resolve) => {
        const img = new Image();
        
        img.onload = () => {
          loaded++;
          onLoadProgress?.(loaded, total);
          
          if (loaded === total) {
            onLoadComplete?.();
          }
          resolve();
        };
        
        img.onerror = () => {
          console.warn(`Failed to preload image: ${src}`);
          loaded++;
          onLoadProgress?.(loaded, total);
          
          if (loaded === total) {
            onLoadComplete?.();
          }
          resolve(); // Continue even if image fails
        };
        
        img.src = src;
      });
    };

    // Preload all images concurrently
    Promise.all(images.map(preloadImage)).catch(error => {
      console.error('Error preloading images:', error);
      onLoadComplete?.();
    });
  }, [images, onLoadComplete, onLoadProgress]);

  // This component doesn't render anything visible
  return null;
}

// Global image cache for reuse across components
export const globalImageCache = new Map<string, HTMLImageElement>();

export const preloadImages = async (imageUrls: string[]): Promise<void> => {
  const promises = imageUrls.map((url) => {
    return new Promise<void>((resolve) => {
      if (globalImageCache.has(url)) {
        resolve();
        return;
      }

      const img = new Image();
      img.onload = () => {
        globalImageCache.set(url, img);
        resolve();
      };
      img.onerror = () => {
        console.warn(`Failed to preload image: ${url}`);
        resolve(); // Continue even if image fails
      };
      img.src = url;
    });
  });

  await Promise.all(promises);
};
