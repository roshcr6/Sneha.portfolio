'use client';

import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [followerPosition, setFollowerPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON'
      );
    };

    window.addEventListener('mousemove', updatePosition);

    const followInterval = setInterval(() => {
      setFollowerPosition((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.1,
        y: prev.y + (position.y - prev.y) * 0.1,
      }));
    }, 16);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      clearInterval(followInterval);
    };
  }, [position]);

  return (
    <>
      {/* Main cursor dot */}
      <div
        className="fixed w-2 h-2 rounded-full bg-vermilion pointer-events-none z-[9999] mix-blend-difference"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.2s, height 0.2s',
          width: isPointer ? '0px' : '8px',
          height: isPointer ? '0px' : '8px',
        }}
      />

      {/* Follower circle */}
      <div
        className="fixed rounded-full border-2 border-vermilion pointer-events-none z-[9998] mix-blend-difference"
        style={{
          left: `${followerPosition.x}px`,
          top: `${followerPosition.y}px`,
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.3s, height 0.3s',
          width: isPointer ? '60px' : '30px',
          height: isPointer ? '60px' : '30px',
        }}
      />

      {/* Glow effect */}
      <div
        className="fixed rounded-full pointer-events-none z-[9997] blur-xl"
        style={{
          left: `${followerPosition.x}px`,
          top: `${followerPosition.y}px`,
          transform: 'translate(-50%, -50%)',
          width: '100px',
          height: '100px',
          background: 'radial-gradient(circle, rgba(230, 57, 70, 0.2) 0%, transparent 70%)',
        }}
      />
    </>
  );
}
