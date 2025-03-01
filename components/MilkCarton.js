import React from 'react';
import styles from './MilkCarton.module.css';

const MilkCarton = ({ position = { x: 750, y: 350 }, onClick }) => {
  return (
    <div 
      className={styles.milkContainer}
      style={{ 
        left: `${position.x}px`, 
        top: `${position.y}px` 
      }}
      onClick={onClick}
      data-testid="milk"
    >
      <div className={styles.milkCarton}>
        <div className={styles.milkTop}>
          <div className={styles.straw}></div>
        </div>
        <div className={styles.milkLabel}>
          <div className={styles.labelText}>MILK</div>
        </div>
      </div>
    </div>
  );
};

export default MilkCarton; 