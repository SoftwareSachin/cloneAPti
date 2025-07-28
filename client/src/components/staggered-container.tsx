import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from '@/lib/page-transitions';
import { ReactNode } from 'react';

interface StaggeredContainerProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  staggerDelay?: number;
}

export function StaggeredContainer({ 
  children, 
  className = '', 
  delay = 0.1,
  staggerDelay = 0.08 
}: StaggeredContainerProps) {
  const customContainerVariants = {
    ...containerVariants,
    in: {
      transition: { 
        staggerChildren: staggerDelay, 
        delayChildren: delay,
        when: "beforeChildren"
      }
    },
  };

  return (
    <motion.div
      variants={customContainerVariants}
      initial="initial"
      animate="in"
      exit="out"
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggeredItemProps {
  children: ReactNode;
  className?: string;
}

export function StaggeredItem({ children, className = '' }: StaggeredItemProps) {
  return (
    <motion.div
      variants={itemVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}