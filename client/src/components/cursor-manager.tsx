import { createContext, useContext, useState, ReactNode } from 'react';
import { CustomCursor } from './custom-cursor';
import { ParticleCursor, RippleEffect, CursorFollower } from './cursor-effects';

interface CursorContextType {
  showCustomCursor: boolean;
  showParticles: boolean;
  showRipples: boolean;
  showFollower: boolean;
  toggleCustomCursor: () => void;
  toggleParticles: () => void;
  toggleRipples: () => void;
  toggleFollower: () => void;
  enableAll: () => void;
  disableAll: () => void;
}

const CursorContext = createContext<CursorContextType | undefined>(undefined);

export function CursorProvider({ children }: { children: ReactNode }) {
  const [showCustomCursor, setShowCustomCursor] = useState(true);
  const [showParticles, setShowParticles] = useState(true);
  const [showRipples, setShowRipples] = useState(true);
  const [showFollower, setShowFollower] = useState(false);

  const toggleCustomCursor = () => setShowCustomCursor(prev => !prev);
  const toggleParticles = () => setShowParticles(prev => !prev);
  const toggleRipples = () => setShowRipples(prev => !prev);
  const toggleFollower = () => setShowFollower(prev => !prev);

  const enableAll = () => {
    setShowCustomCursor(true);
    setShowParticles(true);
    setShowRipples(true);
    setShowFollower(true);
  };

  const disableAll = () => {
    setShowCustomCursor(false);
    setShowParticles(false);
    setShowRipples(false);
    setShowFollower(false);
  };

  return (
    <CursorContext.Provider value={{
      showCustomCursor,
      showParticles,
      showRipples,
      showFollower,
      toggleCustomCursor,
      toggleParticles,
      toggleRipples,
      toggleFollower,
      enableAll,
      disableAll,
    }}>
      {children}
      
      {/* Render cursor effects */}
      {showCustomCursor && <CustomCursor />}
      {showParticles && <ParticleCursor />}
      {showRipples && <RippleEffect />}
      {showFollower && <CursorFollower />}
    </CursorContext.Provider>
  );
}

export function useCursor() {
  const context = useContext(CursorContext);
  if (context === undefined) {
    throw new Error('useCursor must be used within a CursorProvider');
  }
  return context;
}

// Cursor settings component
export function CursorSettings() {
  const {
    showCustomCursor,
    showParticles,
    showRipples,
    showFollower,
    toggleCustomCursor,
    toggleParticles,
    toggleRipples,
    toggleFollower,
    enableAll,
    disableAll,
  } = useCursor();

  return (
    <div className="fixed bottom-4 right-4 bg-white/10 backdrop-blur-lg rounded-lg p-4 border border-white/20 z-[10000]">
      <h3 className="text-sm font-semibold mb-3 text-white">Cursor Effects</h3>
      
      <div className="space-y-2">
        <label className="flex items-center space-x-2 text-sm text-white">
          <input
            type="checkbox"
            checked={showCustomCursor}
            onChange={toggleCustomCursor}
            className="rounded"
          />
          <span>Custom Cursor</span>
        </label>
        
        <label className="flex items-center space-x-2 text-sm text-white">
          <input
            type="checkbox"
            checked={showParticles}
            onChange={toggleParticles}
            className="rounded"
          />
          <span>Particle Trail</span>
        </label>
        
        <label className="flex items-center space-x-2 text-sm text-white">
          <input
            type="checkbox"
            checked={showRipples}
            onChange={toggleRipples}
            className="rounded"
          />
          <span>Click Ripples</span>
        </label>
        
        <label className="flex items-center space-x-2 text-sm text-white">
          <input
            type="checkbox"
            checked={showFollower}
            onChange={toggleFollower}
            className="rounded"
          />
          <span>Cursor Follower</span>
        </label>
      </div>
      
      <div className="flex space-x-2 mt-4">
        <button
          onClick={enableAll}
          className="px-3 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600 transition-colors"
        >
          Enable All
        </button>
        <button
          onClick={disableAll}
          className="px-3 py-1 bg-gray-500 text-white text-xs rounded hover:bg-gray-600 transition-colors"
        >
          Disable All
        </button>
      </div>
    </div>
  );
}