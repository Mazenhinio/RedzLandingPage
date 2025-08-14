"use client";
import { useState, useEffect } from 'react';

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      // Use full document height for accurate progress
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
      
      // Check if navbar is in scrolled state (same logic as Nav component)
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div className={`fixed z-[70] transition-all duration-500 ${
      isScrolled 
        ? 'top-4 left-4 right-4 rounded-2xl' 
        : 'top-0 left-0 right-0'
    }`}>
      {isScrolled && (
        <div className="h-1 bg-gray-200 rounded-t-2xl overflow-hidden w-full">
          <div 
            className="h-full bg-gradient-to-r from-red-600 to-red-400 transition-all duration-300 ease-out"
            style={{ 
              width: `${Math.min(scrollProgress, 100)}%`,
              minWidth: '0%',
              maxWidth: '100%'
            }}
          />
        </div>
      )}
    </div>
  );
}
