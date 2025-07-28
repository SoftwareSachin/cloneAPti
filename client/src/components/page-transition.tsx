import { motion } from 'framer-motion';
import { pageVariants, pageTransition } from '@/lib/page-transitions';
import { ReactNode } from 'react';

interface PageTransitionProps {
  children: ReactNode;
  className?: string;
}

export function PageTransition({ children, className = '' }: PageTransitionProps) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="in"
      exit="out"
      transition={pageTransition}
      className={`min-h-screen ${className}`}
      style={{ position: 'relative', width: '100%' }}
    >
      {children}
    </motion.div>
  );
}

// Alternative smooth transition wrapper
export function SmoothPageTransition({ children, className = '' }: PageTransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className={`min-h-screen ${className}`}
      style={{ position: 'relative', width: '100%' }}
    >
      {children}
    </motion.div>
  );
}

// Layout transition for shared layout animations
export function LayoutPageTransition({ children, className = '' }: PageTransitionProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ 
        layout: { duration: 0.3 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 }
      }}
      className={`min-h-screen ${className}`}
      style={{ position: 'relative', width: '100%' }}
    >
      {children}
    </motion.div>
  );
}