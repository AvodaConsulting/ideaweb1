import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [hoverLabel, setHoverLabel] = useState<string>('');
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setIsVisible(true);
      setPosition({ x: e.clientX, y: e.clientY });

      // Check if hovering over interactive elements
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactiveEl = target.closest('button, a, input, [role="button"], .interactive-hover') as HTMLElement | null;
      if (interactiveEl) {
        setIsHovered(true);
        const dataLabel = interactiveEl.getAttribute('data-cursor-label');
        if (dataLabel) {
          setHoverLabel(dataLabel);
        } else if (interactiveEl.tagName === 'A' || interactiveEl.tagName === 'BUTTON') {
          if (interactiveEl.textContent?.includes('Play') || interactiveEl.textContent?.includes('播放')) {
            setHoverLabel('PLAY');
          } else if (interactiveEl.textContent?.includes('報名') || interactiveEl.textContent?.includes('Enroll')) {
            setHoverLabel('JOIN');
          } else if (interactiveEl.textContent?.includes('課綱') || interactiveEl.textContent?.includes('Details')) {
            setHoverLabel('VIEW');
          } else {
            setHoverLabel('');
          }
        }
      } else {
        setIsHovered(false);
        setHoverLabel('');
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);
    const onMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mouseleave', onMouseLeave);

    // Smooth animation loop for trailing circle
    let animId: number;
    const lerp = () => {
      setTrailingPos(prev => ({
        x: prev.x + (position.x - prev.x) * 0.18,
        y: prev.y + (position.y - prev.y) * 0.18
      }));
      animId = requestAnimationFrame(lerp);
    };
    animId = requestAnimationFrame(lerp);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mouseleave', onMouseLeave);
      cancelAnimationFrame(animId);
    };
  }, [position.x, position.y]);

  if (!isVisible) return null;

  return (
    <>
      {/* Small Lead Dot */}
      <div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-cyan-400 rounded-full pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 shadow-sm shadow-cyan-400/80"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${isClicking ? 0.7 : 1})`
        }}
      />

      {/* Trailing Fluid Ring / Label Pill */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 rounded-full border transition-all duration-300 flex items-center justify-center ${
          isHovered
            ? 'w-14 h-14 bg-indigo-600/30 border-cyan-400 backdrop-blur-xs scale-110 shadow-lg shadow-cyan-500/20'
            : 'w-8 h-8 bg-transparent border-indigo-400/40'
        }`}
        style={{
          transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0) scale(${isClicking ? 0.85 : 1})`
        }}
      >
        {hoverLabel && (
          <span className="text-[9px] font-mono font-bold text-white tracking-widest uppercase animate-pulse">
            {hoverLabel}
          </span>
        )}
      </div>
    </>
  );
};
