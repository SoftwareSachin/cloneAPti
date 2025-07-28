import NProgress from 'nprogress';

// Configure NProgress
NProgress.configure({
  showSpinner: false,      // Hide the spinner
  speed: 500,              // Animation speed in ms
  minimum: 0.1,            // Minimum percentage
  easing: 'ease',          // CSS easing
  trickleSpeed: 200,       // How often to trickle
});

export { NProgress };

// Helper functions for route changes
export const startProgress = () => {
  NProgress.start();
};

export const finishProgress = () => {
  NProgress.done();
};

export const incrementProgress = (amount?: number) => {
  NProgress.inc(amount);
};