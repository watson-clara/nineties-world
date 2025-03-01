import React from 'react';
import styles from './Lamp.module.css';

const Lamp = ({ position }) => {
  return (
    <div 
      className={styles.lamp}
      style={{ 
        top: position.top || 'auto',
        left: position.left || 'auto',
        right: position.right || 'auto',
        bottom: position.bottom || 'auto'
      }}
      data-testid="lamp"
    >
      <div className={styles.lampShade}></div>
      <div className={styles.lampBase}></div>
    </div>
  );
};

export default Lamp; 