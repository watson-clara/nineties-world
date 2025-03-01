import React from 'react';
import styles from './TeddyBear.module.css';

const TeddyBear = ({ position = { x: 650, y: 450 }, onClick }) => {
  return (
    <div 
      className={styles.teddyContainer}
      style={{ 
        left: `${position.x}px`, 
        top: `${position.y}px` 
      }}
      onClick={onClick}
      data-testid="teddy"
    >
      <div className={styles.teddyHead}>
        <div className={styles.teddyEar1}></div>
        <div className={styles.teddyEar2}></div>
        <div className={styles.teddyFace}>
          <div className={styles.teddyEye1}></div>
          <div className={styles.teddyEye2}></div>
          <div className={styles.teddyNose}></div>
        </div>
      </div>
      <div className={styles.teddyBody}>
        <div className={styles.teddyArm1}></div>
        <div className={styles.teddyArm2}></div>
        <div className={styles.teddyLeg1}></div>
        <div className={styles.teddyLeg2}></div>
      </div>
    </div>
  );
};

export default TeddyBear; 