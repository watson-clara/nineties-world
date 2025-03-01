import React from 'react';
import styles from './Gameboy.module.css';

const Gameboy = ({ position = { x: 400, y: 350 }, onClick }) => {
  return (
    <div 
      className={styles.gameboyContainer}
      style={{ 
        left: `${position.x}px`, 
        top: `${position.y}px` 
      }}
      onClick={onClick}
      data-testid="gameboy"
    >
      <div className={styles.gameboyBody}>
        <div className={styles.gameboyScreen}>
          <div className={styles.screenContent}></div>
        </div>
        <div className={styles.gameboyControls}>
          <div className={styles.dpad}>
            <div className={styles.dpadHorizontal}></div>
            <div className={styles.dpadVertical}></div>
          </div>
          <div className={styles.buttons}>
            <div className={styles.buttonA}></div>
            <div className={styles.buttonB}></div>
          </div>
        </div>
        <div className={styles.startSelect}>
          <div className={styles.startButton}></div>
          <div className={styles.selectButton}></div>
        </div>
      </div>
    </div>
  );
};

export default Gameboy; 