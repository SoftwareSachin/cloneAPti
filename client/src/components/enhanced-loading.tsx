import { motion } from 'framer-motion';

const spinnerVariants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "linear"
    }
  }
};

const dotsVariants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      repeat: Infinity,
      repeatType: "reverse" as const,
      duration: 1
    }
  }
};

const dotVariants = {
  initial: { opacity: 0.3, scale: 0.8 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.3 }
  }
};

export function EnhancedLoading() {
  return (
    <motion.div 
      className="min-h-screen bg-white dark:bg-slate-950 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="text-center">
        {/* Animated spinner */}
        <motion.div
          variants={spinnerVariants}
          animate="animate"
          className="w-8 h-8 border-4 border-slate-300 dark:border-slate-600 border-t-slate-900 dark:border-t-white rounded-full mx-auto mb-6"
        />
        
        {/* Loading text with animated dots */}
        <div className="flex items-center justify-center space-x-1">
          <span className="text-slate-600 dark:text-slate-300 text-sm font-medium">Loading</span>
          <motion.div
            variants={dotsVariants}
            animate="animate"
            className="flex space-x-1"
          >
            <motion.span variants={dotVariants} className="w-1 h-1 bg-slate-600 dark:bg-slate-300 rounded-full block" />
            <motion.span variants={dotVariants} className="w-1 h-1 bg-slate-600 dark:bg-slate-300 rounded-full block" />
            <motion.span variants={dotVariants} className="w-1 h-1 bg-slate-600 dark:bg-slate-300 rounded-full block" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

// Simple pulse loading for inline use
export function PulseLoading({ className = '' }: { className?: string }) {
  return (
    <motion.div
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      className={`flex items-center justify-center ${className}`}
    >
      <div className="w-6 h-6 border-2 border-slate-300 border-t-slate-900 rounded-full animate-spin" />
    </motion.div>
  );
}