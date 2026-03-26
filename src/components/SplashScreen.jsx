import { useEffect, useState } from 'react';
import './SplashScreen.css';

export default function SplashScreen() {
  const [complete, setComplete] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Show splash for 1.5s, then initiate fade out
    const timer = setTimeout(() => {
      setComplete(true);
      // Wait for CSS transition (0.5s) before unmounting
      setTimeout(() => setVisible(false), 500); 
    }, 1500); 
    
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className={`splash-screen ${complete ? 'fade-out' : ''}`}>
      <div className="splash-content">
        <h1 className="splash-title">SRC</h1>
        <p className="splash-subtitle">SAFETY NETS</p>
        <div className="splash-loader"></div>
      </div>
    </div>
  );
}
