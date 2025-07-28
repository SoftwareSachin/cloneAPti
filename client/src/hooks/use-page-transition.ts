import { useLocation } from 'wouter';
import { useEffect, useState } from 'react';

export function usePageTransition() {
  const [location] = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsTransitioning(true);
    
    // Reset transition state after animation completes
    const timeout = setTimeout(() => {
      setIsTransitioning(false);
    }, 600); // Match the transition duration

    return () => clearTimeout(timeout);
  }, [location]);

  return { isTransitioning, currentPath: location };
}

// Hook for managing transition direction based on navigation
export function useTransitionDirection() {
  const [location] = useLocation();
  const [previousPath, setPreviousPath] = useState<string | null>(null);
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward');

  useEffect(() => {
    if (previousPath) {
      // Simple heuristic for determining direction
      // You can make this more sophisticated based on your route structure
      const currentDepth = location.split('/').length;
      const previousDepth = previousPath.split('/').length;
      
      setDirection(currentDepth > previousDepth ? 'forward' : 'backward');
    }
    setPreviousPath(location);
  }, [location, previousPath]);

  return { direction, currentPath: location, previousPath };
}