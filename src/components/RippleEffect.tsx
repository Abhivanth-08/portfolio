import { useEffect, useRef } from 'react';

interface RippleEffectProps {
  children: React.ReactNode;
  className?: string;
}

export const RippleEffect = ({ children, className = '' }: RippleEffectProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createRipple = (e: MouseEvent) => {
      const ripple = document.createElement('div');
      const rect = container.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: radial-gradient(circle, hsl(40 80% 65% / 0.3) 0%, transparent 70%);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
        z-index: 1;
      `;

      container.appendChild(ripple);

      setTimeout(() => {
        if (ripple.parentNode) {
          ripple.parentNode.removeChild(ripple);
        }
      }, 600);
    };

    container.addEventListener('mousedown', createRipple);

    return () => {
      container.removeEventListener('mousedown', createRipple);
    };
  }, []);

  return (
    <div ref={containerRef} className={`ripple-container relative ${className}`}>
      {children}
    </div>
  );
};
