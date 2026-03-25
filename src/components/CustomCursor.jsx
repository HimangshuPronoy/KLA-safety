import { useEffect, useRef, useState } from 'react';
import './CustomCursor.css';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const trailRef = useRef(null);
  
  const mouse = useRef({ x: -100, y: -100 });
  const trail = useRef({ x: -100, y: -100 });
  
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    let animationFrameId;

    const onMouseMove = (e) => {
      if (!isVisible) setIsVisible(true);
      mouse.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    window.addEventListener('mousemove', onMouseMove);

    const animate = () => {
      trail.current.x += (mouse.current.x - trail.current.x) * 0.15;
      trail.current.y += (mouse.current.y - trail.current.y) * 0.15;
      
      if (trailRef.current) {
        trailRef.current.style.transform = `translate3d(${trail.current.x}px, ${trail.current.y}px, 0)`;
      }
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      <div ref={dotRef} className="custom-cursor-dot" />
      <div ref={trailRef} className="custom-cursor-trail" />
    </>
  );
}
