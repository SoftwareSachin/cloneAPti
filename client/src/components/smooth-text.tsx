import { useEffect, useRef, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { createTextAnimator, TypewriterOptions } from '@/lib/gsap-text';
import { createTypeItAnimator, TypeItOptions } from '@/lib/typeit-animations';

interface SmoothTextProps {
  children: ReactNode;
  type?: 'typewriter' | 'scramble' | 'reveal-words' | 'reveal-chars' | 'fade-slide';
  options?: TypewriterOptions & {
    direction?: 'up' | 'down' | 'left' | 'right';
    delay?: number;
    duration?: number;
  };
  className?: string;
  trigger?: boolean;
}

export function SmoothText({ 
  children, 
  type = 'fade-slide', 
  options = {}, 
  className = '',
  trigger = true 
}: SmoothTextProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const animatorRef = useRef<any>(null);

  useEffect(() => {
    if (!elementRef.current || !trigger) return;

    const element = elementRef.current;
    const text = element.textContent || '';
    
    // Create animator instance
    animatorRef.current = createTextAnimator(element);

    // Apply animation based on type
    switch (type) {
      case 'typewriter':
        animatorRef.current.typewriter(text, options);
        break;
      case 'scramble':
        animatorRef.current.scramble(text, options.duration || 1);
        break;
      case 'reveal-words':
        animatorRef.current.revealWords(options.delay || 0.1);
        break;
      case 'reveal-chars':
        animatorRef.current.revealChars(options.delay || 0.02);
        break;
      case 'fade-slide':
        animatorRef.current.fadeSlide(options.direction || 'up');
        break;
    }

    animatorRef.current.play();

    return () => {
      if (animatorRef.current) {
        animatorRef.current.kill();
      }
    };
  }, [type, options, trigger]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}

// Specialized components for common use cases
export function TypewriterText({ 
  text, 
  speed = 50, 
  className = '',
  useTypeIt = true 
}: { 
  text: string; 
  speed?: number; 
  className?: string;
  useTypeIt?: boolean;
}) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    if (useTypeIt) {
      const animator = createTypeItAnimator(elementRef.current, {
        speed,
        cursor: true,
        lifeLike: true
      });
      
      animator.type(text).go();

      return () => {
        animator.destroy();
      };
    }
  }, [text, speed, useTypeIt]);

  if (useTypeIt) {
    return <div ref={elementRef} className={className} />;
  }

  return (
    <SmoothText 
      type="typewriter" 
      options={{ speed: speed / 1000, cursor: true }} 
      className={className}
    >
      {text}
    </SmoothText>
  );
}

export function ScrambleText({ 
  text, 
  duration = 1, 
  className = '' 
}: { 
  text: string; 
  duration?: number; 
  className?: string; 
}) {
  return (
    <SmoothText 
      type="scramble" 
      options={{ duration }} 
      className={className}
    >
      {text}
    </SmoothText>
  );
}

export function RevealText({ 
  children, 
  mode = 'words', 
  delay = 0.1, 
  className = '' 
}: { 
  children: ReactNode; 
  mode?: 'words' | 'chars'; 
  delay?: number; 
  className?: string; 
}) {
  return (
    <SmoothText 
      type={mode === 'words' ? 'reveal-words' : 'reveal-chars'} 
      options={{ delay }} 
      className={className}
    >
      {children}
    </SmoothText>
  );
}

// Motion-based text components for React-first approach
export function MotionText({ 
  children, 
  delay = 0, 
  className = '' 
}: { 
  children: ReactNode; 
  delay?: number; 
  className?: string; 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggeredText({ 
  text, 
  className = '' 
}: { 
  text: string; 
  className?: string; 
}) {
  const words = text.split(' ');

  return (
    <motion.div 
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.08,
            delayChildren: 0.1
          }
        }
      }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}