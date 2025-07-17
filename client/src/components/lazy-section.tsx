import React from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

interface LazySectionProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
  animationType?: 'fade' | 'slideUp' | 'slideIn' | 'scale' | 'fadeUp' | 'none';
  delay?: number;
}

export function LazySection({
  children,
  className = '',
  threshold = 0.1,
  rootMargin = '100px',
  animationType = 'fadeUp',
  delay = 0,
}: LazySectionProps) {
  const { elementRef, shouldAnimate } = useIntersectionObserver({
    threshold,
    rootMargin,
    triggerOnce: true,
  });

  const getAnimationClasses = () => {
    const baseClasses = 'transition-all duration-1000 ease-out';
    
    if (!shouldAnimate) {
      switch (animationType) {
        case 'fade':
          return `${baseClasses} opacity-0`;
        case 'slideUp':
          return `${baseClasses} opacity-0 translate-y-12`;
        case 'slideIn':
          return `${baseClasses} opacity-0 translate-x-12`;
        case 'scale':
          return `${baseClasses} opacity-0 scale-95`;
        case 'fadeUp':
          return `${baseClasses} opacity-0 translate-y-8`;
        default:
          return `${baseClasses} opacity-0 translate-y-8`;
      }
    }

    return `${baseClasses} opacity-100 translate-y-0 translate-x-0 scale-100`;
  };

  const style = delay > 0 ? { transitionDelay: `${delay}ms` } : {};

  return (
    <section
      ref={elementRef as React.RefObject<HTMLElement>}
      className={`${getAnimationClasses()} ${className}`}
      style={style}
    >
      {children}
    </section>
  );
}