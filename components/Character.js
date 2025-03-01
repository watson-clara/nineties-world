import React, { useState, useEffect } from 'react';
import styles from './Character.module.css';

const Character = ({ position }) => {
  const [direction, setDirection] = useState('down');
  const [isMoving, setIsMoving] = useState(false);
  
  useEffect(() => {
    const handleKeyDown = (e) => {
      setIsMoving(true);
      switch(e.key) {
        case 'ArrowUp':
          setDirection('up');
          break;
        case 'ArrowDown':
          setDirection('down');
          break;
        case 'ArrowLeft':
          setDirection('left');
          break;
        case 'ArrowRight':
          setDirection('right');
          break;
        default:
          break;
      }
    };
    
    const handleKeyUp = () => {
      setIsMoving(false);
    };
    
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);
  
  return (
    <div 
      className={`${styles.character} ${styles[direction]} ${isMoving ? styles.moving : ''}`}
      style={{ 
        left: `${position.x}px`, 
        top: `${position.y}px` 
      }}
    ></div>
  );
};

export default Character; 