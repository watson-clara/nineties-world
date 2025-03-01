import React from 'react';
import styles from './Computer.module.css';

const Computer = ({ position = { x: '20%', y: '40%' } }) => {
  return (
    <div 
      className={styles.computerContainer}
      style={{ 
        left: position.x, 
        bottom: position.y 
      }}
      data-testid="computer"
    >
      <div className={styles.monitor}>
        <div className={`${styles.screen} ${styles.screenOn}`}>
          <div className={styles.desktopScreen}>
            <div className={styles.desktopIcon}>My Docs</div>
            <div className={styles.desktopIcon}>Games</div>
            <div className={styles.desktopIcon}>Photos</div>
            <div className={styles.desktopIcon}>Music</div>
          </div>
        </div>
        <div className={styles.monitorStand}></div>
      </div>
      <div className={styles.keyboard}></div>
    </div>
  );
};

export default Computer; 