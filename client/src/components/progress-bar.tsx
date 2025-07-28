import { motion, AnimatePresence } from 'framer-motion';
import { useProgress } from '@/hooks/use-progress';
import { useState, useEffect } from 'react';

export function ProgressBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Listen for NProgress start/done events
    const handleStart = () => setIsVisible(true);
    const handleDone = () => {
      // Delay hiding to allow animation to complete
      setTimeout(() => setIsVisible(false), 300);
    };

    // Custom events for NProgress integration
    document.addEventListener('nprogress:start', handleStart);
    document.addEventListener('nprogress:done', handleDone);

    return () => {
      document.removeEventListener('nprogress:start', handleStart);
      document.removeEventListener('nprogress:done', handleDone);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ 
            scaleX: [0, 0.3, 0.7, 1],
            opacity: 1 
          }}
          exit={{ 
            scaleX: 1,
            opacity: 0 
          }}
          transition={{
            scaleX: { 
              duration: 0.8, 
              ease: [0.25, 0.46, 0.45, 0.94],
              times: [0, 0.3, 0.7, 1]
            },
            opacity: { duration: 0.3 }
          }}
          className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 z-50 origin-left"
          style={{ width: '100%' }}
        />
      )}
    </AnimatePresence>
  );
}

// Alternative minimal progress indicator
export function MinimalProgress() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleStart = () => {
      setIsVisible(true);
      setProgress(0);
    };
    
    const handleProgress = () => {
      setProgress(prev => Math.min(prev + Math.random() * 30, 90));
    };
    
    const handleDone = () => {
      setProgress(100);
      setTimeout(() => setIsVisible(false), 500);
    };

    document.addEventListener('nprogress:start', handleStart);
    document.addEventListener('nprogress:progress', handleProgress);
    document.addEventListener('nprogress:done', handleDone);

    return () => {
      document.removeEventListener('nprogress:start', handleStart);
      document.removeEventListener('nprogress:progress', handleProgress);
      document.removeEventListener('nprogress:done', handleDone);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed top-0 left-0 w-full h-0.5 bg-gray-200 dark:bg-gray-800 z-50"
        >
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="h-full bg-gradient-to-r from-blue-500 to-blue-600"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}