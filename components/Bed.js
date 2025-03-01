import React from 'react';
import styles from './Bed.module.css';

const Bed = ({ position, onClick }) => {
  return (
    <div 
      className={styles.bed}
      style={{ 
        top: position.top || 'auto',
        left: position.left || 'auto',
        right: position.right || 'auto',
        bottom: position.bottom || 'auto'
      }}
      onClick={onClick}
      data-testid="bed"
    >
      <div className={styles.bedFrame}></div>
      <div className={styles.mattress}></div>
      <div className={styles.blanket}></div>
      <div className={styles.character}>
        <div className={styles.characterEar1}></div>
        <div className={styles.characterEar2}></div>
      </div>
    </div>
  );
};

export default Bed; 