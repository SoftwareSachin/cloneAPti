// Page transition variants and configuration for Framer Motion
export const pageVariants = {
  initial: { 
    opacity: 0, 
    y: 20,
    scale: 0.98
  },
  in: { 
    opacity: 1, 
    y: 0,
    scale: 1
  },
  out: { 
    opacity: 0, 
    y: -20,
    scale: 1.02
  },
};

export const pageTransition = {
  type: 'spring',
  stiffness: 400,
  damping: 40,
  mass: 1,
  duration: 0.6,
};

// Alternative smooth easing transition
export const smoothPageTransition = {
  duration: 0.4,
  ease: [0.25, 0.46, 0.45, 0.94], // Custom cubic-bezier for smooth feel
};

// Staggered container variants for child animations
export const containerVariants = {
  initial: {
    transition: { staggerChildren: 0.03, delayChildren: 0.1 }
  },
  in: {
    transition: { 
      staggerChildren: 0.08, 
      delayChildren: 0.2,
      when: "beforeChildren"
    }
  },
  out: {
    transition: { 
      staggerChildren: 0.03, 
      when: "afterChildren"
    }
  },
};

// Child item variants for staggered animations
export const itemVariants = {
  initial: { 
    opacity: 0, 
    y: 15,
    transition: { duration: 0.3 }
  },
  in: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4 }
  },
  out: { 
    opacity: 0, 
    y: -10,
    transition: { duration: 0.2 }
  },
};

// Slide variants for different directions
export const slideVariants = {
  initial: (direction: 'left' | 'right' | 'up' | 'down' = 'right') => ({
    x: direction === 'left' ? -100 : direction === 'right' ? 100 : 0,
    y: direction === 'up' ? -100 : direction === 'down' ? 100 : 0,
    opacity: 0,
  }),
  in: {
    x: 0,
    y: 0,
    opacity: 1,
  },
  out: (direction: 'left' | 'right' | 'up' | 'down' = 'left') => ({
    x: direction === 'left' ? -100 : direction === 'right' ? 100 : 0,
    y: direction === 'up' ? -100 : direction === 'down' ? 100 : 0,
    opacity: 0,
  }),
};