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

      // Add to trail
      trailRef.current.push({ x: e.clientX, y: e.clientY, opacity: 1 });
      if (trailRef.current.length > 20) {
        trailRef.current.shift();
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
        opacity: point.opacity * 0.9,
      })).filter(point => point.opacity > 0.05);
      
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
      {/* Trail effect */}
      {trail.map((point, index) => (
        <div
          key={index}
          className="fixed w-1 h-1 rounded-full pointer-events-none z-[9997]"
          style={{
            left: `${point.x}px`,
            top: `${point.y}px`,
            transform: 'translate(-50%, -50%)',
            background: `rgba(230, 57, 70, ${point.opacity * 0.6})`,
            boxShadow: `0 0 ${point.opacity * 10}px rgba(230, 57, 70, ${point.opacity * 0.8})`,
          }}
        />
      ))}

      {/* Main cursor - Hexagon with scanner effect */}
      <div
        className="fixed pointer-events-none z-[9999] transition-all duration-200"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isClicking ? 0.8 : isPointer ? 1.5 : 1}) rotate(${isPointer ? 45 : 0}deg)`,
        }}
      >
        {/* Outer hexagon */}
        <div className="relative w-8 h-8">
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full"
            style={{
              filter: 'drop-shadow(0 0 12px rgba(230, 57, 70, 1)) drop-shadow(0 0 20px rgba(230, 57, 70, 0.8)) drop-shadow(0 0 30px rgba(230, 57, 70, 0.6))',
            }}
          >
            {/* Hexagon shape */}
            <polygon
              points="50,5 93.3,27.5 93.3,72.5 50,95 6.7,72.5 6.7,27.5"
              fill="rgba(230, 57, 70, 0.1)"
              stroke="#E63946"
              strokeWidth="3"
              className="transition-all duration-300"
              style={{
                filter: 'drop-shadow(0 0 5px rgba(230, 57, 70, 0.8))',
              }}
            />
            {/* Inner lines - scanner effect */}
            <line
              x1="50"
              y1="5"
              x2="50"
              y2="95"
              stroke="#E63946"
              strokeWidth="1"
              opacity="0.3"
            />
            <line
              x1="6.7"
              y1="72.5"
              x2="93.3"
              y2="27.5"
              stroke="#E63946"
              strokeWidth="1"
              opacity="0.3"
            />
            <line
              x1="6.7"
              y1="27.5"
              x2="93.3"
              y2="72.5"
              stroke="#E63946"
              strokeWidth="1"
              opacity="0.3"
            />
            {/* Center dot */}
            <circle
              cx="50"
              cy="50"
              r="4"
              fill="#E63946"
              className={isPointer ? 'animate-pulse' : ''}
              style={{
                filter: 'drop-shadow(0 0 8px rgba(230, 57, 70, 1)) drop-shadow(0 0 15px rgba(230, 57, 70, 0.8))',
              }}
            />
          </svg>

          {/* Corner brackets */}
          {isPointer && (
            <>
              <div className="absolute -top-2 -left-2 w-3 h-3 border-t-2 border-l-2 border-vermilion shadow-[0_0_10px_rgba(230,57,70,1)]" />
              <div className="absolute -top-2 -right-2 w-3 h-3 border-t-2 border-r-2 border-vermilion shadow-[0_0_10px_rgba(230,57,70,1)]" />
              <div className="absolute -bottom-2 -left-2 w-3 h-3 border-b-2 border-l-2 border-vermilion shadow-[0_0_10px_rgba(230,57,70,1)]" />
              <div className="absolute -bottom-2 -right-2 w-3 h-3 border-b-2 border-r-2 border-vermilion shadow-[0_0_10px_rgba(230,57,70,1)]" />
            </>
          )}

          {/* Scanning line animation */}
          {isPointer && (
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: 'polygon(50% 5%, 93.3% 27.5%, 93.3% 72.5%, 50% 95%, 6.7% 72.5%, 6.7% 27.5%)' }}
            >
              <div
                className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-vermilion to-transparent"
                style={{
                  animation: 'scan 2s ease-in-out infinite',
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
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes scan {
          0%, 100% {
            top: 0;
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            top: 100%;
          }
        }
      `}</style>
    </>
  );
}
