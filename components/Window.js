import React from 'react';
import styles from './Window.module.css';

const Window = ({ position }) => {
  // Create random stars for the window
  const stars = Array(5).fill().map((_, i) => ({
    top: `${Math.floor(Math.random() * 80)}%`,
    left: `${Math.floor(Math.random() * 80)}%`,
  }));

  return (
    <div 
      className={styles.window}
      style={{ 
        top: position.top || 'auto',
        left: position.left || 'auto',
        right: position.right || 'auto',
        bottom: position.bottom || 'auto'
      }}
      data-testid="window"
    >
      <div className={styles.windowFrame}></div>
      {stars.map((star, i) => (
        <div 
          key={i} 
          className={styles.windowStar} 
          style={{ top: star.top, left: star.left }}
        ></div>
      ))}
    </div>
  );
};

export default Window; 