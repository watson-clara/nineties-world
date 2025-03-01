import React from 'react';
import styles from './Desk.module.css';

const Desk = ({ position, onClick }) => {
  return (
    <div 
      className={styles.desk}
      style={{ 
        top: position.top || 'auto',
        left: position.left || 'auto',
        right: position.right || 'auto',
        bottom: position.bottom || 'auto'
      }}
      onClick={onClick}
      data-testid="desk"
    >
      <div className={styles.deskTop}></div>
      <div className={styles.deskDrawer}>
        <div className={styles.drawerHandle}></div>
      </div>
      <div className={styles.computer}>
        <div className={styles.computerScreen}></div>
      </div>
    </div>
  );
};

export default Desk; 