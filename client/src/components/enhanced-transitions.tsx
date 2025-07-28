import { motion, AnimatePresence, usePresence, useIsPresent } from 'framer-motion';
import { ReactNode, useEffect } from 'react';
import { useLocation } from 'wouter';

// Advanced page transition with direction detection
export function DirectionalPageTransition({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  const [isPresent, safeToRemove] = usePresence();
  
  useEffect(() => {
    if (!isPresent) {
      setTimeout(safeToRemove, 600);
    }
  }, [isPresent, safeToRemove]);

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 30,
        mass: 0.8
      }}
      className="min-h-screen"
      style={{ position: 'relative', width: '100%' }}
    >
      {children}
    </motion.div>
  );
}

// Morphing container transition
export function MorphTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95, borderRadius: 20 }}
      animate={{ opacity: 1, scale: 1, borderRadius: 0 }}
      exit={{ opacity: 0, scale: 1.05, borderRadius: 20 }}
      transition={{
        layout: { duration: 0.4, ease: 'easeInOut' },
        opacity: { duration: 0.3 },
        scale: { duration: 0.4 },
        borderRadius: { duration: 0.4 }
      }}
      className="min-h-screen"
    >
      {children}
    </motion.div>
  );
}

// Curtain-style transition
export function CurtainTransition({ children }: { children: ReactNode }) {
  return (
    <>
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{ originY: 0 }}
        className="fixed inset-0 bg-slate-900 z-50"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className="min-h-screen relative z-10"
      >
        {children}
      </motion.div>
    </>
  );
}

// Split-screen transition
export function SplitTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div className="min-h-screen overflow-hidden">
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 40,
          mass: 1
        }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

// Elastic transition with bounce
export function ElasticTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
      animate={{ 
        opacity: 1, 
        scale: 1, 
        rotate: 0,
        transition: {
          type: 'spring',
          stiffness: 200,
          damping: 15,
          mass: 1
        }
      }}
      exit={{ 
        opacity: 0, 
        scale: 1.1, 
        rotate: 5,
        transition: {
          duration: 0.3,
          ease: 'easeInOut'
        }
      }}
      className="min-h-screen"
    >
      {children}
    </motion.div>
  );
}

// Staggered container for complex layouts
export function StaggeredLayout({ 
  children, 
  staggerDelay = 0.1 
}: { 
  children: ReactNode; 
  staggerDelay?: number; 
}) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: 0.2
          }
        }
      }}
      className="min-h-screen"
    >
      {children}
    </motion.div>
  );
}

export function StaggeredItem({ 
  children, 
  delay = 0 
}: { 
  children: ReactNode; 
  delay?: number; 
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          transition: {
            type: 'spring',
            stiffness: 300,
            damping: 25,
            delay
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
}

// Parallax container for scroll-based animations
export function ParallaxContainer({ 
  children, 
  speed = 0.5 
}: { 
  children: ReactNode; 
  speed?: number; 
}) {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      style={{
        transform: `translateY(${speed * -50}px)`,
      }}
      className="will-change-transform"
    >
      {children}
    </motion.div>
  );
}