import { useEffect, useState, useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

interface CursorPosition {
  x: number;
  y: number;
}

export function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [cursorSize, setCursorSize] = useState(20);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - cursorSize / 2);
      cursorY.set(e.clientY - cursorSize / 2);
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      if (target.matches('button, a, [data-cursor-hover]')) {
        setIsHovered(true);
        setCursorSize(40);
        
        // Get custom cursor text if available
        const text = target.getAttribute('data-cursor-text');
        if (text) setCursorText(text);
      }
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      setCursorSize(20);
      setCursorText('');
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
    };
  }, [cursorX, cursorY, cursorSize]);

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          className="bg-white rounded-full flex items-center justify-center text-black text-xs font-bold"
          animate={{
            width: cursorSize,
            height: cursorSize,
            scale: isHovered ? 1.5 : 1,
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30,
          }}
        >
          {cursorText && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="whitespace-nowrap"
            >
              {cursorText}
            </motion.span>
          )}
        </motion.div>
      </motion.div>

      {/* Trailing cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          className="border border-white/30 rounded-full"
          animate={{
            width: cursorSize + 20,
            height: cursorSize + 20,
            scale: isHovered ? 0.8 : 1,
          }}
          transition={{
            type: 'spring',
            stiffness: 200,
            damping: 25,
            delay: 0.1,
          }}
        />
      </motion.div>
    </>
  );
}

// Magnetic cursor effect for specific elements
export function MagneticCursor({ children, strength = 0.3 }: { 
  children: React.ReactNode; 
  strength?: number; 
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      setPosition({ x: x * strength, y: y * strength });
    };

    const handleMouseLeave = () => {
      setPosition({ x: 0, y: 0 });
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [strength]);

  return (
    <motion.div
      ref={ref}
      style={{
        x: position.x,
        y: position.y,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      data-cursor-hover
      data-cursor-text="Click"
    >
      {children}
    </motion.div>
  );
}