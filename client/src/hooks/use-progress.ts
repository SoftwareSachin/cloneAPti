import { useLocation } from 'wouter';
import { useEffect, useRef } from 'react';
import { startProgress, finishProgress } from '@/lib/nprogress';

export function useProgress() {
  const [location] = useLocation();
  const previousLocation = useRef<string | null>(null);

  useEffect(() => {
    // Only start progress if this is actually a route change
    if (previousLocation.current !== null && previousLocation.current !== location) {
      startProgress();
      
      // Simulate loading time for better UX
      const timeout = setTimeout(() => {
        finishProgress();
      }, 100);

      return () => {
        clearTimeout(timeout);
        finishProgress();
      };
    }
    
    previousLocation.current = location;
  }, [location]);

  useEffect(() => {
    // Ensure progress is finished when component unmounts
    return () => {
      finishProgress();
    };
  }, []);
}