'use client';

import { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);
  const trailRef = useRef<{ x: number; y: number; opacity: number }[]>([]);
  const [trail, setTrail] = useState<{ x: number; y: number; opacity: number }[]>([]);

  useEffect(() => {
    let animationFrameId: number;

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Add to trail
      if (Math.random() > 0.7) {
        trailRef.current.push({ x: e.clientX, y: e.clientY, opacity: 1 });
        if (trailRef.current.length > 15) {
          trailRef.current.shift();
        }
      }

      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA'
      );
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleClick = (e: MouseEvent) => {
      // Create ripple effect on click
      const newRipple = { x: e.clientX, y: e.clientY, id: Date.now() };
      setRipples(prev => [...prev, newRipple]);
      setTimeout(() => {
        setRipples(prev => prev.filter(r => r.id !== newRipple.id));
      }, 800);
    };

    const animateTrail = () => {
      trailRef.current = trailRef.current.map((point, index) => ({
        ...point,
        opacity: point.opacity * 0.92,
      })).filter(point => point.opacity > 0.08);
      
      setTrail([...trailRef.current]);
      animationFrameId = requestAnimationFrame(animateTrail);
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('click', handleClick);
    animationFrameId = requestAnimationFrame(animateTrail);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('click', handleClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* Click ripple effects */}
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="fixed pointer-events-none z-[9996]"
          style={{
            left: `${ripple.x}px`,
            top: `${ripple.y}px`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div className="absolute inset-0 animate-ping-once">
            <div className="w-12 h-12 border-2 border-vermilion rounded-full opacity-75" />
          </div>
          <div className="absolute inset-0 animate-ping-once" style={{ animationDelay: '0.1s' }}>
            <div className="w-12 h-12 border border-vermilion/50 rounded-full" />
          </div>
        </div>
      ))}

      {/* Particle trail */}
      {trail.map((point, index) => (
        <div
          key={index}
          className="fixed pointer-events-none z-[9997]"
          style={{
            left: `${point.x}px`,
            top: `${point.y}px`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div 
            className="w-1.5 h-1.5 rounded-full"
            style={{
              background: `rgba(230, 57, 70, ${point.opacity * 0.5})`,
              boxShadow: `0 0 ${point.opacity * 10}px rgba(230, 57, 70, ${point.opacity * 0.7})`,
            }}
          />
        </div>
      ))}

      {/* Main cursor - Dynamic hexagon */}
      <div
        className="fixed pointer-events-none z-[9999] transition-all duration-200 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isClicking ? 0.7 : isPointer ? 1.6 : 1}) rotate(${isPointer ? 90 : 0}deg)`,
        }}
      >
        {/* Animated rings */}
        {isPointer && (
          <>
            <div className="absolute inset-0 animate-spin-slow opacity-50">
              <div className="w-12 h-12 border border-vermilion/30 rounded-full" />
            </div>
            <div className="absolute inset-0 animate-spin-reverse opacity-30">
              <div className="w-10 h-10 border border-vermilion/20 rounded-full" style={{ margin: '4px' }} />
            </div>
          </>
        )}

        {/* Main hexagon */}
        <div className="relative w-7 h-7">
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full"
            style={{
              filter: 'drop-shadow(0 0 8px rgba(230, 57, 70, 0.6)) drop-shadow(0 0 15px rgba(230, 57, 70, 0.3))',
            }}
          >
            {/* Outer hexagon */}
            <polygon
              points="50,5 93.3,27.5 93.3,72.5 50,95 6.7,72.5 6.7,27.5"
              fill="none"
              stroke="#E63946"
              strokeWidth="2.5"
              className="transition-all duration-300"
              style={{
                strokeDasharray: isPointer ? '200' : '0',
                strokeDashoffset: isPointer ? '0' : '200',
                animation: isPointer ? 'dashRotate 3s linear infinite' : 'none',
              }}
            />
            
            {/* Inner hexagon */}
            <polygon
              points="50,20 78.3,35 78.3,65 50,80 21.7,65 21.7,35"
              fill="rgba(230, 57, 70, 0.08)"
              stroke="#E63946"
              strokeWidth="1"
              opacity="0.6"
            />

            {/* Center crosshair */}
            <line x1="50" y1="40" x2="50" y2="60" stroke="#E63946" strokeWidth="1.5" opacity="0.5" />
            <line x1="40" y1="50" x2="60" y2="50" stroke="#E63946" strokeWidth="1.5" opacity="0.5" />
            
            {/* Pulsing center dot */}
            <circle
              cx="50"
              cy="50"
              r="4"
              fill="#E63946"
              className="animate-pulse-subtle"
              style={{
                filter: 'drop-shadow(0 0 6px rgba(230, 57, 70, 1))',
              }}
            />

            {/* Corner markers */}
            {isPointer && (
              <>
                <circle cx="50" cy="5" r="2" fill="#E63946" opacity="0.7" />
                <circle cx="93.3" cy="27.5" r="2" fill="#E63946" opacity="0.7" />
                <circle cx="93.3" cy="72.5" r="2" fill="#E63946" opacity="0.7" />
                <circle cx="50" cy="95" r="2" fill="#E63946" opacity="0.7" />
                <circle cx="6.7" cy="72.5" r="2" fill="#E63946" opacity="0.7" />
                <circle cx="6.7" cy="27.5" r="2" fill="#E63946" opacity="0.7" />
              </>
            )}
          </svg>

          {/* Dynamic corner brackets */}
          {isPointer && (
            <>
              <div className="absolute -top-3 -left-3 w-4 h-4 border-t-2 border-l-2 border-vermilion animate-pulse-subtle" />
              <div className="absolute -top-3 -right-3 w-4 h-4 border-t-2 border-r-2 border-vermilion animate-pulse-subtle" />
              <div className="absolute -bottom-3 -left-3 w-4 h-4 border-b-2 border-l-2 border-vermilion animate-pulse-subtle" />
              <div className="absolute -bottom-3 -right-3 w-4 h-4 border-b-2 border-r-2 border-vermilion animate-pulse-subtle" />
            </>
          )}

          {/* Scanning line */}
          {isPointer && (
            <div
              className="absolute inset-0 overflow-hidden opacity-70"
              style={{ clipPath: 'polygon(50% 5%, 93.3% 27.5%, 93.3% 72.5%, 50% 95%, 6.7% 72.5%, 6.7% 27.5%)' }}
            >
              <div
                className="absolute w-full h-px bg-gradient-to-r from-transparent via-vermilion to-transparent shadow-lg"
                style={{
                  animation: 'scan 2s ease-in-out infinite',
                  boxShadow: '0 0 10px rgba(230, 57, 70, 0.8)',
                }}
              />
            </div>
          )}
        </div>

        {/* Status text */}
        {isPointer && (
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
            <div className="font-mono text-[10px] text-vermilion bg-black/80 px-2 py-1 border border-vermilion/40 backdrop-blur-sm animate-pulse-subtle">
              <span className="inline-block w-1.5 h-1.5 bg-vermilion rounded-full mr-1.5 animate-ping-slow" />
              LOCKED
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes scan {
          0% { top: 0; opacity: 0; }
          50% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        @keyframes dashRotate {
          to { stroke-dashoffset: -400; }
        }
        @keyframes ping-once {
          0% { transform: scale(0.5); opacity: 1; }
          100% { transform: scale(3); opacity: 0; }
        }
        :global(.animate-ping-once) {
          animation: ping-once 0.8s cubic-bezier(0, 0, 0.2, 1);
        }
        :global(.animate-pulse-subtle) {
          animation: pulse-subtle 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        :global(.animate-spin-slow) {
          animation: spin 8s linear infinite;
        }
        :global(.animate-spin-reverse) {
          animation: spin 6s linear infinite reverse;
        }
        :global(.animate-ping-slow) {
          animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        @keyframes pulse-subtle {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @keyframes ping {
          75%, 100% { transform: scale(2); opacity: 0; }
        }
      `}</style>
    </>
  );
}
