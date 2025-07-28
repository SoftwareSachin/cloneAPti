import { useEffect, useCallback } from 'react';
import { initSmoothScroll, scrollTo, destroySmoothScroll, getLenis } from '@/lib/smooth-scroll';

export function useSmoothScroll() {
  useEffect(() => {
    // Initialize smooth scroll
    const lenis = initSmoothScroll();

    // Cleanup on unmount
    return () => {
      destroySmoothScroll();
    };
  }, []);

  // Return scroll utilities
  const smoothScrollTo = useCallback((target: string | number, options?: { offset?: number; duration?: number }) => {
    scrollTo(target, options);
  }, []);

  const scrollToTop = useCallback(() => {
    scrollTo(0, { duration: 1.5 });
  }, []);

  const scrollToElement = useCallback((selector: string, offset: number = 0) => {
    scrollTo(selector, { offset, duration: 1.2 });
  }, []);

  return {
    scrollTo: smoothScrollTo,
    scrollToTop,
    scrollToElement,
    lenis: getLenis()
  };
}

// Hook for scroll-triggered animations
export function useScrollTrigger(callback: (scrollY: number, direction: 'up' | 'down') => void) {
  useEffect(() => {
    let lastScrollY = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > lastScrollY ? 'down' : 'up';
      
      callback(currentScrollY, direction);
      lastScrollY = currentScrollY;
    };

    // Use Lenis scroll event if available, otherwise fallback to window scroll
    const lenis = getLenis();
    if (lenis) {
      lenis.on('scroll', (e: any) => {
        const direction = e.velocity > 0 ? 'down' : 'up';
        callback(e.scroll, direction);
      });
    } else {
      window.addEventListener('scroll', handleScroll, { passive: true });
    }

    return () => {
      if (lenis) {
        lenis.off('scroll', handleScroll);
      } else {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, [callback]);
}