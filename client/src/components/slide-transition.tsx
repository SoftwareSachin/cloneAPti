import { motion } from 'framer-motion';
import { slideVariants } from '@/lib/page-transitions';
import { ReactNode } from 'react';

interface SlideTransitionProps {
  children: ReactNode;
  direction?: 'left' | 'right' | 'up' | 'down';
  className?: string;
}

export function SlideTransition({ 
  children, 
  direction = 'right',
  className = '' 
}: SlideTransitionProps) {
  return (
    <motion.div
      custom={direction}
      variants={slideVariants}
      initial="initial"
      animate="in"
      exit="out"
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 30,
        duration: 0.6
      }}
      className={`min-h-screen ${className}`}
      style={{ position: 'relative', width: '100%' }}
    >
      {children}
    </motion.div>
  );
}

// Horizontal slide for navigation between related pages
export function HorizontalSlide({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -100, opacity: 0 }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 30
      }}
      className={`min-h-screen ${className}`}
      style={{ position: 'relative', width: '100%' }}
    >
      {children}
    </motion.div>
  );
}

// Vertical slide for modal-like pages
export function VerticalSlide({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -50, opacity: 0 }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 40
      }}
      className={`min-h-screen ${className}`}
      style={{ position: 'relative', width: '100%' }}
    >
      {children}
    </motion.div>
  );
}