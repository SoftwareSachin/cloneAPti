import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  color: string;
}

export function ParticleCursor() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const particleId = useRef(0);
  const lastPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const colors = ['#3b82f6', '#8b5cf6', '#ef4444', '#10b981', '#f59e0b'];
    
    const createParticle = (x: number, y: number): Particle => ({
      id: particleId.current++,
      x,
      y,
      vx: (Math.random() - 0.5) * 4,
      vy: (Math.random() - 0.5) * 4,
      life: 60,
      maxLife: 60,
      size: Math.random() * 4 + 2,
      color: colors[Math.floor(Math.random() * colors.length)],
    });

    const handleMouseMove = (e: MouseEvent) => {
      const distance = Math.sqrt(
        Math.pow(e.clientX - lastPos.current.x, 2) + 
        Math.pow(e.clientY - lastPos.current.y, 2)
      );

      if (distance > 10) {
        setParticles(prev => [
          ...prev.slice(-20), // Keep only last 20 particles for performance
          createParticle(e.clientX, e.clientY),
        ]);
        
        lastPos.current = { x: e.clientX, y: e.clientY };
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Update particles
    const interval = setInterval(() => {
      setParticles(prev => 
        prev
          .map(particle => ({
            ...particle,
            x: particle.x + particle.vx,
            y: particle.y + particle.vy,
            life: particle.life - 1,
            vx: particle.vx * 0.98,
            vy: particle.vy * 0.98,
          }))
          .filter(particle => particle.life > 0)
      );
    }, 16);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9997]">
      <AnimatePresence>
        {particles.map(particle => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              left: particle.x,
              top: particle.y,
              width: particle.size,
              height: particle.size,
              backgroundColor: particle.color,
            }}
            initial={{ scale: 0, opacity: 1 }}
            animate={{ 
              scale: 1, 
              opacity: particle.life / particle.maxLife,
            }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}

// Ripple effect on click
export function RippleEffect() {
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const rippleId = useRef(0);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const newRipple = {
        id: rippleId.current++,
        x: e.clientX,
        y: e.clientY,
      };

      setRipples(prev => [...prev, newRipple]);

      // Remove ripple after animation
      setTimeout(() => {
        setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
      }, 600);
    };

    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9996]">
      <AnimatePresence>
        {ripples.map(ripple => (
          <motion.div
            key={ripple.id}
            className="absolute border-2 border-blue-400 rounded-full"
            style={{
              left: ripple.x - 25,
              top: ripple.y - 25,
            }}
            initial={{ 
              width: 0, 
              height: 0, 
              opacity: 1,
              borderWidth: 2 
            }}
            animate={{ 
              width: 100, 
              height: 100, 
              opacity: 0,
              borderWidth: 0 
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}

// Cursor follow element
export function CursorFollower() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed pointer-events-none z-[9995]"
          style={{
            left: mousePos.x - 50,
            top: mousePos.y - 50,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <div className="w-24 h-24 rounded-full bg-gradient-to-r from-purple-400/20 to-pink-400/20 backdrop-blur-sm border border-white/10" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}