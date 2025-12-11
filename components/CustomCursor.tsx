'use client';

import { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const trailRef = useRef<{ x: number; y: number; opacity: number }[]>([]);
  const [trail, setTrail] = useState<{ x: number; y: number; opacity: number }[]>([]);

  useEffect(() => {
    let animationFrameId: number;

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Add to trail - reduced frequency
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
    animationFrameId = requestAnimationFrame(animateTrail);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* Subtle trail effect */}
      {trail.map((point, index) => (
        <div
          key={index}
          className="fixed w-1 h-1 rounded-full pointer-events-none z-[9997]"
          style={{
            left: `${point.x}px`,
            top: `${point.y}px`,
            transform: 'translate(-50%, -50%)',
            background: `rgba(230, 57, 70, ${point.opacity * 0.4})`,
            boxShadow: `0 0 ${point.opacity * 8}px rgba(230, 57, 70, ${point.opacity * 0.6})`,
          }}
        />
      ))}

      {/* Main cursor - Refined hexagon */}
      <div
        className="fixed pointer-events-none z-[9999] transition-all duration-200 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isClicking ? 0.85 : isPointer ? 1.4 : 1}) rotate(${isPointer ? 30 : 0}deg)`,
        }}
      >
        {/* Refined hexagon */}
        <div className="relative w-7 h-7">
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full"
            style={{
              filter: 'drop-shadow(0 0 8px rgba(230, 57, 70, 0.6)) drop-shadow(0 0 15px rgba(230, 57, 70, 0.4))',
            }}
          >
            {/* Hexagon shape */}
            <polygon
              points="50,5 93.3,27.5 93.3,72.5 50,95 6.7,72.5 6.7,27.5"
              fill="rgba(230, 57, 70, 0.05)"
              stroke="#E63946"
              strokeWidth="2"
              className="transition-all duration-300"
            />
            {/* Minimal inner crosshair */}
            <line
              x1="50"
              y1="35"
              x2="50"
              y2="65"
              stroke="#E63946"
              strokeWidth="1"
              opacity="0.4"
            />
            <line
              x1="35"
              y1="50"
              x2="65"
              y2="50"
              stroke="#E63946"
              strokeWidth="1"
              opacity="0.4"
            />
            {/* Center dot */}
            <circle
              cx="50"
              cy="50"
              r="3"
              fill="#E63946"
              className={isPointer ? 'animate-pulse' : ''}
              style={{
                filter: 'drop-shadow(0 0 6px rgba(230, 57, 70, 0.9))',
              }}
            />
          </svg>

          {/* Corner brackets - subtle */}
          {isPointer && (
            <>
              <div className="absolute -top-2 -left-2 w-2.5 h-2.5 border-t border-l border-vermilion opacity-80" />
              <div className="absolute -top-2 -right-2 w-2.5 h-2.5 border-t border-r border-vermilion opacity-80" />
              <div className="absolute -bottom-2 -left-2 w-2.5 h-2.5 border-b border-l border-vermilion opacity-80" />
              <div className="absolute -bottom-2 -right-2 w-2.5 h-2.5 border-b border-r border-vermilion opacity-80" />
            </>
          )}

          {/* Scanning line - more subtle */}
          {isPointer && (
            <div
              className="absolute inset-0 overflow-hidden opacity-60"
              style={{ clipPath: 'polygon(50% 5%, 93.3% 27.5%, 93.3% 72.5%, 50% 95%, 6.7% 72.5%, 6.7% 27.5%)' }}
            >
              <div
                className="absolute w-full h-px bg-gradient-to-r from-transparent via-vermilion to-transparent"
                style={{
                  animation: 'scan 2.5s ease-in-out infinite',
                  top: '0',
                }}
              />
            </div>
          )}
        </div>

        {/* Coordinates display on hover */}
        {isPointer && (
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
            <span className="font-mono text-[10px] text-vermilion bg-black/80 px-2 py-0.5 border border-vermilion/30">
              [{Math.round(position.x)}, {Math.round(position.y)}]
            </span>
          )}
        </div>

        {/* Minimal coordinate display */}
        {isPointer && (
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
            <span className="font-mono text-[9px] text-vermilion/70 bg-black/60 px-1.5 py-0.5 border border-vermilion/20">
              {Math.round(position.x)},{Math.round(position.y)}
            </span>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes scan {
          0% {
            top: 0;
            opacity: 0;
          }
          50% {
            opacity: 0.8;
          }
          100% {
            top: 100%;
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
}