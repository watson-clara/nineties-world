import React, { useState, useEffect } from 'react';
import styles from './PixelRoom.module.css';
import Character from './Character';

const PixelRoom = ({ children }) => {
  const [characterPosition, setCharacterPosition] = useState({ x: 400, y: 300 });
  const [activeItem, setActiveItem] = useState(null);
  
  // Handle character movement with arrow keys
  useEffect(() => {
    const handleKeyDown = (e) => {
      const speed = 10;
      
      switch(e.key) {
        case 'ArrowUp':
          setCharacterPosition(prev => ({ ...prev, y: Math.max(prev.y - speed, 100) }));
          break;
        case 'ArrowDown':
          setCharacterPosition(prev => ({ ...prev, y: Math.min(prev.y + speed, 550) }));
          break;
        case 'ArrowLeft':
          setCharacterPosition(prev => ({ ...prev, x: Math.max(prev.x - speed, 50) }));
          break;
        case 'ArrowRight':
          setCharacterPosition(prev => ({ ...prev, x: Math.min(prev.x + speed, 750) }));
          break;
        default:
          break;
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);
  
  // Check for interactions with furniture
  useEffect(() => {
    // This would check if character is near furniture and allow interaction
    // For simplicity, we'll implement this later
  }, [characterPosition]);
  
  return (
    <div className={styles.roomContainer}>
      <div className={styles.room}>
        {/* Wall and floor sections */}
        <div className={styles.wall}></div>
        <div className={styles.floor}></div>
        
        <div className={styles.furniture}>
          {/* All furniture and interactive items */}
          {children}
        </div>
        
        {/* Character */}
        <Character position={characterPosition} />
        
        <h1 className={styles.roomTitle}>
          ♥ KAWAII PIXEL ROOM ♥
        </h1>
        
        {/* Game instructions */}
        <div className={styles.instructions}>
          Use arrow keys to move. Walk up to items to interact.
        </div>
      </div>
    </div>
  );
};

export default PixelRoom; 