import { gsap } from 'gsap';

// TextPlugin registration - use dynamic import for better compatibility
let textPluginAvailable = false;
try {
  // Dynamic import for TextPlugin
  import('gsap/TextPlugin').then((module) => {
    gsap.registerPlugin(module.TextPlugin);
    textPluginAvailable = true;
  }).catch(() => {
    console.warn('GSAP TextPlugin not available, using fallback animations');
  });
} catch (e) {
  console.warn('GSAP TextPlugin not available, using fallback animations');
}

export interface TypewriterOptions {
  speed?: number;
  delay?: number;
  cursor?: boolean;
  loop?: boolean;
  onComplete?: () => void;
}

export class GSAPTextAnimator {
  private element: HTMLElement;
  private timeline: gsap.core.Timeline;

  constructor(element: HTMLElement | string) {
    this.element = typeof element === 'string' 
      ? document.querySelector(element) as HTMLElement 
      : element;
    this.timeline = gsap.timeline();
  }

  // Typewriter effect
  typewriter(text: string, options: TypewriterOptions = {}) {
    const {
      speed = 0.05,
      delay = 0,
      cursor = true,
      loop = false,
      onComplete
    } = options;

    if (cursor) {
      this.element.style.borderRight = '2px solid';
      this.element.style.animation = 'typewriter-cursor 1s infinite';
    }

    if (textPluginAvailable) {
      this.timeline.to(this.element, {
        duration: text.length * speed,
        text: text,
        delay,
        ease: 'none',
        onComplete: () => {
          if (cursor) {
            this.element.style.borderRight = 'none';
            this.element.style.animation = 'none';
          }
          if (loop) {
            setTimeout(() => {
              this.clearText().then(() => this.typewriter(text, options));
            }, 2000);
          }
          onComplete?.();
        }
      });
    } else {
      // Fallback typewriter without TextPlugin
      this.fallbackTypewriter(text, options);
    }

    return this;
  }

  // Fallback typewriter method
  private fallbackTypewriter(text: string, options: TypewriterOptions) {
    const { speed = 0.05, delay = 0, cursor = true, loop = false, onComplete } = options;
    
    this.element.textContent = '';
    
    for (let i = 0; i <= text.length; i++) {
      this.timeline.to(this.element, {
        duration: 0.01,
        delay: delay + (i * speed),
        ease: 'none',
        onUpdate: () => {
          this.element.textContent = text.substring(0, i);
        },
        onComplete: i === text.length ? () => {
          if (cursor) {
            this.element.style.borderRight = 'none';
            this.element.style.animation = 'none';
          }
          if (loop) {
            setTimeout(() => {
              this.clearText().then(() => this.typewriter(text, options));
            }, 2000);
          }
          onComplete?.();
        } : undefined
      });
    }
  }

  // Scramble text effect (fallback without TextPlugin)
  scramble(text: string, duration: number = 1) {
    if (textPluginAvailable) {
      const chars = "!<>-_\\/[]{}—=+*^?#________";
      
      this.timeline.to(this.element, {
        duration: duration * 0.7,
        text: {
          value: text,
          delimiter: "",
          speed: 1
        },
        ease: "none"
      });
    } else {
      // Fallback scramble animation
      this.fallbackScramble(text, duration);
    }

    return this;
  }

  // Fallback scramble method
  private fallbackScramble(text: string, duration: number) {
    const chars = "!<>-_\\/[]{}—=+*^?#";
    const originalText = this.element.textContent || '';
    const steps = 20;
    
    for (let i = 0; i <= steps; i++) {
      const progress = i / steps;
      const scrambledText = text.split('').map((char, index) => {
        if (progress * text.length > index) {
          return char;
        }
        return chars[Math.floor(Math.random() * chars.length)];
      }).join('');
      
      this.timeline.to(this.element, {
        duration: duration / steps,
        delay: (duration / steps) * i,
        ease: "none",
        onUpdate: () => {
          this.element.textContent = scrambledText;
        }
      });
    }
  }

  // Reveal text word by word
  revealWords(delay: number = 0.1) {
    const words = this.element.textContent?.split(' ') || [];
    this.element.innerHTML = words.map(word => `<span class="word">${word}</span>`).join(' ');
    
    const wordElements = this.element.querySelectorAll('.word');
    
    this.timeline.from(wordElements, {
      duration: 0.6,
      y: 50,
      opacity: 0,
      stagger: delay,
      ease: "power2.out"
    });

    return this;
  }

  // Reveal text character by character
  revealChars(delay: number = 0.02) {
    const text = this.element.textContent || '';
    this.element.innerHTML = text.split('').map(char => 
      char === ' ' ? ' ' : `<span class="char">${char}</span>`
    ).join('');
    
    const charElements = this.element.querySelectorAll('.char');
    
    this.timeline.from(charElements, {
      duration: 0.5,
      y: 20,
      opacity: 0,
      stagger: delay,
      ease: "power2.out"
    });

    return this;
  }

  // Fade and slide effect
  fadeSlide(direction: 'up' | 'down' | 'left' | 'right' = 'up', distance: number = 30) {
    const transforms: Record<string, object> = {
      up: { y: distance },
      down: { y: -distance },
      left: { x: distance },
      right: { x: -distance }
    };

    this.timeline.from(this.element, {
      duration: 0.8,
      opacity: 0,
      ...transforms[direction],
      ease: "power2.out"
    });

    return this;
  }

  // Clear text
  async clearText(): Promise<void> {
    return new Promise((resolve) => {
      gsap.to(this.element, {
        duration: 0.5,
        text: "",
        ease: "none",
        onComplete: resolve
      });
    });
  }

  // Play timeline
  play() {
    this.timeline.play();
    return this;
  }

  // Pause timeline
  pause() {
    this.timeline.pause();
    return this;
  }

  // Kill timeline
  kill() {
    this.timeline.kill();
    return this;
  }
}

// Utility function to create text animator
export function createTextAnimator(element: HTMLElement | string) {
  return new GSAPTextAnimator(element);
}

// Add CSS for cursor animation
const style = document.createElement('style');
style.textContent = `
  @keyframes typewriter-cursor {
    0%, 50% { border-color: transparent; }
    51%, 100% { border-color: currentColor; }
  }
`;
document.head.appendChild(style);